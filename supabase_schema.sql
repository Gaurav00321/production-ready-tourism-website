-- Reset Schema (Caution: Deletes all data)
drop table if exists public.destination_tags cascade;
drop table if exists public.destinations cascade;
drop table if exists public.categories cascade;
-- We are keeping the 'tours' table from the previous setup if you want, 
-- or we can drop it too if you want strictly fresh. 
-- For now, let's leave 'tours' as it might be useful, but ideally, we'd normalize it too later.

-- 1. Create Categories Table
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null unique,
  description text,
  slug text not null unique,
  sort_order int default 0
);

-- 2. Create Destinations Table
create table public.destinations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  state text not null,
  city text,
  category_id uuid references public.categories(id) on delete set null,
  description text,
  is_foreign_friendly boolean default true,
  popularity_rank int default 999,
  region text check (region in ('North India', 'South India', 'West India', 'East India', 'Central India', 'North East India', 'Islands')),
  slug text not null unique,
  image_url text -- Placeholder for image
);

-- 3. Create Tags Table (Optional but good for scalability)
create table public.destination_tags (
  id uuid primary key default gen_random_uuid(),
  destination_id uuid references public.destinations(id) on delete cascade,
  tag text not null
);

-- 4. Enable RLS
alter table public.categories enable row level security;
alter table public.destinations enable row level security;
alter table public.destination_tags enable row level security;

-- 5. Policies
-- Categories: Open read, Admin write
create policy "Allow public read access on categories"
  on public.categories for select using (true);

create policy "Allow admin insert/update/delete on categories"
  on public.categories for all
  using (auth.uid() in (select id from public.profiles where username = 'admin')) -- simplistic admin check, or just restrictive
  with check (auth.uid() in (select id from public.profiles where username = 'admin'));

-- Destinations: Open read, Admin write
create policy "Allow public read access on destinations"
  on public.destinations for select using (true);

create policy "Allow admin insert/update/delete on destinations"
  on public.destinations for all
  using (auth.role() = 'service_role'); -- Using service role for seeding scripts usually

-- Tags: Open read
create policy "Allow public read access on tags"
  on public.destination_tags for select using (true);
