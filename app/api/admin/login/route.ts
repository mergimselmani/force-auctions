import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json().catch(()=>({}));
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return NextResponse.json({ error: 'ADMIN_SECRET not set' }, { status: 500 });
  if (!password || password !== secret) return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('fa_admin', secret, { httpOnly: true, sameSite: 'lax', secure: true, path: '/' });
  return res;
}
