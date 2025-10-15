'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type Listing = {
  id: string;
  title: string;
  description?: string | null;
  start_price: number;
  min_price: number;
  market_value?: number | null;
  currency?: string;
  seller_name?: string;
  status?: string;
};

export default function ListingsAdmin() {
  const [rows, setRows] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const load = async () => {
    const r = await fetch('/api/admin/listings', { cache: 'no-store' });
    const j = await r.json();
    setRows(j.rows ?? []);
  };

  useEffect(() => {
    load();
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const body = {
      title: fd.get('title'),
      description: fd.get('description'),
      start_price: Number(fd.get('start_price')),
      min_price: Number(fd.get('min_price')),
      market_value: fd.get('market_value') ? Number(fd.get('market_value')) : null,
      currency: (fd.get('currency') as string) || 'EUR',
      seller_name: (fd.get('seller_name') as string) || null,
      status: 'active',
    };

    const r = await fetch('/api/admin/listings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });

    const j = await r.json();
    setLoading(false);

    if (!r.ok) {
      toast({ title: 'Error', description: j.error || 'Failed to save', variant: 'destructive' });
      return;
    }

    toast({ title: 'Success', description: 'Listing created successfully' });
    (e.target as HTMLFormElement).reset();
    load();
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-granite-900">Manage Listings</h1>
        <p className="text-muted-foreground mt-2">Create and manage auction listings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New Listing</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" name="title" placeholder="Auction title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Detailed description"
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start_price">Start Price * (€)</Label>
                <Input
                  id="start_price"
                  name="start_price"
                  type="number"
                  step="0.01"
                  placeholder="26000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="min_price">Min Price * (€)</Label>
                <Input
                  id="min_price"
                  name="min_price"
                  type="number"
                  step="0.01"
                  placeholder="16000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="market_value">Market Value (€)</Label>
                <Input
                  id="market_value"
                  name="market_value"
                  type="number"
                  step="0.01"
                  placeholder="20000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Input id="currency" name="currency" placeholder="EUR" defaultValue="EUR" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seller_name">Seller Name</Label>
                <Input id="seller_name" name="seller_name" placeholder="Company or person name" />
              </div>
            </div>

            <Button type="submit" variant="accent" disabled={loading}>
              {loading ? 'Creating...' : 'Create Listing'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Listings ({rows.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {rows.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No listings yet</p>
          ) : (
            <div className="space-y-3">
              {rows.map((r) => (
                <Card key={r.id}>
                  <CardContent className="py-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="font-semibold text-lg">{r.title}</div>
                        {r.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {r.description}
                          </p>
                        )}
                        <div className="flex gap-4 text-sm">
                          <span>
                            Start: €{r.start_price.toLocaleString('nl-NL')}
                          </span>
                          <span>
                            Min: €{r.min_price.toLocaleString('nl-NL')}
                          </span>
                          {r.market_value && (
                            <span>
                              Market: €{r.market_value.toLocaleString('nl-NL')}
                            </span>
                          )}
                        </div>
                        {r.seller_name && (
                          <div className="text-sm text-muted-foreground">
                            Seller: {r.seller_name}
                          </div>
                        )}
                      </div>
                      <div className="text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded">
                        {r.status || 'draft'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
