"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Trophy, Warehouse, Star } from "lucide-react";

// Hero Slider Data
const slides = [
  {
    title: "Wholesale Distributor",
    subtitle: "Your trusted partner for top-selling wholesale products",
    bg: "from-gray-900 to-gray-700",
  },
  {
    title: "Providing Top Selling Products",
    subtitle: "We source, manage and deliver products directly to warehouses",
    bg: "from-black to-gray-800",
  },
  {
    title: "Conveniently Located",
    subtitle: "Visit our warehouse in person anytime",
    bg: "from-gray-800 to-gray-600",
  },
];

// Why Choose Us Data
const reasons = [
  {
    icon: <Trophy size={28} />,
    title: "We Charge You Less",
    desc: "Other agencies charge $10k to $30k upfront fees – We Don't. We want you to invest your money in your product inventory.",
  },
  {
    icon: <Users size={28} />,
    title: "We're Real People",
    desc: "Our warehouse is open to you for in-person visits anytime.",
  },
  {
    icon: <Star size={28} />,
    title: "We Only Win When You Win",
    desc: "We'll be your management partner for a low monthly fee or a profit sharing split.",
  },
  {
    icon: <Warehouse size={28} />,
    title: "We Manage The Work For You",
    desc: "We select, order and deliver the products to Amazon FBA or Walmart WFS warehouses for you.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "We're Certified",
    desc: "We have 10+ years of ecommerce management experience and we're a certified partner.",
  },
  {
    icon: <Star size={28} />,
    title: "We Share Our Supplier Network",
    desc: "We give you access to our private list of wholesale product vendors.",
  },
];

// Focus Areas
const focusAreas = ["Development", "Scaling", "Management", "Expansion"];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">

      {/* ── HERO SLIDER ── */}
      <section className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-br ${slide.bg} flex items-center justify-center transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center text-white px-6 max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10">
                {slide.subtitle}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-semibold rounded hover:bg-gray-100 transition text-lg"
              >
                Explore More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-white scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Few Reasons Why You Choose Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We believe in building long-term partnerships based on trust, transparency, and results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl p-8 hover:shadow-lg transition group"
              >
                <div className="text-black mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition font-medium"
            >
              Explore More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We believe that successful distribution begins with strong business partnerships.
              That's why we focus on understanding your supply needs and delivering tailored
              wholesale solutions. As a certified wholesale distributor, we're committed to
              helping businesses grow through reliable sourcing and consistent service.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Wholesale Distributor with a Focus on B2B Supply Solutions
            </h3>
            <p className="text-gray-500 mb-6">Areas of focus include:</p>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3"
                >
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">10+ Years</h3>
            <p className="text-gray-400 mb-8">of ecommerce management experience</p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="text-gray-400 text-sm mt-1">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold">BBB</div>
                <div className="text-gray-400 text-sm mt-1">Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            If You Have Any Questions, Feel Free to Contact Us
          </h2>
          <p className="text-gray-400 mb-10">
            We are your trusted worldwide logistics and wholesale distribution partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-100 transition"
            >
              Book a Call
            </Link>
            <a
              href="tel:+13053397978"
              className="border border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-black transition"
            >
              +1 4453064081
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}