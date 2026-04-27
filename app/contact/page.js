"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Our Location",
    detail: "Your Address Here, City, State, ZIP",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone Number",
    detail: "+1 000.000.0000",
    href: "tel:+10000000000",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Address",
    detail: "your@email.com",
    href: "mailto:your@email.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="w-full">

      {/* ── PAGE HERO ── */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">
            Have a question? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 text-black">
                {info.icon}
              </div>
              <h3 className="font-bold mb-2">{info.title}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-gray-500 text-sm hover:text-black transition"
                >
                  {info.detail}
                </a>
              ) : (
                <p className="text-gray-500 text-sm">{info.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Drop Us a Line</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Please give us a call, drop us an email or fill out the contact
              form and we'll get back to you as soon as possible.
            </p>
            <p className="text-xs text-gray-400">
              By submitting, you agree to our use of your information per our
              Privacy Policy.
            </p>

            {/* Office Info */}
            <div className="mt-10 bg-black text-white rounded-xl p-8">
              <h3 className="font-bold text-lg mb-4">Office Hours</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}