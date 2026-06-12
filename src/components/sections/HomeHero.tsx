"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin, Award, Clock } from "lucide-react";

export default function HomeHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110 origin-top">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
          alt="M/S Deepak Goel Construction — Kanpur"
          className="w-full h-full object-cover"
        />
        {/* Stronger layered overlay: left-anchored dark, vertical vignette */}
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
      </div>

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-pattern opacity-15" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-gold/15 backdrop-blur-sm">
              <MapPin size={12} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Kanpur, Uttar Pradesh
              </span>
            </div>
            <div className="h-px w-12 bg-gold/50" />
            {/* Raised from /50 to /80 for legibility */}
            <span className="text-white/80 text-xs font-medium text-shadow-sm">Est. 2004</span>
          </motion.div>

          {/* Main Headline — text-shadow for image background */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-bold text-white mb-6 leading-[1.08] text-shadow-hero"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            Building India's{" "}
            <span className="text-gold-gradient">Skyline</span>{" "}
            for Over Two Decades
          </motion.h1>

          {/* Subheadline — raised from /65 to /90, plus text-shadow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl text-shadow-md"
          >
            From dream homes to landmark commercial spaces — M/S Deepak Goel delivers
            construction excellence with 20+ years of proven expertise, premium materials,
            and on-time delivery across Kanpur and Uttar Pradesh.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-4 rounded-full text-base transition-all duration-300 shadow-gold hover:shadow-xl hover:scale-105 group"
            >
              Get a Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white/70 text-white font-semibold px-7 py-4 rounded-full text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              <Play size={15} className="fill-white" />
              View Our Projects
            </Link>
          </motion.div>

          {/* Glassmorphism stats — stronger glass, better label contrast */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: Award, value: "500+", label: "Projects Delivered" },
              { icon: Clock, value: "20+", label: "Years of Excellence" },
              { icon: MapPin, value: "450+", label: "Happy Clients" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="glass rounded-2xl px-5 py-3 flex items-center gap-3"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-gold/25 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-gold" />
                </div>
                <div>
                  <div className="text-white font-display font-bold text-xl leading-none text-shadow-sm">{value}</div>
                  {/* Raised from /50 to /80 */}
                  <div className="text-white/80 text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* Raised from /30 to /60 */}
        <span className="text-white/60 text-xs tracking-widest uppercase text-shadow-sm">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
