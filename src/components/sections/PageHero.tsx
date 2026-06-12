"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Stronger overlay — was from-navy/80 via-navy/70 to-navy/85, now denser */}
        <div className="absolute inset-0 overlay-page-hero" />
        {/* Extra top darkening so logo area stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-28 pb-20 text-center">
        {/* Breadcrumbs — raised from /50 to /80 */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-white/80 mb-8 text-shadow-sm"
          >
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {/* Raised from /30 to /60 */}
                <ChevronRight size={14} className="text-white/60" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>
        )}

        {/* h1 — text-shadow for image background readability */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-shadow-hero"
        >
          {title}
        </motion.h1>

        {/* Subtitle — raised from /65 to /90, plus text-shadow */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 text-shadow-md"
          >
            {subtitle}
          </motion.p>
        )}

        {children}
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
