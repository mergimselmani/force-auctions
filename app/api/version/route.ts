import { NextResponse } from 'next/server'; export async function GET(){return NextResponse.json({version:'0.4.0', ts:new Date().toISOString()});}
