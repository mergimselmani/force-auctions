export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-granite-900">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include 6% seller commission.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-2 hover:border-accent-600 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">Consumer 10</CardTitle>
            <CardDescription>Perfect for occasional buyers</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">€4.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">10 auction lots per month</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to all live auctions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Transport quote requests</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Email support</span>
              </li>
            </ul>
            <Button className="w-full" variant="outline">Subscribe Now</Button>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-accent-600 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl">Consumer 20</CardTitle>
            <CardDescription>Best for regular buyers</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">€11.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">20 auction lots per month</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to all live auctions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Priority transport quotes</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Priority email support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Purchase history & analytics</span>
              </li>
            </ul>
            <Button className="w-full" variant="accent">Subscribe Now</Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent-600 hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="text-xs font-semibold text-accent-600 uppercase">Most Popular</div>
            <CardTitle className="text-2xl">Trader Unlimited</CardTitle>
            <CardDescription>For professional traders</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">€49.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Unlimited auction lots</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Early access to new auctions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Advanced analytics & reports</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">API access (coming soon)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">24/7 priority support</span>
              </li>
            </ul>
            <Button className="w-full" variant="accent">Subscribe Now</Button>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Pay-As-You-Go Credits</CardTitle>
            <CardDescription>
              Perfect for occasional business users who don't need a subscription
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:border-accent-600 transition-colors">
                <div className="text-2xl font-bold mb-2">5 Credits</div>
                <div className="text-lg text-accent-600 mb-4">€19.99</div>
                <Button variant="outline" className="w-full">Purchase</Button>
              </div>
              <div className="p-4 border rounded-lg hover:border-accent-600 transition-colors">
                <div className="text-2xl font-bold mb-2">10 Credits</div>
                <div className="text-lg text-accent-600 mb-4">€34.99</div>
                <Button variant="outline" className="w-full">Purchase</Button>
              </div>
              <div className="p-4 border rounded-lg hover:border-accent-600 transition-colors">
                <div className="text-2xl font-bold mb-2">25 Credits</div>
                <div className="text-lg text-accent-600 mb-4">€79.99</div>
                <Button variant="outline" className="w-full">Purchase</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
        <p>All sellers pay a 6% commission on successful sales. VAT (21%) is calculated and displayed in real-time during auctions.</p>
      </div>
    </div>
  );
}
