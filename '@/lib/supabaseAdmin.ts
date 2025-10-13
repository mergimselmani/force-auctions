// lib/supabaseAdmin.ts
import { createClient } from '@supabase/supabase-js';

/** Alleen aanmaken op runtime, niet bij import. */
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    // Laat de API handler dit afvangen zodat build niet crasht
    throw new Error('Supabase env vars missing.');
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
