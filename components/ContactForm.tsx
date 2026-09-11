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
      <div className="bg-linen-dark rounded-2xl p-8">
        <h3 className="font-display text-2xl text-charcoal mb-2">
          Thank you for reaching out.
        </h3>
        <p className="text-charcoal/70 leading-relaxed">
          I&apos;ve received your message and will respond within 24 hours.
          I&apos;m looking forward to connecting with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-clay/50"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-clay/50"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-clay/50"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="preference" className="block text-sm font-medium text-charcoal mb-1.5">
            Preferred Session Type
          </label>
          <select
            id="preference"
            name="preference"
            className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-clay/50"
          >
            <option>In-person (Santa Monica)</option>
            <option>Telehealth (California)</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          What brings you to therapy?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-clay/50"
          placeholder="Share a little about what you're going through and what you're hoping to get out of therapy..."
        />
      </div>

      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  );
}