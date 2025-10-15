import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export function getAuthClient() {
  if (typeof window === 'undefined') {
    throw new Error('Auth client can only be used in the browser');
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

const ADMIN_EMAILS = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];

export function isAdmin(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

export async function getCurrentUser() {
  if (typeof window !== 'undefined') {
    // Client-side
    const supabase = getAuthClient();
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user || null;
  } else {
    // Server-side
    const cookieStore = cookies();
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );
    
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user || null;
  }
}

export async function checkUserRole(email?: string | null) {
  if (!email) return 'consumer';
  if (isAdmin(email)) return 'admin';
  return 'consumer';
}