import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ app: 'force-auctions', version: '0.2.0-admin', ts: new Date().toISOString() });
}
