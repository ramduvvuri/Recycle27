# Supabase setup

RECYCLE27 uses Supabase as its managed, serverless backend. No separate API/server is required.

1. Create a Supabase project.
2. Run `migrations/202609230001_recycle27.sql` in the SQL Editor (or use `supabase db push`).
3. Create an administrator in **Authentication → Users**, then set `app_metadata.role` to `admin` or add their email to `ADMIN_EMAILS` in Vercel.
4. Copy the project URL and anon key into Vercel environment variables. Keep the service-role key server-only.

Deploy the Next.js project to Vercel. Vercel serves the site and server actions; Supabase hosts Auth, Postgres and Storage.
