# Force Auctions – Starter (Vercel-ready)

Next.js 14 (App Router) + Supabase v2. No SSG crashes, safe API fallbacks, working aliases.

## Deploy
1) Create a repo and upload the *contents* of this zip to the root (not nested).
2) In Vercel → Settings → Environment Variables add (Production + Preview):
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
3) Redeploy with **Clear build cache** checked.

## Supabase
Create table `listings`:
```sql
create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_price numeric not null,
  currency text default 'EUR',
  seller_id uuid,
  seller_name text,
  created_at timestamptz default now()
);
```

## Pages
- `/` homepage + demo clock
- `/admin/listings` create & list listings (talks to /api/admin/listings)
- `/api/health` basic health JSON

## Notes
- Pages exporting `dynamic = 'force-dynamic'` and `revalidate = 0` avoid build-time data calls.
- `lib/supabaseAdmin` creates the client only at runtime (inside API handlers).
- API handlers wrap Supabase in try/catch and return safe JSON if env is missing.
