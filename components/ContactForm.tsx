"use client";

import React, { useState } from "react";
import GlassCard from "./GlassCard";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <section className="py-section-padding relative z-10" id="contact">
      <div className="container mx-auto px-margin-mobile md:px-section-padding max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-crisp-white mb-4">
            Get in Touch
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Ready to dominate your market? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <GlassCard className="rounded-2xl p-8 md:p-10 shadow-lg">
          {status === "success" ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-crisp-white mb-2">Message Sent!</h3>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8">
                Thank you for reaching out. We will review your requirements and contact you shortly.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="px-6 py-3 bg-surface-container-high hover:bg-surface-container-highest text-crisp-white rounded-full transition-colors font-label-bold text-label-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-label-bold text-crisp-white ml-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest/50 border border-glass-stroke rounded-xl px-4 py-3 text-crisp-white placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container-low transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-label-bold text-crisp-white ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest/50 border border-glass-stroke rounded-xl px-4 py-3 text-crisp-white placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container-low transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-label-bold text-crisp-white ml-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest/50 border border-glass-stroke rounded-xl px-4 py-3 text-crisp-white placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container-low transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-label-bold text-crisp-white ml-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest/50 border border-glass-stroke rounded-xl px-4 py-3 text-crisp-white placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container-low transition-all resize-none"
                  placeholder="Tell us about your project or marketing goals..."
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-start gap-3">
                  <span className="material-symbols-outlined text-error shrink-0">error</span>
                  <p className="text-sm text-error/90 font-body-md mt-0.5">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-full sm:w-auto self-center px-10 py-4 bg-primary-container rounded-full font-label-bold text-label-bold text-pure-black btn-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
