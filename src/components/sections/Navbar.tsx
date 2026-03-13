"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AppStoreBadge from "@/components/AppStoreBadge";
import BrandLogo from "@/components/BrandLogo";

const SPRING = { type: "spring" as const, stiffness: 120, damping: 20 };

/** Anchor links — smooth-scroll on /; navigate to homepage+anchor elsewhere */
const SECTION_LINKS = [
  { label: "Intelligence", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Infrastructure", href: "#infra" },
  { label: "Pricing", href: "#pricing" },
];

/** Full-route page links */
const ROUTE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Status", href: "/status" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent, anchor: string) => {
      e.preventDefault();
      const id = anchor.replace("#", "");
      if (pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/${anchor}`);
      }
    },
    [pathname, router]
  );

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        <motion.div
          className="max-w-6xl mx-auto flex items-center justify-between"
          style={{
            background: scrolled ? "rgba(2,6,23,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            border: scrolled ? "0.5px solid rgba(255,255,255,0.06)" : "0.5px solid transparent",
            borderRadius: 16,
            padding: "8px 20px",
            transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 select-none">
            <BrandLogo size={32} glow />
            <span className="font-bold text-sm text-white tracking-tight">CommuteTimely</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.label}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-1" />
            {ROUTE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors duration-200"
                style={{ color: isActive(link.href) ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <AppStoreBadge size="sm" />
            </div>
            <button
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-lg"
              style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)" }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-4 h-0.5 bg-white/70 rounded-full block"
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={SPRING}
              />
              <motion.span
                className="w-4 h-0.5 bg-white/70 rounded-full block"
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={SPRING}
              />
              <motion.span
                className="w-4 h-0.5 bg-white/70 rounded-full block"
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={SPRING}
              />
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-x-6 top-20 z-40 rounded-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(2,6,23,0.95)",
              border: "0.5px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(24px)",
            }}
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={SPRING}
          >
            <div className="p-4 flex flex-col gap-1">
              {SECTION_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING, delay: i * 0.05 }}
                  onClick={(e) => { handleSectionClick(e, link.href); setMobileOpen(false); }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="h-px bg-white/5 my-1" />
              {ROUTE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: isActive(link.href) ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-1" />
              <div className="flex justify-center py-1">
                <AppStoreBadge size="md" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
