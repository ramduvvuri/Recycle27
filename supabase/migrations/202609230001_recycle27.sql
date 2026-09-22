-- RECYCLE27 serverless content backend. Apply with `supabase db push` or the
-- Supabase SQL editor. Vercel only needs the environment variables in .env.example.
create extension if not exists pgcrypto;

create or replace function public.is_admin()
returns boolean language sql stable as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

create table if not exists announcements (
  id uuid primary key default gen_random_uuid(), title text not null, body text not null,
  link_url text, link_label text, is_active boolean not null default true,
  is_featured boolean not null default false, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists important_dates (
  id uuid primary key default gen_random_uuid(), label text not null, date date not null,
  description text, category text not null default 'submission', is_active boolean not null default true,
  is_countdown_target boolean not null default false, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists speakers (
  id uuid primary key default gen_random_uuid(), name text not null, designation text not null,
  institution text not null, country text not null, bio text, topic text, abstract text,
  speaker_type text not null default 'keynote', image_url text, email text, website text,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists committee_members (
  id uuid primary key default gen_random_uuid(), name text not null, designation text, institution text,
  country text, committee_type text not null default 'organizing', role text, image_url text,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists registration_categories (
  id uuid primary key default gen_random_uuid(), name text not null, description text, icon_name text,
  early_bird_fee numeric(10,2), regular_fee numeric(10,2), onsite_fee numeric(10,2), currency text not null default 'INR',
  early_bird_deadline date, regular_deadline date, is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists programme_days (
  id uuid primary key default gen_random_uuid(), label text not null, date date not null, theme text,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists programme_items (
  id uuid primary key default gen_random_uuid(), day_id uuid not null references programme_days(id) on delete cascade,
  time_start time not null, time_end time not null, title text not null, description text, location text,
  session_type text not null default 'session', speaker_id uuid references speakers(id) on delete set null,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists documents (
  id uuid primary key default gen_random_uuid(), title text not null, document_type text not null, file_url text not null,
  file_format text, file_size text, label text, is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists accommodation_options (
  id uuid primary key default gen_random_uuid(), name text not null, description text, type text not null,
  icon_name text, features text[] default '{}', price_range text, booking_url text, contact_info text,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists publication_items (
  id uuid primary key default gen_random_uuid(), name text not null, publisher text not null, description text,
  logo_url text, website text, type text not null default 'journal', is_indicative boolean not null default true,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists awards (
  id uuid primary key default gen_random_uuid(), name text not null, description text not null, eligibility text,
  selection_process text, icon_name text, is_announced boolean not null default false, is_active boolean not null default true,
  sort_order integer not null default 0, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists sponsors (
  id uuid primary key default gen_random_uuid(), name text not null, tier text not null, logo_url text not null,
  website text, description text, is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists gallery_items (
  id uuid primary key default gen_random_uuid(), title text not null, caption text, image_url text not null, alt_text text not null,
  category text not null default 'general', edition text, is_featured boolean not null default false,
  is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists faqs (
  id uuid primary key default gen_random_uuid(), question text not null, answer text not null, category text not null default 'general',
  is_featured boolean not null default false, is_active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(), key text not null unique, value text, label text not null,
  description text, type text not null default 'text', created_at timestamptz not null default now(), updated_at timestamptz not null default now());

do $$ declare table_name text; begin
  foreach table_name in array array['announcements','important_dates','speakers','committee_members','registration_categories','programme_days','programme_items','documents','accommodation_options','publication_items','awards','sponsors','gallery_items','faqs','site_settings'] loop
    execute format('alter table public.%I enable row level security', table_name);
    if table_name = 'site_settings' then
      execute format('create policy "public reads %1$s" on public.%1$I for select using (true)', table_name);
    else
      execute format('create policy "public reads active %1$s" on public.%1$I for select using (is_active = true)', table_name);
    end if;
    execute format('create policy "admin manages %1$s" on public.%1$I for all using (public.is_admin()) with check (public.is_admin())', table_name);
    execute format('create trigger %1$I_updated_at before update on public.%1$I for each row execute function public.set_updated_at()', table_name);
  end loop;
end $$;

-- Storage is optional until files are uploaded. These private write policies keep uploads admin-only.
insert into storage.buckets (id, name, public) values ('speakers','speakers',true),('gallery','gallery',true),('sponsors','sponsors',true),('documents','documents',true),('publications','publications',true) on conflict (id) do nothing;
create policy "public reads site assets" on storage.objects for select using (bucket_id in ('speakers','gallery','sponsors','documents','publications'));
create policy "admins manage site assets" on storage.objects for all using (public.is_admin()) with check (public.is_admin());
