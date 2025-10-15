import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply middleware to admin routes
  if (pathname.startsWith('/admin')) {
    return checkAdminAuth(request);
  }

  return NextResponse.next();
}

async function checkAdminAuth(request: NextRequest) {
  try {
    // Get auth token from cookies
    const token = request.cookies.get('sb-access-token')?.value || 
                  request.cookies.get('sb-' + process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1]?.split('.')[0] + '-auth-token')?.value;
    
    if (!token) {
      // No token found, redirect to sign-in
      const signInUrl = new URL('/auth/signin', request.url);
      signInUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }

    // Create Supabase client for server-side auth check
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Get user from token
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      // Invalid token, redirect to sign-in
      const signInUrl = new URL('/auth/signin', request.url);
      signInUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }

    // Check if user is admin
    const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',').map(email => email.trim().toLowerCase()) || [];
    const userEmail = user.email?.toLowerCase();
    
    if (!userEmail || !adminEmails.includes(userEmail)) {
      // User is not admin, redirect to home with error
      const homeUrl = new URL('/', request.url);
      homeUrl.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(homeUrl);
    }

    // User is authenticated and is admin, allow access
    return NextResponse.next();
    
  } catch (error) {
    console.error('Middleware auth error:', error);
    // On error, redirect to sign-in
    const signInUrl = new URL('/auth/signin', request.url);
    signInUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};