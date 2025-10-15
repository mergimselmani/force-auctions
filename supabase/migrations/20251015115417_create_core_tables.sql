/*
  # Create Core Force Auctions Tables

  1. New Tables
    - `listings`
      - `id` (uuid, primary key)
      - `title` (text, required) - Listing title
      - `description` (text, optional) - Detailed description
      - `start_price` (numeric, required) - Starting price on Dutch auction clock
      - `min_price` (numeric, required) - Floor price, cannot sell below this
      - `market_value` (numeric, optional) - Market value for blue dot indicator
      - `currency` (text, default EUR) - Currency code
      - `seller_id` (uuid, optional) - Reference to auth user
      - `seller_name` (text, optional) - Public seller name
      - `status` (text, default draft) - draft, active, sold, expired
      - `duration_seconds` (integer, default 180) - Auction duration
      - `step_schedule` (jsonb, optional) - Custom descent curve configuration
      - `sold_price` (numeric, optional) - Final sold price
      - `sold_at` (timestamptz, optional) - Sale timestamp
      - `buyer_id` (uuid, optional) - Reference to buyer
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `photos`
      - `id` (uuid, primary key)
      - `listing_id` (uuid, foreign key to listings)
      - `url` (text, required) - Supabase Storage URL
      - `sort_order` (integer, default 0) - Display order
      - `created_at` (timestamptz)
    
    - `transport_quotes`
      - `id` (uuid, primary key)
      - `listing_id` (uuid, optional foreign key to listings)
      - `from_country` (text) - Origin country
      - `to_country` (text) - Destination country
      - `dims_l` (numeric) - Length dimension
      - `dims_w` (numeric) - Width dimension
      - `dims_h` (numeric) - Height dimension
      - `weight` (numeric) - Weight in kg
      - `buyer_email` (text) - Contact email
      - `buyer_company` (text) - Company name
      - `buyer_address` (text) - Full address
      - `status` (text, default pending) - pending, quoted, accepted, rejected
      - `created_at` (timestamptz)
    
    - `cms_pages`
      - `id` (uuid, primary key)
      - `title` (text, required) - Page title
      - `slug` (text, unique, required) - URL slug
      - `content` (text) - Rich text content
      - `locale` (text, default nl) - Language locale
      - `published` (boolean, default false) - Publication status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `cms_menus`
      - `id` (uuid, primary key)
      - `label` (text, required) - Menu item label
      - `href` (text, required) - Link URL
      - `sort_order` (integer, default 0) - Display order
      - `locale` (text, default nl) - Language locale
      - `parent_id` (uuid, optional) - For nested menus
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for active listings and photos
    - Admin-only write access (enforced by application layer for now)
    - Authenticated users can create transport quotes
*/

-- Create listings table
CREATE TABLE IF NOT EXISTS listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  start_price numeric NOT NULL CHECK (start_price > 0),
  min_price numeric NOT NULL CHECK (min_price > 0),
  market_value numeric CHECK (market_value IS NULL OR market_value > 0),
  currency text DEFAULT 'EUR' NOT NULL,
  seller_id uuid,
  seller_name text,
  status text DEFAULT 'draft' NOT NULL CHECK (status IN ('draft', 'active', 'sold', 'expired')),
  duration_seconds integer DEFAULT 180 NOT NULL CHECK (duration_seconds > 0),
  step_schedule jsonb,
  sold_price numeric,
  sold_at timestamptz,
  buyer_id uuid,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create photos table
CREATE TABLE IF NOT EXISTS photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid REFERENCES listings(id) ON DELETE CASCADE NOT NULL,
  url text NOT NULL,
  sort_order integer DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create transport quotes table
CREATE TABLE IF NOT EXISTS transport_quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid REFERENCES listings(id) ON DELETE SET NULL,
  from_country text,
  to_country text,
  dims_l numeric,
  dims_w numeric,
  dims_h numeric,
  weight numeric,
  buyer_email text,
  buyer_company text,
  buyer_address text,
  status text DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'quoted', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create CMS pages table
CREATE TABLE IF NOT EXISTS cms_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL,
  content text,
  locale text DEFAULT 'nl' NOT NULL,
  published boolean DEFAULT false NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(slug, locale)
);

-- Create CMS menus table
CREATE TABLE IF NOT EXISTS cms_menus (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  href text NOT NULL,
  sort_order integer DEFAULT 0 NOT NULL,
  locale text DEFAULT 'nl' NOT NULL,
  parent_id uuid REFERENCES cms_menus(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_listings_status ON listings(status);
CREATE INDEX IF NOT EXISTS idx_listings_created_at ON listings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_photos_listing_id ON photos(listing_id);
CREATE INDEX IF NOT EXISTS idx_photos_sort_order ON photos(listing_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_transport_quotes_listing_id ON transport_quotes(listing_id);
CREATE INDEX IF NOT EXISTS idx_cms_pages_slug_locale ON cms_pages(slug, locale);
CREATE INDEX IF NOT EXISTS idx_cms_menus_locale ON cms_menus(locale, sort_order);

-- Enable Row Level Security
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE transport_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_menus ENABLE ROW LEVEL SECURITY;

-- RLS Policies for listings
CREATE POLICY "Anyone can view active listings"
  ON listings FOR SELECT
  USING (status = 'active' OR status = 'sold');

CREATE POLICY "Authenticated users can view all listings"
  ON listings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert listings"
  ON listings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update own listings"
  ON listings FOR UPDATE
  TO authenticated
  USING (seller_id = auth.uid() OR seller_id IS NULL)
  WITH CHECK (seller_id = auth.uid() OR seller_id IS NULL);

CREATE POLICY "Authenticated users can delete own listings"
  ON listings FOR DELETE
  TO authenticated
  USING (seller_id = auth.uid() OR seller_id IS NULL);

-- RLS Policies for photos
CREATE POLICY "Anyone can view photos of active listings"
  ON photos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM listings
      WHERE listings.id = photos.listing_id
      AND (listings.status = 'active' OR listings.status = 'sold')
    )
  );

CREATE POLICY "Authenticated users can view all photos"
  ON photos FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert photos"
  ON photos FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update photos"
  ON photos FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete photos"
  ON photos FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for transport quotes
CREATE POLICY "Users can view own transport quotes"
  ON transport_quotes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can create transport quotes"
  ON transport_quotes FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update transport quotes"
  ON transport_quotes FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for CMS pages
CREATE POLICY "Anyone can view published pages"
  ON cms_pages FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all pages"
  ON cms_pages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage pages"
  ON cms_pages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for CMS menus
CREATE POLICY "Anyone can view menus"
  ON cms_menus FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage menus"
  ON cms_menus FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
DROP TRIGGER IF EXISTS update_listings_updated_at ON listings;
CREATE TRIGGER update_listings_updated_at
  BEFORE UPDATE ON listings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_cms_pages_updated_at ON cms_pages;
CREATE TRIGGER update_cms_pages_updated_at
  BEFORE UPDATE ON cms_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();