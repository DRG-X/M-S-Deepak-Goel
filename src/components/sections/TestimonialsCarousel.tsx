"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner",
    location: "Kidwai Nagar, Kanpur",
    project: "G+2 Independent Villa",
    quote:
      "M/S Deepak Goel completed my home in just 11 months — exactly as promised. The quality of materials and the finishing are exceptional. I've already referred three neighbours to them.",
    stars: 5,
    avatar: "RS",
  },
  {
    name: "Priya Agarwal",
    role: "Business Owner",
    location: "Civil Lines, Kanpur",
    project: "Commercial Showroom (Turnkey)",
    quote:
      "I was initially skeptical about giving a complete turnkey project to one team. But Deepak Ji and his team handled everything — from government approvals to the final coat of paint — without a single hiccup. Zero stress.",
    stars: 5,
    avatar: "PA",
  },
  {
    name: "Amit Verma",
    role: "Property Developer",
    location: "Kanpur",
    project: "2 Commercial Complexes",
    quote:
      "We've done two commercial projects with M/S Deepak Goel and both were delivered on time and within budget. Their transparency in pricing is something you rarely see in this industry.",
    stars: 5,
    avatar: "AV",
  },
  {
    name: "Sunita Gupta",
    role: "Homeowner",
    location: "Armapur Estate, Kanpur",
    project: "Full Home Renovation",
    quote:
      "The renovation of our 30-year-old family home was handled with such care and expertise. They preserved the character we loved while completely modernizing everything else. Outstanding.",
    stars: 5,
    avatar: "SG",
  },
  {
    name: "Rohit Srivastava",
    role: "Factory Owner",
    location: "Panki Industrial Area, Kanpur",
    project: "Manufacturing Facility",
    quote:
      "They built our entire manufacturing facility on time and 4% under budget — which is honestly unheard of in this industry. The site project manager was remarkably responsive.",
    stars: 5,
    avatar: "RS",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (i: number, dir: number) => {
    setDirection(dir);
    setCurrent(i);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  const next = () => goTo((current + 1) % testimonials.length, 1);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section className="section-py bg-navy relative overflow-hidden">
      <div className="absolute inset-0 blueprint-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="450+ families and businesses have trusted us with their most important projects."
          light
        />

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass rounded-3xl p-7 flex flex-col transition-all duration-500 ${
                i === 1
                  ? "border-gold/30 shadow-gold scale-105"
                  : "border-white/10 opacity-80"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <Quote size={20} className="text-gold/60" />
              </div>
              {/* Quote text: raised from /75 to /95 on dark glass bg */}
              <p className="text-white/95 text-sm leading-relaxed italic mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/15 pt-5">
                <div className="w-10 h-10 rounded-full bg-gold/25 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  {/* Raised from implicit low to /75 */}
                  <div className="text-gold/80 text-xs">{t.role} — {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-7 border border-white/15"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/95 text-sm leading-relaxed italic mb-6">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/15 pt-5">
                <div className="w-10 h-10 rounded-full bg-gold/25 border border-gold/40 flex items-center justify-center">
                  <span className="text-gold text-xs font-bold">{testimonials[current].avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonials[current].name}</div>
                  <div className="text-gold/80 text-xs">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/25 hover:border-gold/60 flex items-center justify-center text-white/80 hover:text-gold transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === current ? "w-8 bg-gold" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/25 hover:border-gold/60 flex items-center justify-center text-white/80 hover:text-gold transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
