export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import Link from 'next/link';
import { ArrowLeft, Mail, Package } from 'lucide-react';

async function getTransportQuotes() {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from('transport_quotes')
      .select('*')
      .order('created_at', { ascending: false });
    return data || [];
  } catch {
    return [];
  }
}

export default async function AdminTransportQuotesPage() {
  const quotes = await getTransportQuotes();

  const pendingQuotes = quotes.filter((q) => q.status === 'pending');
  const otherQuotes = quotes.filter((q) => q.status !== 'pending');

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
        <h1 className="text-4xl font-bold text-granite-900">Transport Quotes</h1>
        <p className="text-muted-foreground mt-2">
          Review and manage transport quote requests from buyers
        </p>
      </div>

      {quotes.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No transport quote requests yet</p>
          </CardContent>
        </Card>
      ) : (
        <>
          {pendingQuotes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Pending Requests ({pendingQuotes.length})
              </h2>
              <div className="grid gap-4">
                {pendingQuotes.map((quote) => (
                  <Card key={quote.id} className="border-accent-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {quote.from_country} → {quote.to_country}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            Requested {new Date(quote.created_at).toLocaleDateString('nl-NL')}
                          </CardDescription>
                        </div>
                        <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                          {quote.status}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Contact Information</div>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a
                                href={`mailto:${quote.buyer_email}`}
                                className="text-blue-600 hover:underline"
                              >
                                {quote.buyer_email}
                              </a>
                            </div>
                            {quote.buyer_company && (
                              <div className="text-muted-foreground">
                                Company: {quote.buyer_company}
                              </div>
                            )}
                            {quote.buyer_address && (
                              <div className="text-muted-foreground">
                                Address: {quote.buyer_address}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-medium">Shipment Details</div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            {quote.dims_l && quote.dims_w && quote.dims_h && (
                              <div>
                                Dimensions: {quote.dims_l} × {quote.dims_w} × {quote.dims_h} cm
                              </div>
                            )}
                            {quote.weight && <div>Weight: {quote.weight} kg</div>}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t">
                        <Button size="sm" variant="accent" disabled>
                          Send Quote
                        </Button>
                        <Button size="sm" variant="outline" disabled>
                          Mark as Quoted
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          Reject
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {otherQuotes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">All Requests ({otherQuotes.length})</h2>
              <div className="grid gap-4">
                {otherQuotes.map((quote) => (
                  <Card key={quote.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {quote.from_country} → {quote.to_country}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {new Date(quote.created_at).toLocaleDateString('nl-NL')}
                          </CardDescription>
                        </div>
                        <div
                          className={`text-xs px-2 py-1 rounded ${
                            quote.status === 'quoted'
                              ? 'bg-blue-100 text-blue-700'
                              : quote.status === 'accepted'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {quote.status}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-1">
                        <div className="text-muted-foreground">
                          Contact: {quote.buyer_email}
                        </div>
                        {quote.dims_l && quote.dims_w && quote.dims_h && (
                          <div className="text-muted-foreground">
                            Dimensions: {quote.dims_l} × {quote.dims_w} × {quote.dims_h} cm
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
