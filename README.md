# Force Auctions (MVP)

Minimal Next.js (App Router) project wired for Supabase, Stripe, and Resend.

## Quick start (local)
1) Copy `.env.example` to `.env.local` and fill values
2) `npm install`
3) `npm run dev`
4) Visit http://localhost:3000

## Environment Variables
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- RESEND_API_KEY

## API routes
- `GET /api/health`
- `POST /api/stripe/webhook`
- `POST /api/transport/quote`
