import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  let pages = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/pages`, { cache: 'no-store' });
    const data = await res.json();
    pages = data.pages || [];
  } catch(e) {}

  const pageData = pages.find((p: any) => p.slug === params.slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${pageData.title} | YoBro Marketing`,
    description: pageData.seoDescription || pageData.title,
    keywords: pageData.seoKeywords ? pageData.seoKeywords.split(',').map((k:string) => k.trim()) : [],
  };
}

export default async function CustomPage({ params }: { params: { slug: string } }) {
  let pages = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/pages`, { cache: 'no-store' });
    const data = await res.json();
    pages = data.pages || [];
  } catch(e) {}

  const pageData = pages.find((p: any) => p.slug === params.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <>
      <main className="pt-32 md:pt-48 pb-16 md:pb-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto min-h-screen">
        <section className="mb-12 relative z-10 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tighter text-crisp-white">
            {pageData.title}
          </h1>
        </section>

        <section className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl relative z-10">
          <div 
            className="prose prose-invert prose-lg prose-p:text-on-surface-variant prose-headings:text-crisp-white prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        </section>
      </main>
    </>
  );
}
