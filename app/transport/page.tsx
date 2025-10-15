'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function TransportPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      from_country: formData.get('from_country'),
      to_country: formData.get('to_country'),
      dims_l: Number(formData.get('dims_l')),
      dims_w: Number(formData.get('dims_w')),
      dims_h: Number(formData.get('dims_h')),
      weight: Number(formData.get('weight')),
      buyer_email: formData.get('buyer_email'),
      buyer_company: formData.get('buyer_company'),
      buyer_address: formData.get('buyer_address'),
    };

    try {
      const res = await fetch('/api/transport-quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to submit');

      toast({
        title: 'Quote Requested',
        description: 'We will contact you shortly with a transport quote.',
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit quote request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-granite-900">Request Transport Quote</h1>
        <p className="text-muted-foreground mt-2">
          Get competitive shipping rates for your auction purchases
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quote Request Form</CardTitle>
          <CardDescription>
            Fill in the details below and we'll get back to you with a quote within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from_country">From Country</Label>
                <Input id="from_country" name="from_country" placeholder="Netherlands" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to_country">To Country</Label>
                <Input id="to_country" name="to_country" placeholder="Germany" required />
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Dimensions (cm)</Label>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dims_l" className="text-xs">Length</Label>
                  <Input
                    id="dims_l"
                    name="dims_l"
                    type="number"
                    step="0.01"
                    placeholder="200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dims_w" className="text-xs">Width</Label>
                  <Input
                    id="dims_w"
                    name="dims_w"
                    type="number"
                    step="0.01"
                    placeholder="100"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dims_h" className="text-xs">Height</Label>
                  <Input
                    id="dims_h"
                    name="dims_h"
                    type="number"
                    step="0.01"
                    placeholder="150"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                step="0.01"
                placeholder="1500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="buyer_email">Email</Label>
              <Input
                id="buyer_email"
                name="buyer_email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="buyer_company">Company Name (Optional)</Label>
              <Input id="buyer_company" name="buyer_company" placeholder="Your Company Ltd" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="buyer_address">Delivery Address</Label>
              <Textarea
                id="buyer_address"
                name="buyer_address"
                placeholder="Street, City, Postal Code"
                rows={3}
                required
              />
            </div>

            <Button type="submit" className="w-full" variant="accent" disabled={loading}>
              {loading ? 'Submitting...' : 'Request Quote'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
