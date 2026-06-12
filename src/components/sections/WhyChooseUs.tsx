"use client";

import { motion } from "framer-motion";
import { HardHat, Shield, Clock, FileText, Handshake, Building } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: HardHat,
    title: "Experienced Team",
    body: "Over 20 years in the field means we've handled every challenge construction can throw at us. Our engineers, architects, and site managers bring unmatched expertise to every project — from the first brick to the final finish.",
  },
  {
    icon: Shield,
    title: "Premium Quality Materials",
    body: "We source only certified, grade-A materials — Fe-500 TMT steel, 53-grade OPC cement, ISI-marked bricks — ensuring your structure is built to last not just your lifetime, but your children's too.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    body: "We respect your timeline as much as your budget. Our structured project management process, milestone tracking, and experienced site supervisors ensure every project is delivered on schedule — without compromise.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    body: "No hidden charges. No last-minute surprises. We provide a detailed cost breakdown at project initiation so you always know exactly where your money is going — at every stage.",
  },
  {
    icon: Handshake,
    title: "Customer-First Approach",
    body: "From the first consultation to final handover, we keep you informed, involved, and satisfied at every stage. Our clients aren't just project numbers — they're the reason we show up every day.",
  },
  {
    icon: Building,
    title: "End-to-End Solutions",
    body: "From architectural design and civil works to interior finishes and project management — we handle every aspect under one roof, so you never have to coordinate with multiple vendors.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Trust M/S Deepak Goel"
          subtitle="Two decades of delivering structures that stand the test of time."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-gold/30 hover:shadow-card-hover transition-all duration-400 relative overflow-hidden"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/8 to-transparent rounded-bl-3xl" />

              <div className="w-12 h-12 rounded-2xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={22} className="text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-navy text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>

              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
