import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { sold_price } = await req.json();
    const listingId = params.id;

    if (!sold_price || !listingId) {
      return NextResponse.json(
        { error: 'Missing required fields: sold_price and listing ID' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();

    // First, check if the listing exists and is still active
    const { data: listing, error: fetchError } = await supabase
      .from('listings')
      .select('id, status, min_price')
      .eq('id', listingId)
      .single();

    if (fetchError || !listing) {
      return NextResponse.json(
        { error: 'Listing not found' },
        { status: 404 }
      );
    }

    if (listing.status !== 'active') {
      return NextResponse.json(
        { error: 'Listing is no longer active' },
        { status: 400 }
      );
    }

    // Validate that the sold price is not below the minimum price
    if (sold_price < listing.min_price) {
      return NextResponse.json(
        { error: 'Price is below minimum price' },
        { status: 400 }
      );
    }

    // Update the listing to mark it as sold
    const { data, error } = await supabase
      .from('listings')
      .update({
        status: 'sold',
        sold_price: sold_price,
        sold_at: new Date().toISOString(),
      })
      .eq('id', listingId)
      .select()
      .single();

    if (error) {
      console.error('Error updating listing:', error);
      return NextResponse.json(
        { error: 'Failed to complete purchase' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      listing: data,
      message: 'Purchase completed successfully',
    });
  } catch (error) {
    console.error('Error in buy route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}