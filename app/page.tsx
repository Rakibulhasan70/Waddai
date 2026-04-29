"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Truck, CreditCard, ChevronLeft, ChevronRight, User } from "lucide-react";

// Hero Slides
const slides = [
  {
    badge: "NEW ARRIVAL",
    title: "Modern Living\nCollection",
    subtitle: "Discover furniture that transforms your space",
    bg: "#f0ede8",
    accent: "#c8a882",
  },
  {
    badge: "BEST SELLER",
    title: "Minimal Design\nFor Every Home",
    subtitle: "Crafted with precision, built to last",
    bg: "#e8ece8",
    accent: "#7a9e7e",
  },
  {
    badge: "SALE UP TO 30%",
    title: "Premium Quality\nAt Best Price",
    subtitle: "Shop our curated wholesale collection",
    bg: "#e8eaec",
    accent: "#6b7fa3",
  },
];

// Categories
const categories = [
  { label: "NEW", name: "Chairs", bg: "#f5f0eb" },
  { label: "HOT", name: "Tables", bg: "#f0f5eb" },
  { label: "SALE", name: "Lightings", bg: "#ebf0f5" },
];

// Products
const products = [
  { id: 1, name: "Wicker Lounge Chair", price: "$90.00", colors: ["#c8a882", "#8b7355", "#d4c5b0"] },
  { id: 2, name: "Oak Base Table", price: "$182.00", oldPrice: null, colors: ["#d4c5b0", "#8b7355", "#c8a882"] },
  { id: 3, name: "Alex Lounge Chair", price: "$90.00", colors: ["#c8a882", "#d4756b", "#d4c5b0"] },
  { id: 4, name: "Minimalist Sofa", price: "$150.00", colors: ["#6b7fa3", "#4a5568", "#8b9bb4", "#c8a882"] },
  { id: 5, name: "Wicker Storage", oldPrice: "$130.00", price: "$96.00", discount: "-26%", colors: ["#c8a882", "#8b7355"] },
  { id: 6, name: "Oak Lounge Chair", price: "$180.00", colors: ["#d4c5b0", "#6b9e6b", "#6b7fa3", "#c8a882"] },
  { id: 7, name: "Alex Lounge Chair", oldPrice: "$180.00", price: "$140.00", discount: "-22%", colors: ["#4a5568", "#c8a882", "#d4c5b0"] },
  { id: 8, name: "Bollard Lamp", price: "$150.00", colors: ["#2d2d2d", "#6b7fa3", "#c8a882"] },
];

// Brands
const brands = ["George", "FLOYD", "LAYLO", "D·DOTS", "WOODHOUSE"];

// Blogs
const blogs = [
  { id: 1, title: "Going all-in with minimalist design", author: "Waddai Admin", date: "April 15, 2025", slug: "minimalist-design" },
  { id: 2, title: "Colorful office redesign ideas", author: "Waddai Admin", date: "April 15, 2025", slug: "office-redesign" },
  { id: 3, title: "Modern home styling tips", author: "Waddai Admin", date: "April 15, 2025", slug: "modern-home" },
];

// Features
const features = [
  { icon: <Clock size={28} />, title: "90 Days Return", desc: "If goods have problems, we'll handle it." },
  { icon: <Truck size={28} />, title: "Free Delivery", desc: "For all orders over $50, free shipping." },
  { icon: <CreditCard size={28} />, title: "Secure Payment", desc: "100% secure payment guaranteed." },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
 const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="w-full bg-white">

      {/* ── HERO SLIDER ── */}
      <section className="relative h-[85vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{ backgroundColor: slide.bg }}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
              <div className="max-w-xl">
                <span
                  style={{ color: slide.accent }}
                  className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
                >
                  {slide.badge}
                </span>
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-6 whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-gray-500 text-lg mb-10">{slide.subtitle}</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition"
                >
                  Shop Now <ArrowRight size={16} />
                </Link>
              </div>

              {/* Decorative placeholder image area */}
              <div
                style={{ backgroundColor: slide.accent + "20" }}
                className="hidden md:flex w-80 h-80 rounded-full items-center justify-center"
              >
                <div
                  style={{ backgroundColor: slide.accent + "40" }}
                  className="w-48 h-48 rounded-full flex items-center justify-center"
                >
                  <div style={{ backgroundColor: slide.accent }} className="w-20 h-20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 rounded-full transition-all ${i === current ? "h-6 bg-gray-900" : "h-2 bg-gray-400"}`}
            />
          ))}
        </div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/products"
              style={{ backgroundColor: cat.bg }}
              className="relative rounded-lg p-10 flex flex-col justify-end h-56 overflow-hidden group hover:shadow-lg transition"
            >
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                {cat.label}
              </span>
              <h3 className="text-3xl font-bold text-gray-900">{cat.name}</h3>
              <div className="absolute right-6 bottom-6 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowRight size={14} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TOP PICKS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Top Picks For You</h2>
            <p className="text-gray-400 text-sm">
              Find the ideal product to suit your taste from our great selection.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image placeholder */}
                <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full" />
                  </div>
                  {/* Hover buttons */}
                  <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300 ${hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <button className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition text-xs">
                      +
                    </button>
                    <button className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </button>
                  </div>
                </div>

              

                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2">
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                  <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE PRODUCTS ── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(4).map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full" />
                  </div>
                  <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300 ${hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <button className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition text-xs">
                      +
                    </button>
                    <button className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </button>
                  </div>
                </div>
            
                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2">
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                  <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND LOGOS ── */}
      <section className="py-12 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-8">
          {brands.map((brand, i) => (
            <span key={i} className="text-gray-300 font-bold text-xl tracking-widest hover:text-gray-500 transition cursor-pointer">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Blogs</h2>
            <p className="text-gray-400 text-sm">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
                {/* Image placeholder */}
                <div className="bg-gray-100 rounded-lg aspect-video mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:underline leading-snug">
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-block bg-gray-900 text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition"
            >
              View All Post
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="text-gray-400 mt-1 shrink-0">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}