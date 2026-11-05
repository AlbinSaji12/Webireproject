"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

const FIELD =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#7ad700] focus:bg-white focus:shadow-[0_0_0_4px_rgba(158,255,0,0.18)] transition-all duration-300";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-[#f4fde8] border border-[#b6e87d] rounded-2xl p-10 flex flex-col items-center text-center">
        <CheckCircle className="w-16 h-16 text-[#5fb800] mb-4" />
        <h3 className="text-2xl font-bold text-black mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600 text-sm max-w-md">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5 w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-700 text-sm font-medium">
            Your Name <span className="text-[#5fb800]">*</span>
          </label>
          <input id="name" type="text" required placeholder="John Doe" className={FIELD} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700 text-sm font-medium">
            Your Email <span className="text-[#5fb800]">*</span>
          </label>
          <input id="email" type="email" required placeholder="you@example.com" className={FIELD} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-gray-700 text-sm font-medium">
          Subject
        </label>
        <div className="relative">
          <select id="subject" defaultValue="" className={`${FIELD} appearance-none pr-10 cursor-pointer`}>
            <option value="" disabled>
              Select Subject
            </option>
            <option value="web">Web Design</option>
            <option value="wordpress">WordPress Development</option>
            <option value="branding">Branding</option>
            <option value="development">Development</option>
            <option value="other">Something Else</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-gray-700 text-sm font-medium">
          Your Message <span className="text-[#5fb800]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us a little about your project..."
          className={`${FIELD} resize-none`}
        />
      </div>

      <div>
        <button
          type="submit"
          data-magnetic
          className="group inline-flex items-center gap-2 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(158,255,0,0.4)] hover:shadow-[0_0_35px_rgba(158,255,0,0.65)] hover:scale-105 cursor-pointer"
        >
          Send Message
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
