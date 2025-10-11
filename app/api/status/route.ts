import { NextResponse } from 'next/server';
const has = (k:string)=>Boolean(process.env[k] && process.env[k]!.length>0);
export async function GET(){return NextResponse.json({ok:true, envReady:['NEXT_PUBLIC_SUPABASE_URL','NEXT_PUBLIC_SUPABASE_ANON_KEY','SUPABASE_SERVICE_ROLE_KEY','ADMIN_SECRET'].every(has), ts:new Date().toISOString()});}
