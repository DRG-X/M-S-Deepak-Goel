"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, MapPin, Calculator, Layout, HardHat, Shield, Key, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { icon: MessageSquare, label: "Consultation", desc: "Listen & understand your vision" },
  { icon: MapPin, label: "Site Visit", desc: "Engineer evaluates soil & feasibility" },
  { icon: Calculator, label: "Estimation", desc: "Detailed plan & transparent costs" },
  { icon: Layout, label: "Design", desc: "Blueprints & 3D renders approved" },
  { icon: HardHat, label: "Construction", desc: "Grade-A materials, skilled teams" },
  { icon: Shield, label: "Quality Checks", desc: "Milestone-based inspections" },
  { icon: Key, label: "Handover", desc: "On-time delivery with warranty" },
];

export default function ProcessSummary() {
  return (
    <section className="section-py bg-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="How We Work"
          title="A Clear, Structured Process"
          subtitle="From your vision to your keys — every step defined, transparent, and managed with care."
        />

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[38px] left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {steps.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number + Icon */}
                <div className="relative mb-5">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-white border-2 border-gray-100 group-hover:border-gold/50 flex items-center justify-center shadow-sm group-hover:shadow-gold transition-all duration-400">
                    <Icon size={26} className="text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {i + 1}
                  </div>
                </div>

                <h4 className="font-semibold text-navy text-sm mb-1 group-hover:text-gold transition-colors duration-300">
                  {label}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-300 group"
          >
            See Our Full Process in Detail
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
