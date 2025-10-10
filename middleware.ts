import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    const cookie = req.cookies.get('fa_admin')?.value;
    const secret = process.env.ADMIN_SECRET;
    if (!secret) {
      return NextResponse.json({ error: 'ADMIN_SECRET not set in environment' }, { status: 500 });
    }
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }
    if (cookie !== secret) {
      const url = req.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
