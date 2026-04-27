import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "How to Start Your Amazon FBA Business in 2025",
    excerpt:
      "Starting an Amazon FBA business can be overwhelming. In this guide, we break down everything you need to know to get started successfully.",
    category: "Amazon FBA",
    author: "Your Name",
    date: "April 10, 2025",
    readTime: "5 min read",
    slug: "how-to-start-amazon-fba",
  },
  {
    id: 2,
    title: "Top 10 Wholesale Products to Sell on Amazon Right Now",
    excerpt:
      "Discover the best wholesale products that are currently trending on Amazon and learn how to source them at competitive prices.",
    category: "Wholesale",
    author: "Your Name",
    date: "April 5, 2025",
    readTime: "7 min read",
    slug: "top-wholesale-products-amazon",
  },
  {
    id: 3,
    title: "Why BBB Accreditation Matters for Your Business",
    excerpt:
      "BBB accreditation signals trust and credibility. Learn why it matters when choosing a wholesale distribution partner.",
    category: "Business",
    author: "Your Name",
    date: "March 28, 2025",
    readTime: "4 min read",
    slug: "bbb-accreditation-matters",
  },
  {
    id: 4,
    title: "Amazon FBA vs Walmart WFS: Which is Better?",
    excerpt:
      "We compare Amazon FBA and Walmart WFS to help you decide which fulfillment platform is the best fit for your business.",
    category: "Ecommerce",
    author: "Your Name",
    date: "March 20, 2025",
    readTime: "6 min read",
    slug: "amazon-fba-vs-walmart-wfs",
  },
  {
    id: 5,
    title: "How Wholesale Distribution Works: A Beginner's Guide",
    excerpt:
      "New to wholesale? This beginner's guide explains how wholesale distribution works and how to find the right supplier for your business.",
    category: "Wholesale",
    author: "Your Name",
    date: "March 15, 2025",
    readTime: "8 min read",
    slug: "wholesale-distribution-beginners-guide",
  },
  {
    id: 6,
    title: "5 Mistakes New Amazon Sellers Make (And How to Avoid Them)",
    excerpt:
      "Learn the most common mistakes new Amazon sellers make and discover proven strategies to avoid them from day one.",
    category: "Amazon FBA",
    author: "Your Name",
    date: "March 8, 2025",
    readTime: "5 min read",
    slug: "mistakes-new-amazon-sellers",
  },
];

const categories = ["All", "Amazon FBA", "Wholesale", "Business", "Ecommerce"];

export default function BlogsPage() {
  return (
    <div className="w-full">

      {/* ── PAGE HERO ── */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-gray-400 text-lg">
            Insights, tips, and strategies for wholesale and ecommerce success.
          </p>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                i === 0
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition group"
              >
                {/* Placeholder Image */}
                <div className="bg-gray-900 h-48 flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-4 py-2 border border-white rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User size={12} /> {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {blog.readTime}
                    </span>
                    <span>{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold mb-3 group-hover:underline leading-snug">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-400 mb-10">
            Contact us and let's talk about how we can grow your business together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-100 transition"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}