"use client";

import Link from "next/link";
import { ArrowRight, Clock, Truck, CreditCard } from "lucide-react";

// ── DATA ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "8K+", label: "Happy Customers" },
  { value: "200+", label: "Products" },
  { value: "50+", label: "Countries Served" },
];

const team = [
  { name: "James Carter", role: "Founder & CEO",    bg: "#f0ede8", accent: "#c8a882" },
  { name: "Sophia Lin",   role: "Head of Design",   bg: "#e8ece8", accent: "#7a9e7e" },
  { name: "Marcus Reid",  role: "Operations Lead",  bg: "#e8eaec", accent: "#6b7fa3" },
];

const features = [
  { icon: <Clock size={28} />,       title: "90 Days Return",  desc: "If goods have problems, we'll handle it." },
  { icon: <Truck size={28} />,       title: "Free Delivery",   desc: "For all orders over $50, free shipping."  },
  { icon: <CreditCard size={28} />,  title: "Secure Payment",  desc: "100% secure payment guaranteed."          },
];

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="w-full bg-white">

      {/* ── HERO — same layout as home slider ── */}
      <section
        className="relative h-[85vh] overflow-hidden flex items-center"
        style={{ backgroundColor: "#f0ede8" }}
      >
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">

          {/* Left text */}
          <div className="max-w-xl">
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block"
              style={{ color: "#c8a882" }}
            >
              WHO WE ARE
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-6 whitespace-pre-line">
              {"About\nWaddai"}
            </h1>
            <p className="text-gray-500 text-lg mb-10">
              A wholesale furniture brand built on craftsmanship, quality, and a love for great design.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>

          {/* Decorative circle — identical to home hero */}
          <div
            className="hidden md:flex w-80 h-80 rounded-full items-center justify-center"
            style={{ backgroundColor: "#c8a88220" }}
          >
            <div
              className="w-48 h-48 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#c8a88240" }}
            >
              <div className="w-20 h-20 rounded-full" style={{ backgroundColor: "#c8a882" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Decorative circle — green accent */}
          <div className="flex items-center justify-center">
            <div
              className="w-80 h-80 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#7a9e7e20" }}
            >
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#7a9e7e40" }}
              >
                <div className="w-20 h-20 rounded-full" style={{ backgroundColor: "#7a9e7e" }} />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "#7a9e7e" }}
            >
              OUR STORY
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Furniture Made<br />With Purpose
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Waddai started with a simple idea — beautiful, functional furniture should be accessible
              to everyone. Founded over a decade ago, we've grown from a small workshop into a global
              wholesale brand trusted by retailers worldwide.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Every collection reflects our commitment to timeless design, sustainable sourcing,
              and uncompromising quality. We work closely with skilled craftsmen to bring each piece to life.
            </p>
            <Link
              href="/benefits"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition"
            >
              Our Benefits <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TEAM — same card pattern as category cards ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Meet The Team</h2>
            <p className="text-gray-400 text-sm">The people behind every great piece.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-lg p-10 flex flex-col items-center text-center"
                style={{ backgroundColor: member.bg }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: member.accent + "40" }}
                >
                  <div className="w-10 h-10 rounded-full" style={{ backgroundColor: member.accent }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES — identical to home ── */}
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