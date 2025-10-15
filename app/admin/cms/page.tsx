export const dynamic = 'force-dynamic';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import Link from 'next/link';
import { ArrowLeft, FileText, Menu as MenuIcon } from 'lucide-react';

async function getCMSData() {
  try {
    const supabase = getSupabaseAdmin();
    const [pages, menus] = await Promise.all([
      supabase.from('cms_pages').select('*').order('created_at', { ascending: false }),
      supabase.from('cms_menus').select('*').order('sort_order', { ascending: true }),
    ]);

    return {
      pages: pages.data || [],
      menus: menus.data || [],
    };
  } catch {
    return { pages: [], menus: [] };
  }
}

export default async function AdminCMSPage() {
  const { pages, menus } = await getCMSData();

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
        <h1 className="text-4xl font-bold text-granite-900">Content Management</h1>
        <p className="text-muted-foreground mt-2">
          Manage custom pages and navigation menus
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Pages
                </CardTitle>
                <CardDescription className="mt-2">
                  Create and manage custom pages
                </CardDescription>
              </div>
              <Button variant="accent" size="sm" disabled>
                New Page
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {pages.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <p>No custom pages yet</p>
                <p className="text-sm mt-2">Create your first page to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pages.map((page) => (
                  <Card key={page.id}>
                    <CardContent className="py-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{page.title}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            /{page.slug} • {page.locale}
                          </div>
                        </div>
                        <div
                          className={`text-xs px-2 py-1 rounded ${
                            page.published
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {page.published ? 'Published' : 'Draft'}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="ghost" size="sm" disabled>
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" disabled>
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MenuIcon className="w-5 h-5" />
                  Menus
                </CardTitle>
                <CardDescription className="mt-2">
                  Manage navigation menu items
                </CardDescription>
              </div>
              <Button variant="accent" size="sm" disabled>
                New Menu Item
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {menus.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <p>No menu items yet</p>
                <p className="text-sm mt-2">Add items to customize your navigation</p>
              </div>
            ) : (
              <div className="space-y-3">
                {menus.map((menu) => (
                  <Card key={menu.id}>
                    <CardContent className="py-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{menu.label}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {menu.href} • {menu.locale}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Order: {menu.sort_order}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="ghost" size="sm" disabled>
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" disabled>
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="py-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900">CMS Features Coming Soon</h3>
              <p className="text-sm text-blue-700 mt-1">
                Full page editor with rich text support, menu management with drag-and-drop
                reordering, and multi-language content support are currently under development.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
