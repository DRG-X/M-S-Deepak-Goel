"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading = "Ready to Build Something Extraordinary?",
  subheading = "Your dream project is one conversation away. Get in touch with Kanpur's most trusted construction team today — no obligation, no pressure.",
  primaryCTA = "Request a Free Consultation",
  primaryHref = "/contact",
  secondaryCTA = "View Our Projects",
  secondaryHref = "/projects",
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Blueprint pattern */}
      <div className="absolute inset-0 blueprint-pattern opacity-30" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-gold/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Get Started Today</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            {heading}
          </h2>
          {/* Raised from /55 to /80 — solid dark background means this is fine */}
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-gold hover:shadow-xl hover:scale-105 group"
            >
              {primaryCTA}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-gold/60 text-white hover:text-gold font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
            >
              <Phone size={16} />
              {secondaryCTA}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
