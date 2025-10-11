import { NextResponse } from 'next/server'; export async function GET(){return NextResponse.json({ok:true, service:'force-auctions', ts:new Date().toISOString()});}
