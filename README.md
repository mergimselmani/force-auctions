# Force Auctions - Dutch Auction Marketplace

A modern, production-ready Dutch auction marketplace built with Next.js 14, Supabase, and Stripe. Features descending-price auctions, real-time bidding, multi-role authentication, and a comprehensive admin CMS.

## Features

- **Dutch Auction System**: Descending price auctions with configurable curves
- **Real-time Clock**: Circular gauge with VAT calculation and market value indicators
- **Multi-role Auth**: Supabase authentication with admin/trader/consumer roles
- **Admin CMS**: Complete content management for listings, auctions, pages, and menus
- **Transport Quotes**: Integrated quote request system with email notifications
- **Stripe Integration**: Subscriptions and pay-as-you-go credits
- **Modern UI**: Tailwind CSS with granite grey + red accent theme, shadcn/ui components
- **Mobile-first**: Responsive design for all devices

## Tech Stack

- Next.js 14 (App Router + TypeScript)
- Supabase (PostgreSQL + Auth + Storage)
- Stripe (Payments)
- Tailwind CSS + shadcn/ui
- Resend (Email)
- SWR, Zod, React Hook Form

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create a `.env` file with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
RESEND_API_KEY=re_your_resend_api_key
```

3. **Database is ready!** Migrations have been automatically applied via Supabase.

4. **Create Supabase Storage bucket:**
   - Go to Supabase Dashboard → Storage
   - Create bucket named `photos` (public)

5. **Start development:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Database Schema

Tables created automatically:
- **listings** - Auction listings (start_price, min_price, market_value, etc.)
- **photos** - Listing images
- **transport_quotes** - Transport requests
- **cms_pages** - Custom pages
- **cms_menus** - Navigation menus

All tables have RLS enabled with secure policies.

## Key Routes

- `/` - Home with hero, how-it-works, featured auctions
- `/auctions` - Browse all active auctions
- `/auction/[id]` - Live auction detail with clock
- `/pricing` - Subscription plans and credits
- `/transport` - Transport quote request form
- `/admin/dashboard` - Admin dashboard with KPIs
- `/admin/listings` - Create/manage listings
- `/admin/auctions` - Configure auction clocks
- `/admin/transport-quotes` - Review quote requests
- `/admin/cms` - Manage pages and menus

## Dutch Auction Clock

Configurable descending-price clock with:
- Circular visual gauge
- VAT calculation (21%)
- Market value indicator
- Auto-stop at minimum price
- Smooth animations

## Admin Access

Set admin emails in environment:
```env
NEXT_PUBLIC_ADMIN_EMAILS=admin@example.com,manager@example.com
```

## Pricing Plans

- Consumer 10: €4.99/month (10 lots)
- Consumer 20: €11.99/month (20 lots)
- Trader Unlimited: €49.99/month
- Credits: 5/10/25 packs available
- Seller commission: 6%

## Deployment (Vercel)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

## Build

```bash
npm run build
npm run start
```

## Support

For issues: Create GitHub issue or contact support@forceauctions.com

---

Built with Next.js 14, Supabase, Tailwind CSS, and shadcn/ui
