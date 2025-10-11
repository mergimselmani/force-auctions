import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client (service role). GEEN persistSession in server context.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);
