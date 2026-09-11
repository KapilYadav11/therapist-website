"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-charcoal/10 shadow-sm p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-moss/10 flex items-center justify-center mb-5">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-moss">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-charcoal mb-2">Thank you for reaching out.</h3>
        <p className="text-charcoal/70 leading-relaxed max-w-sm mx-auto">
          I&apos;ve received your message and will respond within 24 hours. I&apos;m looking forward to connecting with you.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-charcoal/10 shadow-sm p-7 md:p-10">
      <h2 className="font-display text-2xl text-charcoal mb-1.5">Send a Message</h2>
      <p className="text-charcoal/60 text-sm mb-8">Fields marked <span className="text-clay">*</span> are required.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Full Name <span className="text-clay">*</span></label>
            <input id="name" name="name" type="text" required className="w-full rounded-xl border border-charcoal/15 bg-linen/40 px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:ring-2 focus:ring-clay/40 focus:border-clay/50 transition-shadow" placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email Address <span className="text-clay">*</span></label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-charcoal/15 bg-linen/40 px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:ring-2 focus:ring-clay/40 focus:border-clay/50 transition-shadow" placeholder="jane@example.com" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone Number</label>
            <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-charcoal/15 bg-linen/40 px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:ring-2 focus:ring-clay/40 focus:border-clay/50 transition-shadow" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label htmlFor="preference" className="block text-sm font-medium text-charcoal mb-2">Preferred Session Type</label>
            <select id="preference" name="preference" className="w-full rounded-xl border border-charcoal/15 bg-linen/40 px-4 py-3.5 text-[15px] text-charcoal focus:outline-none focus:ring-2 focus:ring-clay/40 focus:border-clay/50 transition-shadow">
              <option>In-person (Santa Monica)</option>
              <option>Telehealth (California)</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">What brings you to therapy? <span className="text-clay">*</span></label>
          <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-charcoal/15 bg-linen/40 px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:ring-2 focus:ring-clay/40 focus:border-clay/50 transition-shadow resize-none" placeholder="Share a little about what you're going through and what you're hoping to get out of therapy..." />
        </div>

        <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-clay text-linen px-8 py-4 rounded-full font-body font-medium text-[15px] hover:bg-clay-dark transition-colors">
          Send Message
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>
    </div>
  );
}