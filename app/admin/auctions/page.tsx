export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

async function getListings() {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from('listings')
      .select('*')
      .order('created_at', { ascending: false });
    return data || [];
  } catch {
    return [];
  }
}

export default async function AdminAuctionsPage() {
  const listings = await getListings();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/dashboard">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-granite-900">Auction Configuration</h1>
        <p className="text-muted-foreground mt-2">
          Configure auction clock settings, pricing, and durations
        </p>
      </div>

      <div className="grid gap-6">
        {listings.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No listings yet</p>
              <Button asChild className="mt-4" variant="accent">
                <Link href="/admin/listings">Create First Listing</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          listings.map((listing) => (
            <Card key={listing.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{listing.title}</CardTitle>
                    <CardDescription className="mt-2">
                      Auction ID: {listing.id}
                    </CardDescription>
                  </div>
                  <div className="text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded">
                    {listing.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Clock Settings
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Start Price:</span>
                          <span className="font-semibold">
                            € {listing.start_price.toLocaleString('nl-NL')}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Min Price:</span>
                          <span className="font-semibold">
                            € {listing.min_price.toLocaleString('nl-NL')}
                          </span>
                        </div>
                        {listing.market_value && (
                          <div className="flex justify-between text-sm">
                            <span>Market Value:</span>
                            <span className="font-semibold text-blue-600">
                              € {listing.market_value.toLocaleString('nl-NL')}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span>Duration:</span>
                          <span className="font-semibold">
                            {listing.duration_seconds || 180} seconds
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Descent Curve
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {listing.step_schedule ? (
                          <div className="space-y-1">
                            {JSON.parse(JSON.stringify(listing.step_schedule)).map(
                              (step: any, idx: number) => (
                                <div key={idx}>
                                  Until {(step.until * 100).toFixed(0)}%: €{step.step}/sec
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <div>Using default curve (slow → medium → fast)</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Auction Details
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Currency:</span>
                          <span className="font-semibold">{listing.currency || 'EUR'}</span>
                        </div>
                        {listing.seller_name && (
                          <div className="flex justify-between text-sm">
                            <span>Seller:</span>
                            <span className="font-semibold">{listing.seller_name}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span>Created:</span>
                          <span className="font-semibold">
                            {new Date(listing.created_at).toLocaleDateString('nl-NL')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {listing.sold_at && (
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Sale Information
                        </div>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Sold Price:</span>
                            <span className="font-semibold text-green-600">
                              € {listing.sold_price?.toLocaleString('nl-NL')}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Sold At:</span>
                            <span className="font-semibold">
                              {new Date(listing.sold_at).toLocaleString('nl-NL')}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/auction/${listing.id}`}>View Live Auction</Link>
                  </Button>
                  <Button variant="ghost" size="sm" disabled>
                    Edit Configuration
                  </Button>
                  <Button variant="ghost" size="sm" disabled>
                    Clone Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
