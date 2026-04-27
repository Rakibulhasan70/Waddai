import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const values = [
  "Trusted B2B wholesale distributor since 2004",
  "BBB Accredited with A+ rating",
  "10+ years of ecommerce management experience",
  "Amazon SPN certified partner",
  "Open warehouse for in-person visits",
  "Strong supplier relationships across the U.S.",
];

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ── PAGE HERO ── */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-400 text-lg">
            Learn who we are, what we do, and why businesses trust us.
          </p>
        </div>
      </section>

      {/* ── WELCOME SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Welcome to <span className="underline">YourBrand</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Located in the heart of your city, YourBrand stands at the
              forefront of the wholesale distribution and service provider
              industry. Our mission is to empower both small and large volume
              sellers by providing them with top-selling wholesale products.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We are committed to building long-term partnerships based on
              trust, transparency, and results. Every client we work with
              becomes a part of our growing network of successful businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition font-medium"
            >
              Connect With Us <ArrowRight size={18} />
            </Link>
          </div>

          {/* Stats Box */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "2004", label: "Founded" },
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Clients Served" },
              { number: "A+", label: "BBB Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center hover:shadow-md transition"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-500 leading-relaxed text-lg mb-6">
            Our journey began in 2004 with a passion for product sourcing and
            distribution. Over the years, we built strong supplier relationships
            and gained hands-on experience in various retail models.
          </p>
          <p className="text-gray-500 leading-relaxed text-lg">
            We fully transitioned into wholesale distribution, establishing
            YourBrand as a trusted B2B provider for businesses across the
            country. Today, we continue to grow and serve businesses of all
            sizes with the same passion and dedication.
          </p>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-black text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Our Value Proposition</h2>
            <p className="text-gray-400 leading-relaxed">
              As a BBB-accredited business, we provide trusted wholesale account
              support tailored to your needs. Our commitment to professionalism
              and integrity ensures reliable service and long-term partnerships
              you can count on.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">What We Stand For</h3>
            <ul className="flex flex-col gap-4">
              {values.map((val, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-black mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-400 mb-10">
            Let's build a successful business partnership together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-100 transition"
          >
            Book a Call <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}