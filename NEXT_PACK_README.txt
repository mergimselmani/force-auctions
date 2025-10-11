Force Auctions — Next Pack

ENV (Vercel):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_SECRET

Supabase SQL (run in SQL editor):
-- Pages CMS
create table if not exists pages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content_html text,
  meta_title text,
  meta_description text,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
-- If not available in your DB, create helper function or remove trigger line below.
-- create trigger pages_updated_at before update on pages
-- for each row execute procedure moddatetime (updated_at);

-- Menus
create table if not exists menus (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  href text not null,
  position int default 0
);

-- Photos bucket: create bucket 'photos' in Storage

-- Photos table
create table if not exists photos (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references listings(id) on delete cascade,
  path text not null,
  created_at timestamptz default now()
);

-- Auctions additional fields
alter table auctions
  add column if not exists market_value numeric,
  add column if not exists duration_sec integer default 600,
  add column if not exists started_at timestamptz,
  add column if not exists stop_at_market boolean default true,
  add column if not exists market_stop_threshold numeric default 200;

-- Profiles (if not present)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text, role text check (role in ('buyer','seller','company','admin')) default 'buyer',
  created_at timestamptz default now()
);
