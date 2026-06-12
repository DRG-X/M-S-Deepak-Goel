"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "residential",
    title: "Residential Construction",
    body: "Independent houses, villas, duplexes, and multi-storey homes built with precision and genuine care for every family we serve.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    size: "bento-lg",
    height: "h-[280px] md:h-full",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    body: "Offices, showrooms, warehouses, and commercial complexes built for performance, presence, and long-term value.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    size: "bento-md",
    height: "h-[280px] md:h-full",
  },
  {
    id: "turnkey",
    title: "Turnkey Projects",
    body: "Complete end-to-end delivery — from land to liveable space. Design, approvals, construction, and finishing under one contract.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    size: "bento-sm",
    height: "h-[280px] md:h-full",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    body: "Transform your existing space with structural renovations, modern upgrades, and professional makeovers — minimal disruption to your daily life.",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&q=80",
    size: "bento-sm",
    height: "h-[280px] md:h-full",
  },
  {
    id: "interior",
    title: "Interior Design",
    body: "Modular kitchens, designer wardrobes, false ceilings, accent lighting, and complete interior fit-outs that reflect your personality.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    size: "bento-md",
    height: "h-[280px] md:h-full",
  },
  {
    id: "civil",
    title: "Civil Works",
    body: "RCC structures, foundations, boundary walls, road construction, and site development executed with engineering precision.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    size: "bento-lg",
    height: "h-[280px] md:h-full",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-py bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="What We Build"
          subtitle="Comprehensive construction services for homes, businesses, and beyond."
        />

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`${service.size} ${service.height} relative group rounded-3xl overflow-hidden img-zoom cursor-pointer`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Strong always-on overlay — overlay-card-bottom guarantees legibility */}
              <div className="absolute inset-0 overlay-card-bottom" />

              {/* Stronger hover overlay added on top */}
              <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Gold top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Content — all text now has text-shadow for legibility */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                <h3 className="font-display font-semibold text-white text-xl mb-2 group-hover:text-gold transition-colors duration-300 text-shadow-md">
                  {service.title}
                </h3>
                {/* Body text: always white (fully opaque), revealed on hover — text-shadow added */}
                <p className="text-white text-sm leading-relaxed mb-4 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 text-shadow-sm opacity-0 group-hover:opacity-100">
                  {service.body}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-3 transition-all duration-300"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-navy hover:border-gold text-navy hover:text-gold font-semibold px-8 py-3.5 rounded-full transition-all duration-300 group"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
