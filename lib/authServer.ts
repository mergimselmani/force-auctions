import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export function getServerAuthClient() {
  const cookieStore = cookies();
  
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        getSession: async () => {
          const authToken = cookieStore.get('sb-access-token')?.value;
          const refreshToken = cookieStore.get('sb-refresh-token')?.value;
          
          if (!authToken) {
            return { data: { session: null }, error: null };
          }

          return {
            data: {
              session: {
                access_token: authToken,
                refresh_token: refreshToken,
                user: null // Will be populated by Supabase
              }
            },
            error: null
          };
        }
      }
    }
  );
}

export async function getCurrentUserServer() {
  try {
    const supabase = getServerAuthClient();
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user || null;
  } catch (error) {
    console.error('Server auth error:', error);
    return null;
  }
}

const ADMIN_EMAILS = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];

export function isAdminServer(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}