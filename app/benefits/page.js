"use client";

import Link from "next/link";
import { ArrowRight, Clock, Truck, CreditCard, Shield, RefreshCw, Headphones, Package, Zap } from "lucide-react";

const mainBenefits = [
  {
    icon: <Truck size={32} />,
    title: "Free Delivery",
    desc: "All orders over $50 ship free, anywhere in the world. We partner with trusted logistics providers to ensure your furniture arrives safely and on time.",
    bg: "#f0ede8",
    accent: "#c8a882",
  },
  {
    icon: <Clock size={32} />,
    title: "90 Days Return",
    desc: "Not satisfied? Return any item within 90 days, no questions asked. We believe in our products — and your peace of mind.",
    bg: "#e8ece8",
    accent: "#7a9e7e",
  },
  {
    icon: <CreditCard size={32} />,
    title: "Secure Payment",
    desc: "All transactions are encrypted and protected. We accept all major payment methods including credit cards, bank transfers, and more.",
    bg: "#e8eaec",
    accent: "#6b7fa3",
  },
];

const extraBenefits = [
  { icon: <Shield size={24} />, title: "Quality Guarantee", desc: "Every product passes our strict quality checks before dispatch." },
  { icon: <RefreshCw size={24} />, title: "Easy Exchange", desc: "Swap any item hassle-free within the return window." },
  { icon: <Headphones size={24} />, title: "24/7 Support", desc: "Our team is always ready to help you, any time of day." },
  { icon: <Package size={24} />, title: "Safe Packaging", desc: "Custom packaging designed to protect furniture during transit." },
  { icon: <Zap size={24} />, title: "Fast Processing", desc: "Orders are processed and dispatched within 24 hours." },
  { icon: <Clock size={24} />, title: "Bulk Discounts", desc: "Special pricing available for wholesale and large orders." },
];

export default function BenefitsPage() {
  return (
    <div className="w-full bg-white">

      {/* ── HERO ── */}
      <section className="h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#e8eaec" }}>
        <div className="text-center max-w-2xl px-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block" style={{ color: "#6b7fa3" }}>
            WHY CHOOSE US
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-6">
            Our<br />Benefits
          </h1>
          <p className="text-gray-500 text-lg">
            Everything we offer is designed to make your experience seamless, safe, and satisfying.
          </p>
        </div>
      </section>

      {/* ── MAIN BENEFITS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">What You Get With Waddai</h2>
            <p className="text-gray-400 text-sm">Built around your needs, every step of the way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainBenefits.map((b, i) => (
              <div
                key={i}
                className="rounded-lg p-10 flex flex-col gap-6"
                style={{ backgroundColor: b.bg }}
              >
                <div style={{ color: b.accent }}>{b.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTRA BENEFITS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">And So Much More</h2>
            <p className="text-gray-400 text-sm">Every detail matters to us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extraBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="text-gray-400 mt-1 shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: "#f0ede8" }}>
        <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "#c8a882" }}>
          READY TO START?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Experience The<br />Waddai Difference
        </h2>
        <p className="text-gray-500 text-sm mb-10 max-w-md">
          Join thousands of satisfied customers who trust Waddai for quality furniture at wholesale prices.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition"
        >
          Get In Touch <ArrowRight size={16} />
        </Link>
      </section>

    </div>
  );
}