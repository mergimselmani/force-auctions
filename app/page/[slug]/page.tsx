import { getSupabaseAdmin } from '@/lib/supabaseAdmin';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const sb = getSupabaseAdmin();
  const { data } = await sb.from('pages').select('meta_title, meta_description').eq('slug', params.slug).eq('published', true).single();
  return {
    title: data?.meta_title ?? params.slug,
    description: data?.meta_description ?? undefined
  };
}

export default async function CMSPage({ params }: { params: { slug: string } }) {
  const sb = getSupabaseAdmin();
  const { data } = await sb.from('pages').select('*').eq('slug', params.slug).eq('published', true).single();
  if (!data) return <div className="container" style={{paddingTop:40}}>Pagina niet gevonden</div>;
  return (
    <div className="container" style={{paddingTop:24}}>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content_html || '' }} />
    </div>
  );
}
