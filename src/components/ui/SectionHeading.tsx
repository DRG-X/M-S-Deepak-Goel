"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "mb-14",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="h-px w-8 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2
        className={cn(
          "font-display font-bold leading-tight mb-4",
          "text-3xl md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            /* Raised from /60 to /80 on dark; light sections use solid white bg so gray-500 is fine */
            light ? "text-white/80" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
