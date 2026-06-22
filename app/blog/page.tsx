import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Insights & Marketing Strategies",
  description: "Read the latest insights, strategies, and industry news from YoBro Marketing to scale your brand.",
  keywords: ["Marketing Blog", "Social Media Tips", "Lead Generation Strategies", "YoBro Blog"],
};

export const dynamic = 'force-dynamic';

export default async function BlogIndex() {
  let blogs = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs`, { cache: 'no-store' });
    const data = await res.json();
    blogs = data.blogs || [];
  } catch(e) {}

  return (
    <main className="pt-32 md:pt-48 pb-16 md:pb-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto min-h-screen">
      <ScrollReveal delay={0.1}>
        <section className="mb-16 md:mb-24 text-center relative z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tighter text-crisp-white">
            Our <span className="text-primary text-glow">Insights</span>.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Deep dives, strategies, and industry secrets to help you dominate your market.
          </p>
        </section>
      </ScrollReveal>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length === 0 ? (
          <div className="col-span-full text-center py-12 text-on-surface-variant">
            No blog posts available right now.
          </div>
        ) : (
          blogs.map((post: any) => (
            <ScrollReveal delay={0.1} key={post.id} className="h-full">
              <Link href={`/blog/${post.slug}`} className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden bg-surface-container-low">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-secondary/30">image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-pure-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-glass-stroke">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{post.date}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {post.keywords?.slice(0, 2).map((keyword: string) => (
                      <span key={keyword} className="text-[10px] uppercase font-bold text-secondary bg-surface-variant px-2 py-1 rounded-md">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-crisp-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-glass-stroke">
                    <span className="text-xs font-bold text-crisp-white">{post.author}</span>
                    <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))
        )}
      </section>
    </main>
  );
}
