export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

async function getActiveListings() {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from('listings')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    return data || [];
  } catch {
    return [];
  }
}

export default async function AuctionsPage() {
  const listings = await getActiveListings();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-granite-900">Live Auctions</h1>
        <p className="text-muted-foreground mt-2">
          Browse all active Dutch auctions and find your next great deal
        </p>
      </div>

      {listings.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No active auctions at the moment</p>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for new listings</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">{listing.title}</CardTitle>
                {listing.description && (
                  <CardDescription className="line-clamp-3">{listing.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Starting Price:</span>
                    <span className="font-semibold">
                      € {listing.start_price.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Price:</span>
                    <span className="font-semibold">
                      € {listing.min_price.toLocaleString('nl-NL')}
                    </span>
                  </div>
                  {listing.market_value && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Market Value:</span>
                      <span className="font-semibold text-blue-600">
                        € {listing.market_value.toLocaleString('nl-NL')}
                      </span>
                    </div>
                  )}
                  {listing.seller_name && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seller:</span>
                      <span className="font-medium">{listing.seller_name}</span>
                    </div>
                  )}
                </div>

                <Button asChild className="w-full" variant="accent">
                  <Link href={`/auction/${listing.id}`}>View Live Auction</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
