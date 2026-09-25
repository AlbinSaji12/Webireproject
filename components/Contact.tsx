"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "",
        phone: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#181918] text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Diagonal Neon Green Ray Background Accent */}
      <div className="absolute -left-28 -top-20 bottom-0 w-[450px] bg-gradient-to-r from-transparent via-[#9EFF00]/25 to-transparent blur-3xl -rotate-[35deg] pointer-events-none select-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Copy */}
        <div className="lg:col-span-5 flex flex-col items-start pt-2">
          {/* Tag Pill */}
          <div className="mb-6">
            <span className="bg-[#2a2c2a] text-zinc-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-zinc-700/40 tracking-wide">
              Contact
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Let’s Talk About Your
            <br />
            Next Big Move
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base lg:text-[16.5px] leading-relaxed max-w-md font-normal">
            Got an idea? We'd love to hear it. Whether it's a logo, a site, or
            the whole digital journey — let’s get started.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 w-full">
          {submitted ? (
            <div className="bg-[#121312] border border-[#9EFF00]/40 rounded-2xl p-10 flex flex-col items-center text-center shadow-2xl animate-fade-in">
              <CheckCircle className="w-16 h-16 text-[#9EFF00] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-zinc-400 text-sm max-w-md">
                Thank you for reaching out. We have received your project details
                and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-zinc-300 text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#1e201e] border border-zinc-700/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-[#9EFF00] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-zinc-300 text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#1e201e] border border-zinc-700/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-[#9EFF00] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Project Type & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="projectType" className="text-zinc-300 text-sm font-medium">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full bg-[#1e201e] border border-zinc-700/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 text-sm appearance-none focus:outline-none focus:border-[#9EFF00] transition-colors pr-10 cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#181918] text-zinc-500">
                        Select a Project Type
                      </option>
                      <option value="branding" className="bg-[#181918] text-white">
                        Branding & Identity
                      </option>
                      <option value="uiux" className="bg-[#181918] text-white">
                        UI/UX Design
                      </option>
                      <option value="webdev" className="bg-[#181918] text-white">
                        Website Development
                      </option>
                      <option value="appdev" className="bg-[#181918] text-white">
                        App Design & Development
                      </option>
                      <option value="marketing" className="bg-[#181918] text-white">
                        Marketing & Strategy
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-zinc-300 text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#1e201e] border border-zinc-700/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-[#9EFF00] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-zinc-300 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#1e201e] border border-zinc-700/60 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-[#9EFF00] transition-colors resize-none"
                />
              </div>

              {/* Form Submit Button: Bottom Right Aligned */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-[#9EFF00] hover:bg-[#8ee600] text-black font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(158,255,0,0.4)] hover:shadow-[0_0_35px_rgba(158,255,0,0.65)] hover:scale-105 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
