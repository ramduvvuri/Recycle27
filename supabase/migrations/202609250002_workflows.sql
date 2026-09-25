-- RECYCLE27 workflow tables: abstracts, registrations, contact inquiries
-- Apply with `supabase db push` or the Supabase SQL editor.

-- Abstract submissions (authors submit via public form)
create table if not exists abstract_submissions (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_email text not null,
  affiliation text not null,
  co_authors text,
  abstract_title text not null,
  theme text not null,
  abstract_text text,
  pdf_url text,
  status text not null default 'submitted',  -- submitted|under_review|accepted|rejected
  review_notes text,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Attendee registrations
create table if not exists event_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  institution text not null,
  phone text,
  category text not null,          -- student|academic|industry|others
  payment_reference text,
  payment_status text not null default 'pending',  -- pending|verified|rejected
  amount_paid numeric(10,2),
  notes text,
  registered_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Contact form inquiries
create table if not exists contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  status text not null default 'unread',  -- unread|read|replied
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable updated_at triggers
create trigger abstract_submissions_updated_at before update on public.abstract_submissions for each row execute function public.set_updated_at();
create trigger event_registrations_updated_at before update on public.event_registrations for each row execute function public.set_updated_at();
create trigger contact_inquiries_updated_at before update on public.contact_inquiries for each row execute function public.set_updated_at();

-- RLS
alter table public.abstract_submissions enable row level security;
alter table public.event_registrations enable row level security;
alter table public.contact_inquiries enable row level security;

-- Public can insert (submit) abstracts and contact inquiries; only admins can read/manage all
create policy "public submits abstracts" on public.abstract_submissions for insert with check (true);
create policy "admin manages abstracts" on public.abstract_submissions for all using (public.is_admin()) with check (public.is_admin());

create policy "public registers" on public.event_registrations for insert with check (true);
create policy "admin manages registrations" on public.event_registrations for all using (public.is_admin()) with check (public.is_admin());

create policy "public submits inquiries" on public.contact_inquiries for insert with check (true);
create policy "admin manages inquiries" on public.contact_inquiries for all using (public.is_admin()) with check (public.is_admin());

-- Storage bucket for abstract PDFs
insert into storage.buckets (id, name, public) values ('abstracts', 'abstracts', false) on conflict (id) do nothing;
create policy "public uploads abstract pdfs" on storage.objects for insert with check (bucket_id = 'abstracts');
create policy "admin reads abstracts bucket" on storage.objects for select using (bucket_id = 'abstracts' and public.is_admin());
create policy "admin manages abstracts bucket" on storage.objects for all using (bucket_id = 'abstracts' and public.is_admin()) with check (bucket_id = 'abstracts' and public.is_admin());
