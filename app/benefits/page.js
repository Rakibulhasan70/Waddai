import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Truck, Users, Star, Award } from "lucide-react";

const benefits = [
  "We don't charge large upfront fees like other agencies",
  "We'll get your store approved by Amazon",
  "We'll find the best selling products for you",
  "Get direct access to our best product suppliers",
  "We offer you some of the best pricing in the industry",
  "You can visit our warehouse in person anytime",
];

const logisticsServices = [
  {
    icon: <Shield size={28} />,
    title: "Accredited U.S.-based distribution company",
    desc: "BBB certified with A+ rating for transparency and integrity.",
  },
  {
    icon: <Star size={28} />,
    title: "Proven expertise in supply chain",
    desc: "10+ years of hands-on experience in ecommerce and fulfillment.",
  },
  {
    icon: <Truck size={28} />,
    title: "Fast, reliable onboarding",
    desc: "We get your business moving quickly with a clear strategic path.",
  },
  {
    icon: <Users size={28} />,
    title: "Clear, strategic path for B2B success",
    desc: "We tailor our approach to fit your business goals and needs.",
  },
  {
    icon: <Award size={28} />,
    title: "Amazon SPN Certified Partner",
    desc: "Officially certified to manage and grow your Amazon store.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Partnership-driven solutions",
    desc: "We only win when you win — our success is tied to yours.",
  },
];

export default function BenefitsPage() {
  return (
    <div className="w-full">

      {/* ── PAGE HERO ── */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Benefits</h1>
          <p className="text-gray-400 text-lg">
            Everything you get when you partner with us.
          </p>
        </div>
      </section>

      {/* ── MAIN BENEFIT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Own Your Own Fully-Managed Store
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Partner with a certified Account Manager and own your own
              successful store without needing to find the best selling products
              or manage the store yourself. You're the boss, and we do the work.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-black mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded hover:bg-gray-800 transition font-medium"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>

          {/* Value Proposition Box */}
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Value Proposition</h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              As a BBB-accredited U.S. wholesale distributor, we provide
              reliable, compliant, and partnership-driven solutions tailored for
              B2B businesses. Our commitment to transparency and service ensures
              peace of mind — you're working with a trusted, certified
              distribution company backed by over a decade of industry
              experience.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="text-sm font-medium">Google Verified Reviews</span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="text-sm font-medium">BBB Accredited Business</span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="text-sm font-medium">Amazon SPN Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGISTICS SERVICES ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Logistics Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A clear, strategic path for B2B wholesale success backed by
              proven expertise and reliable service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsServices.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition group"
              >
                <div className="text-black mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience These Benefits?
          </h2>
          <p className="text-gray-400 mb-10">
            Contact us today and let's build something great together.
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