"use client";

import Link from "next/link";
import { User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Going all-in with minimalist design",
    excerpt: "Minimalism isn't just a style — it's a philosophy. We explore how stripping back the unnecessary can transform your living space into something truly special.",
    author: "Waddai Admin",
    date: "April 15, 2025",
    category: "Design",
    slug: "minimalist-design",
    bg: "#f0ede8",
    accent: "#c8a882",
  },
  {
    id: 2,
    title: "Colorful office redesign ideas",
    excerpt: "Your workspace should inspire you. Discover how bold color choices and smart furniture selection can make your office a place you actually want to spend time in.",
    author: "Waddai Admin",
    date: "April 15, 2025",
    category: "Office",
    slug: "office-redesign",
    bg: "#e8ece8",
    accent: "#7a9e7e",
  },
  {
    id: 3,
    title: "Modern home styling tips",
    excerpt: "Modern design is all about balance — clean lines, neutral palettes, and statement pieces. Here are our top tips for pulling off a modern look without breaking the bank.",
    author: "Waddai Admin",
    date: "April 15, 2025",
    category: "Home",
    slug: "modern-home",
    bg: "#e8eaec",
    accent: "#6b7fa3",
  },
  {
    id: 4,
    title: "Choosing the right sofa for your space",
    excerpt: "A sofa is often the centerpiece of a living room. We break down everything you need to consider — size, material, color, and more — before making your purchase.",
    author: "Waddai Admin",
    date: "March 28, 2025",
    category: "Guide",
    slug: "choosing-sofa",
    bg: "#f0ede8",
    accent: "#c8a882",
  },
  {
    id: 5,
    title: "Sustainable furniture: what to look for",
    excerpt: "Sustainability in furniture isn't just a trend. Learn how to identify genuinely eco-friendly products and why it matters for your home and the planet.",
    author: "Waddai Admin",
    date: "March 10, 2025",
    category: "Sustainability",
    slug: "sustainable-furniture",
    bg: "#e8ece8",
    accent: "#7a9e7e",
  },
  {
    id: 6,
    title: "Small space, big style: studio apartment tips",
    excerpt: "Limited square footage doesn't mean limited style. Discover clever furniture choices and layout tricks that make small apartments feel open and inviting.",
    author: "Waddai Admin",
    date: "February 20, 2025",
    category: "Tips",
    slug: "small-space-style",
    bg: "#e8eaec",
    accent: "#6b7fa3",
  },
];

export default function BlogsPage() {
  return (
    <div className="w-full bg-white">

      {/* ── HERO ── */}
      <section className="h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#e8ece8" }}>
        <div className="text-center max-w-2xl px-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block" style={{ color: "#7a9e7e" }}>
            INSIGHTS & IDEAS
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-6">
            Our<br />Blogs
          </h1>
          <p className="text-gray-500 text-lg">
            Design inspiration, buying guides, and styling tips from the Waddai team.
          </p>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                {/* Image placeholder */}
                <div
                  className="w-full aspect-video rounded-lg mb-5 overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: blog.bg }}
                >
                  <div className="w-16 h-16 rounded-full group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: blog.accent + "60" }} />
                </div>

                {/* Category */}
                <span
                  className="text-xs font-semibold tracking-widest uppercase mb-2 block"
                  style={{ color: blog.accent }}
                >
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 group-hover:underline leading-snug mb-3">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}