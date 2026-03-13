"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
import BrandLogo from "@/components/BrandLogo";

type FooterLink = { label: string; href: string; toast: boolean; external?: boolean };
type SocialLink = { label: string; href: string; icon: React.ReactNode; external?: boolean };

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
    { label: "Privacy Policy",    href: "/privacy",  toast: false },
    { label: "Terms of Service",  href: "/terms",    toast: false },
    { label: "Cookie Policy",     href: "/cookies",  toast: true },
    { label: "GDPR",              href: "/gdpr",     toast: true },
  ],
};

const socials: SocialLink[] = [
  {
    label: "Twitter / X",
    href: "https://x.com/CommuteTimely",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/commutetimely/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/commutetimely/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="none" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/u9rvTaD5",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.317 4.3698A19.791 19.791 0 0 0 15.885 3c-.191.347-.403.811-.552 1.171a18.27 18.27 0 0 0-5.486 0 12.64 12.64 0 0 0-.56-1.171 19.736 19.736 0 0 0-4.438 1.372C1.533 9.324.635 14.222 1.084 19.051a19.9 19.9 0 0 0 5.993 3.037 14.27 14.27 0 0 0 1.285-2.089 12.955 12.955 0 0 1-2.024-.976c.17-.124.337-.256.498-.39 3.909 1.823 8.145 1.823 12.008 0 .163.134.33.266.498.39-.645.38-1.324.708-2.027.976.36.739.79 1.436 1.287 2.089a19.84 19.84 0 0 0 6-3.037c.53-5.6-.838-10.455-3.285-14.681zM8.02 16.75c-1.182 0-2.15-1.085-2.15-2.42 0-1.334.95-2.419 2.15-2.419 1.21 0 2.17 1.096 2.15 2.42 0 1.334-.95 2.419-2.15 2.419zm7.974 0c-1.182 0-2.15-1.085-2.15-2.42 0-1.334.95-2.419 2.15-2.419 1.21 0 2.17 1.096 2.15 2.42 0 1.334-.94 2.419-2.15 2.419z" />
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
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
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
