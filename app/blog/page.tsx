import { blogs } from "@/lib/blogs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights & Marketing Strategies",
  description: "Read the latest insights, strategies, and tips on digital marketing, social media growth, and lead generation from the experts at YoBro Marketing.",
  keywords: ["Marketing Blog", "Growth Tips", "Marketing Strategies", "Digital Marketing Insights"],
};

export default function BlogIndex() {
  return (
    <main className="pt-32 md:pt-48 pb-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto min-h-screen">
      <section className="text-center mb-16 relative z-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 text-crisp-white">
          Our <span className="text-primary text-glow">Insights</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Expert strategies, industry updates, and actionable tips to help you dominate your market.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter relative z-10">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id} className="group flex flex-col glass-panel rounded-xl overflow-hidden border border-glass-stroke hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,146,28,0.1)]">
            <div className="h-48 w-full overflow-hidden relative">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-surface-container/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-crisp-white">
                {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="font-headline-md text-headline-md text-crisp-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-glass-stroke">
                <span className="text-xs font-label-bold text-on-surface-variant uppercase tracking-wider">{blog.author}</span>
                <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Read More &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
