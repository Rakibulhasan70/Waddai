"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: <MapPin size={24} />, title: "Address", value: "123 Furniture Lane, Design District, NY 10001" },
  { icon: <Phone size={24} />, title: "Phone", value: "+1 (800) 123-4567" },
  { icon: <Mail size={24} />, title: "Email", value: "hello@waddai.com" },
  { icon: <Clock size={24} />, title: "Working Hours", value: "Mon–Fri: 9am – 6pm" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">

      {/* ── HERO ── */}
      <section className="h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#f0ede8" }}>
        <div className="text-center max-w-2xl px-4">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 block" style={{ color: "#c8a882" }}>
            GET IN TOUCH
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-6">
            Contact<br />Us
          </h1>
          <p className="text-gray-500 text-lg">
            Have a question or want to place a wholesale order? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: "#c8a882" }}>
              CONTACT INFO
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Start A Conversation
            </h2>
            <div className="flex flex-col gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="text-gray-400 mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7a9e7e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2 block">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2 block">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2 block">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={6}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 transition resize-none placeholder:text-gray-300"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-gray-900 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-700 transition self-start"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      {/* <section className="h-72 w-full" style={{ backgroundColor: "#f0ede8" }}>
        <div className="h-full flex items-center justify-center text-gray-400">
          <div className="text-center">
            <MapPin size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm tracking-widest uppercase opacity-40">Map Placeholder</p>
          </div>
        </div>
      </section> */}

    </div>
  );
}