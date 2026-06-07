import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  let blogs = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs`, { cache: 'no-store' });
    const data = await res.json();
    blogs = data.blogs || [];
  } catch(e) {}

  const post = blogs.find((p: any) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | YoBro Marketing Blog`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let blogs = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs`, { cache: 'no-store' });
    const data = await res.json();
    blogs = data.blogs || [];
  } catch(e) {}

  const post = blogs.find((p: any) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-section-padding px-margin-mobile md:px-gutter max-w-3xl mx-auto min-h-screen">
      
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Insights
        </Link>
      </div>

      <article>
        <header className="mb-10 text-center">
          <div className="flex gap-2 justify-center mb-6 flex-wrap">
            {post.keywords?.map((keyword: string) => (
              <span key={keyword} className="text-[10px] uppercase font-bold text-secondary bg-surface-variant px-3 py-1.5 rounded-full border border-glass-stroke">
                {keyword}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-display-lg text-crisp-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-on-surface-variant font-bold">
            <span className="text-primary">{post.author}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-glass-stroke"></span>
            <span>{post.date}</span>
          </div>
        </header>

        {post.image && (
          <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-glass-stroke">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div 
          className="prose prose-invert prose-lg prose-p:text-on-surface-variant prose-headings:text-crisp-white prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-crisp-white mb-4">Ready to implement these strategies?</h3>
        <p className="text-on-surface-variant mb-6">Let YoBro Marketing handle it for you and guarantee your ROI.</p>
        <Link href="/pricing" className="inline-block px-8 py-4 bg-primary text-pure-black font-bold rounded-full hover:scale-105 transition-transform btn-glow">
          View Our Packages
        </Link>
      </section>
    </main>
  );
}
