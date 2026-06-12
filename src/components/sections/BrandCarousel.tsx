"use client";

import { motion } from "framer-motion";

const brands = [
  "UltraTech Cement",
  "ACC Cement",
  "TATA Steel",
  "JSW Steel",
  "Kajaria Tiles",
  "Jaquar",
  "Havells",
  "Finolex Cables",
  "Asian Paints",
  "Berger Paints",
  "Pidilite",
  "Saint-Gobain",
];

export default function BrandCarousel() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-8 text-center">
        <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase">
          Premium Materials From Trusted Brands
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -50 + "%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap"
          style={{ width: "200%" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 py-3 border border-gray-100 rounded-full bg-gray-50 hover:border-gold/30 hover:bg-gold/5 transition-colors duration-300 group flex-shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
              <span className="text-navy/50 text-sm font-medium group-hover:text-navy transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
