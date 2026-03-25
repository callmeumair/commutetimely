"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-2xl border border-white/10 relative z-10" style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)" }}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-white/60 text-sm font-medium">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="your@email.com"
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3A7BFF] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="topic" className="text-white/60 text-sm font-medium">Topic</label>
        <select 
          id="topic" 
          name="topic" 
          required
          className="bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3A7BFF] transition-colors appearance-none"
        >
          <option>Support</option>
          <option>Bug Report</option>
          <option>Feature Request</option>
          <option>Partnership</option>
          <option>Press</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-white/60 text-sm font-medium">Message</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={4}
          placeholder="How can we help?"
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3A7BFF] transition-colors resize-y"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="mt-2 bg-[#3A7BFF] hover:bg-[#2563eb] text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
