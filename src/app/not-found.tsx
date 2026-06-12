"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 blueprint-pattern opacity-30" />
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-display font-bold text-gold/20 text-[180px] leading-none select-none mb-4">
            404
          </div>
          <h1 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
            Page Not Found
          </h1>
          <p className="text-white/80 text-base max-w-md mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on solid ground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 group"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-gold/50 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              <ArrowLeft size={16} />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
