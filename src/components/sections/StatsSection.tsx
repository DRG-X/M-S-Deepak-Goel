"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", sublabel: "Across Kanpur & UP" },
  { value: 20, suffix: "+", label: "Years of Experience", sublabel: "Since 2004" },
  { value: 450, suffix: "+", label: "Happy Clients", sublabel: "& Counting" },
  { value: 80, suffix: "+", label: "Team Members", sublabel: "Skilled Professionals" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface StatsSectionProps {
  dark?: boolean;
}

export default function StatsSection({ dark = true }: StatsSectionProps) {
  return (
    <section className={`py-16 relative overflow-hidden ${dark ? "bg-navy" : "bg-gray-50"}`}>
      {dark && <div className="absolute inset-0 blueprint-pattern opacity-40" />}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-3xl p-6 lg:p-8 text-center ${
                dark
                  ? "glass border-white/10"
                  : "bg-white border border-gray-100 shadow-card"
              }`}
            >
              {dark && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
              <div className={`font-display font-bold text-4xl lg:text-5xl mb-2 ${dark ? "text-white" : "text-navy"}`}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={`font-semibold text-sm mb-1 ${dark ? "text-gold" : "text-gold"}`}>
                {stat.label}
              </div>
              {/* Raised from /40 to /65 — passes AA on navy glass */}
              <div className={`text-xs ${dark ? "text-white/65" : "text-gray-400"}`}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
