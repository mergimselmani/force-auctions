@@ .. @@
 import { NextResponse } from 'next/server';
 import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
-import { getCurrentUser } from '@/lib/auth';
+import { getCurrentUserServer } from '@/lib/authServer';

 export const dynamic = 'force-dynamic';

@@ .. @@
   try {
     console.log('Buy request for listing:', id);
     
     // Check if user is authenticated
-    const user = await getCurrentUser();
+    const user = await getCurrentUserServer();
     if (!user) {
       console.log('User not authenticated');
       return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
     }