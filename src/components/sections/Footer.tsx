"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
import BrandLogo from "@/components/BrandLogo";

type FooterLink = { label: string; href: string; toast: boolean; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "How it Works", href: "#features",   toast: false },
    { label: "Features",     href: "#features",   toast: false },
    { label: "Pricing",      href: "#pricing",    toast: false },
    { label: "App Store",    href: "https://apps.apple.com/in/app/commutetimely/id6752309705", toast: false, external: true },
  ],
  Company: [
    { label: "About",     href: "/about",    toast: false },
    { label: "Blog",      href: "/blog",     toast: false },
    { label: "Careers",   href: "/careers",  toast: true },
    { label: "Press Kit", href: "/press",    toast: true },
  ],
  Support: [
    { label: "Help Center", href: "/help",     toast: true },
    { label: "Contact",     href: "/contact",  toast: true },
    { label: "Status",      href: "/status",   toast: false },
    { label: "Feedback",    href: "/feedback", toast: true },
  ],
  Legal: [
    { label: "Privacy Policy",    href: "/privacy",  toast: true },
    { label: "Terms of Service",  href: "/terms",    toast: true },
    { label: "Cookie Policy",     href: "/cookies",  toast: true },
    { label: "GDPR",              href: "/gdpr",     toast: true },
  ],
};

const socials = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="none" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top row */}
        <div className="grid md:grid-cols-[240px_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <BrandLogo
                size={36}
                glow={false}
                className="grayscale hover:grayscale-0 transition-[filter] duration-400"
              />
              <span className="font-semibold text-[15px] text-white tracking-tight">
                Commute<span className="text-[#3A7BFF]">Timely</span>
              </span>
            </div>
            <p className="text-sm text-[#E6EAF2]/40 leading-relaxed max-w-[200px] mb-3">
              The Arrival Intelligence platform that tells you exactly when to leave.
            </p>
            <a
              href="mailto:hello@commutetimely.com"
              className="text-xs text-[#3A7BFF]/70 hover:text-[#3A7BFF] transition-colors duration-200 mb-6 block"
            >
              hello@commutetimely.com
            </a>

            {/* Social */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                  {section}
                </div>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.toast ? (
                        <a
                          className="text-sm text-[#E6EAF2]/40 hover:text-[#E6EAF2]/80 transition-colors duration-200 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            toast("Coming Soon", {
                              description: `The ${link.label} portal is currently being optimized for our Q2 2026 expansion. Stay tuned.`,
                              duration: 4000,
                            });
                          }}
                        >
                          {link.label}
                        </a>
                      ) : link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#E6EAF2]/40 hover:text-[#E6EAF2]/80 transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      ) : link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm text-[#E6EAF2]/40 hover:text-[#E6EAF2]/80 transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-[#E6EAF2]/40 hover:text-[#E6EAF2]/80 transition-colors duration-200 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            const id = link.href.replace("#", "");
                            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <span>© 2026 CommuteTimely. All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse" />
            <span>All systems operational</span>
          </div>
          <span>Built with precision · Powered by ML</span>
        </div>
      </div>
    </footer>
  );
}
