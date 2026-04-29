import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* Logo Top Center */}
      <div className="flex justify-center pt-16 pb-10">
        <Link className="flex items-center gap-3" href="/">
           <img src="/waddai-logo.png" alt="Waddai" className="h-12 w-auto" />
            <span className="text-xl font-bold tracking-tight text-gray-900">WADDAI</span>
        </Link>
      </div>

      {/* 3 Columns */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        {/* Call Us */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-800 mb-4">
            Call Us
          </h3>
          <p className="text-gray-500 text-sm">+1 000 000 0000</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-800 mb-4">
            Address
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your Street, City,<br />State ZIP
          </p>
        </div>

        {/* Email */}
      <div>
  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-800 mb-4">
    E-Mail
  </h3>

  <a
    href="mailto:your@email.com"
    className="text-sm hover:text-black transition"
    style={{ color: "#c8a882" }}
  >
    your@email.com
  </a>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            Copyright © <span className="font-semibold text-gray-600">Waddai</span>. All rights reserved.
          </p>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "About", href: "/about" },
              { label: "Blogs", href: "/blogs" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-black transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}