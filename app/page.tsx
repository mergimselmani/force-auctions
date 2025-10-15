export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingDown, Shield, Truck } from 'lucide-react';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import DutchAuctionClock from '@/components/DutchAuctionClock';
import UnauthorizedAlert from '@/components/UnauthorizedAlert';

async function getFeaturedListings() {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from('listings')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(3);

    return data || [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const featured = await getFeaturedListings();

  return (
    <div className="space-y-16">
      <Suspense fallback={null}>
        <UnauthorizedAlert />
      </Suspense>
      
      <section className="py-20 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-granite-900 tracking-tight">
          Dutch Auction Marketplace
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience the thrill of descending price auctions. Watch prices drop in real-time and
          strike when the moment is right.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild size="lg" variant="accent">
            <Link href="/auctions">Browse Auctions</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-granite-900 mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our Dutch auction system brings transparency and excitement to every sale
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Clock className="w-10 h-10 text-accent-600 mb-2" />
              <CardTitle>Price Descends</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Auctions start at a premium price and descend over time using a dynamic curve
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingDown className="w-10 h-10 text-accent-600 mb-2" />
              <CardTitle>You Decide</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Watch the price drop and make your move when the value matches your target
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 text-accent-600 mb-2" />
              <CardTitle>Instant Win</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                First buyer to accept the price wins immediately. No bidding wars or waiting
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Truck className="w-10 h-10 text-accent-600 mb-2" />
              <CardTitle>Transport Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Request instant transport quotes for your purchase with competitive rates
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-granite-900 mb-4">Featured Auctions</h2>
            <p className="text-muted-foreground">Live auctions happening now</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((listing) => (
              <Card key={listing.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{listing.title}</CardTitle>
                  {listing.description && (
                    <CardDescription className="line-clamp-2">{listing.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Starting:</span>
                      <span className="font-medium text-foreground">
                        € {listing.start_price.toLocaleString('nl-NL')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Min Price:</span>
                      <span className="font-medium text-foreground">
                        € {listing.min_price.toLocaleString('nl-NL')}
                      </span>
                    </div>
                    {listing.market_value && (
                      <div className="flex justify-between">
                        <span>Market Value:</span>
                        <span className="font-medium text-foreground">
                          € {listing.market_value.toLocaleString('nl-NL')}
                        </span>
                      </div>
                    )}
                  </div>
                  <Button asChild className="w-full mt-4" variant="outline">
                    <Link href={`/auction/${listing.id}`}>View Auction</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="py-12 bg-gradient-to-br from-granite-50 to-granite-100 -mx-4 px-4 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-granite-900 mb-4">See It In Action</h2>
          <p className="text-muted-foreground">Live demo of our Dutch auction clock</p>
        </div>

        <div className="flex justify-center">
          <DutchAuctionClock
            startPrice={26000}
            minPrice={16000}
            marketValue={20000}
            durationSeconds={180}
            autoStart={false}
          />
        </div>
      </section>
    </div>
  );
}
