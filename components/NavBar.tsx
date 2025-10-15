'use client';

import Link from 'next/link';
import { useAuth } from '@/components/AuthProvider';
import { isAdmin } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userIsAdmin = user?.email ? isAdmin(user.email) : false;

  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-granite-900 hover:text-accent-600 transition-colors">
            Force Auctions
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/auctions" className="text-sm font-medium hover:text-accent-600 transition-colors">
              Auctions
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-accent-600 transition-colors">
              Pricing
            </Link>
            <Link href="/transport" className="text-sm font-medium hover:text-accent-600 transition-colors">
              Transport
            </Link>
            {userIsAdmin && (
              <Link href="/admin/dashboard" className="text-sm font-medium hover:text-accent-600 transition-colors">
                Admin
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{user.email}</span>
                <Button asChild variant="outline" size="sm">
                  <Link href="/api/auth/signout">Sign Out</Link>
                </Button>
              </div>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild variant="accent" size="sm">
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link
              href="/auctions"
              className="block text-sm font-medium hover:text-accent-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Auctions
            </Link>
            <Link
              href="/pricing"
              className="block text-sm font-medium hover:text-accent-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/transport"
              className="block text-sm font-medium hover:text-accent-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Transport
            </Link>
            {userIsAdmin && (
              <Link
                href="/admin/dashboard"
                className="block text-sm font-medium hover:text-accent-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
