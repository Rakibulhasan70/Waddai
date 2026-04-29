import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Benefits", href: "/benefits" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
        <img src="/waddai-logo.png" alt="Waddai" className="h-10 w-auto" />
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your company description goes here. We are a trusted wholesale
            distributor committed to helping businesses grow.
          </p>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-white shrink-0" />
              <span>Your Address Here, City, State, ZIP</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white shrink-0" />
              <a href="tel:+10000000000" className="hover:text-white transition">
                +1 000.000.0000
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white shrink-0" />
              <a href="mailto:your@email.com" className="hover:text-white transition">
                your@email.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-300">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-gray-300">
            Legal
          </h3>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
       <img src="/waddai-logo.png" alt="Waddai" className="h-10 w-auto" />
        <p>Wholesale & Distribution</p>
      </div>
    </footer>
  );
}
