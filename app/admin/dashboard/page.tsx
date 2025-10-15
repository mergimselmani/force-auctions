export const dynamic = 'force-dynamic';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PackagePlus, Gavel, FileText, Truck } from 'lucide-react';

async function getDashboardStats() {
  try {
    const supabase = getSupabaseAdmin();

    const [listings, quotes] = await Promise.all([
      supabase.from('listings').select('id, status'),
      supabase.from('transport_quotes').select('id, status'),
    ]);

    const activeListings = listings.data?.filter((l) => l.status === 'active').length || 0;
    const totalListings = listings.data?.length || 0;
    const pendingQuotes = quotes.data?.filter((q) => q.status === 'pending').length || 0;

    return {
      activeListings,
      totalListings,
      pendingQuotes,
    };
  } catch {
    return {
      activeListings: 0,
      totalListings: 0,
      pendingQuotes: 0,
    };
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-granite-900">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your auction marketplace</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Auctions</CardTitle>
            <Gavel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeListings}</div>
            <p className="text-xs text-muted-foreground">Currently live</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalListings}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Quotes</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingQuotes}</div>
            <p className="text-xs text-muted-foreground">Requires action</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <Link href="/admin/listings" className="flex flex-col items-center text-center space-y-2">
                <PackagePlus className="w-8 h-8 text-accent-600" />
                <div className="font-semibold">Manage Listings</div>
                <p className="text-sm text-muted-foreground">Create and edit auction listings</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <Link href="/admin/auctions" className="flex flex-col items-center text-center space-y-2">
                <Gavel className="w-8 h-8 text-accent-600" />
                <div className="font-semibold">Configure Auctions</div>
                <p className="text-sm text-muted-foreground">Set prices and clock settings</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <Link href="/admin/transport-quotes" className="flex flex-col items-center text-center space-y-2">
                <Truck className="w-8 h-8 text-accent-600" />
                <div className="font-semibold">Transport Quotes</div>
                <p className="text-sm text-muted-foreground">Review quote requests</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <Link href="/admin/cms" className="flex flex-col items-center text-center space-y-2">
                <FileText className="w-8 h-8 text-accent-600" />
                <div className="font-semibold">CMS</div>
                <p className="text-sm text-muted-foreground">Manage pages and menus</p>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
