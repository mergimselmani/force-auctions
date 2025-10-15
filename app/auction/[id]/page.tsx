export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import DutchAuctionClock from '@/components/DutchAuctionClock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

async function getListing(id: string) {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase.from('listings').select('*').eq('id', id).maybeSingle();
    return data;
  } catch {
    return null;
  }
}

export default async function AuctionPage({ params }: { params: { id: string } }) {
  const listing = await getListing(params.id);

  if (!listing || listing.status !== 'active') {
    notFound();
  }

  const stepSchedule = listing.step_schedule || [
    { until: 0.25, step: 0.05 },
    { until: 0.75, step: 0.2 },
    { until: 1.0, step: 0.5 },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Button asChild variant="ghost" size="sm">
        <Link href="/auctions">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Auctions
        </Link>
      </Button>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-granite-900">{listing.title}</h1>
        {listing.seller_name && (
          <p className="text-muted-foreground">Seller: {listing.seller_name}</p>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-start">
          <DutchAuctionClock
            startPrice={listing.start_price}
            minPrice={listing.min_price}
            marketValue={listing.market_value}
            durationSeconds={listing.duration_seconds || 180}
            currency={listing.currency || 'EUR'}
            stepSchedule={stepSchedule}
            autoStart={true}
            listingId={listing.id}
            onBuy={(price) => {
              // Optional: Add any additional client-side logic after purchase
              console.log(`Item purchased for €${price}`);
            }}
          />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Listing Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {listing.description && (
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {listing.description}
                  </p>
                </div>
              )}

              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Starting Price:</span>
                  <span className="font-semibold">
                    € {listing.start_price.toLocaleString('nl-NL')}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Reserve Price:</span>
                  <span className="font-semibold">
                    € {listing.min_price.toLocaleString('nl-NL')}
                  </span>
                </div>
                {listing.market_value && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Est. Market Value:</span>
                    <span className="font-semibold text-blue-600">
                      € {listing.market_value.toLocaleString('nl-NL')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Currency:</span>
                  <span className="font-medium">{listing.currency || 'EUR'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Transport?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Request a transport quote for this item after purchase
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/transport">Request Transport Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
