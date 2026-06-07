import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

// Dynamically generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return { title: 'Post Not Found' };

  return {
    title: `${blog.title} | YoBro Blog`,
    description: blog.excerpt,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    }
  };
}

// Generate static paths for all blogs at build time
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="pt-32 md:pt-48 pb-section-padding px-margin-mobile md:px-gutter max-w-3xl mx-auto min-h-screen">
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 transition-colors">
          &larr; Back to Blog
        </Link>
      </div>

      <article className="glass-panel p-6 md:p-12 rounded-2xl border border-glass-stroke relative z-10">
        <div className="flex items-center gap-4 text-sm text-on-surface-variant font-label-bold uppercase tracking-wider mb-6">
          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          <span>{blog.author}</span>
        </div>

        <h1 className="font-display-lg-mobile text-display-lg-mobile md:text-5xl font-extrabold text-crisp-white mb-8 leading-tight">
          {blog.title}
        </h1>

        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none 
          [&>h3]:text-crisp-white [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-2xl
          [&>p]:text-on-surface-variant [&>p]:mb-6 [&>p]:leading-relaxed
          [&>ul]:text-on-surface-variant [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2
          [&>ol]:text-on-surface-variant [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol>li]:mb-2
          [&_strong]:text-crisp-white [&_strong]:font-bold"
          dangerouslySetInnerHTML={{ __html: blog.content }}>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-stroke flex flex-wrap gap-2">
          {blog.keywords.map((keyword, i) => (
            <span key={i} className="px-3 py-1 bg-surface-container rounded-full text-xs text-on-surface-variant border border-glass-stroke">
              #{keyword}
            </span>
          ))}
        </div>
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
