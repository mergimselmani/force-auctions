import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { getCurrentUserServer } from '@/lib/authServer';

export const dynamic = 'force-dynamic';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log('🔥 Buy API called for listing:', params.id);

    // Check authentication
    const user = await getCurrentUserServer();
    if (!user) {
      console.log('❌ User not authenticated');
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    console.log('✅ User authenticated:', user.email);

    const { price } = await request.json();
    
    if (!price || typeof price !== 'number') {
      console.log('❌ Invalid price:', price);
      return NextResponse.json(
        { error: 'Valid price is required' },
        { status: 400 }
      );
    }

    console.log('💰 Attempting to buy at price:', price);

    const supabase = getSupabaseAdmin();

    // First, get the current listing to check if it's still available
    const { data: listing, error: fetchError } = await supabase
      .from('listings')
      .select('*')
      .eq('id', params.id)
      .eq('status', 'active')
      .single();

    if (fetchError || !listing) {
      console.log('❌ Listing not found or not active:', fetchError);
      return NextResponse.json(
        { error: 'Listing not found or no longer available' },
        { status: 404 }
      );
    }

    console.log('📋 Found active listing:', listing.title);

    // Check if price is above minimum
    if (price < listing.min_price) {
      console.log('❌ Price below minimum:', price, 'vs', listing.min_price);
      return NextResponse.json(
        { error: 'Price is below minimum price' },
        { status: 400 }
      );
    }

    // Update the listing to sold status with race condition protection
    const { data: updatedListing, error: updateError } = await supabase
      .from('listings')
      .update({
        status: 'sold',
        sold_price: price,
        sold_at: new Date().toISOString(),
        buyer_id: user.id,
      })
      .eq('id', params.id)
      .eq('status', 'active') // This prevents race conditions
      .select()
      .single();

    if (updateError || !updatedListing) {
      console.log('❌ Failed to update listing (possibly already sold):', updateError);
      return NextResponse.json(
        { error: 'Item no longer available (possibly already sold)' },
        { status: 409 }
      );
    }

    console.log('🎉 Successfully sold listing to user:', user.email);

    return NextResponse.json({
      success: true,
      message: 'Purchase successful!',
      listing: updatedListing,
    });

  } catch (error: any) {
    console.error('💥 Buy API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}