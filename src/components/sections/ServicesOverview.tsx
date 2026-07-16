"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "residential",
    title: "BSNL",
    body: "Independent houses, villas, duplexes, and multi-storey homes built with precision and genuine care for every family we serve.",
    image: "https://imgs.search.brave.com/sjan4AeO30ojnszK46Vtf50lmtj9N7to3nFee49PeOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWxm/Y2FyZS5ic25sLmNv/LmluL2ltYWdlcy9i/c25sX0xvZ28tTmV3/LnBuZw",
    size: "bento-lg",
    height: "h-[280px] md:h-full",
  },
  {
    id: "commercial",
    title: "HDD Work for Telecom Sector",
    body: "We have laid approximately 1500 km. of Telecom Ducts/OFC cable ranging from 2 to 8 ducts through trenchless method. We have been associated with the leading Telecom Operators of the country like BBNL,BSNL,HAL, UPMRC, Reliance.",
    image: "https://imgs.search.brave.com/R3816vpOVHPRTaSePKajoY59zMUzDOJnggtQvbfOjGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmVu/Y2hsZXNzdGVjaG5v/bG9neS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMTEv/U291dGgtQ291bnR5/LVdhdGVyLU1haW4t/SERELmpwZw",
    size: "bento-md",
    height: "h-[280px] md:h-full",
  },
  {
    id: "turnkey",
    title: "Laying in Rock Strata",
    body: "We are having machine with RATT for boring in rock strata. We have laid approximately 1000 KMs of Telecom Duct/ OFC cable in rock strata by HDD method. We have laid approximately 1000KMs.of Telecom Duct/OFC cable in rock strata by trenching.",
    image: "https://imgs.search.brave.com/geHlI2VwctYZzbXB2WmarobtF1Z1ePJfLZ9CWbUFVOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uYXR1/cmFsLXJvY2stc3Ry/YXRhLWZvcm1hdGlv/bi1zdGVlcC1jbGlm/Zi1uYXR1cmFsbHkt/d2FycGVkLWxheWVy/ZWQtbW91bnRhaW4t/cGFzcy1tZWlyaW5n/c3Bvb3J0LXNvdXRo/LWFmcmljYS0yNDY3/NjczNDkuanBn",
    size: "bento-sm",
    height: "h-[280px] md:h-full",
  },
  {
    id: "renovation",
    title: "Allied Work for Telecom Industry",
    body: "We have specialized expert team to execute allied works such as laying of cable and ducts by open trenching, Rehabilitation work, blowinland splicing etc. of Optical Fiber Cables. We have also under taken works of erection of manholes, Chambers, termination of cable andsupply Telecom Material in BSNL Department.",
    image: "https://imgs.search.brave.com/eA3ZxsijQhVDSMG1h7FC_GxR4nS2aptSHrtiIQZQBQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jOTcx/NjVlNi5kZWxpdmVy/eS5yb2NrZXRjZG4u/bWUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDkvVGVsZWNv/bS1pbmR1c3RyeS1v/dmVydmlldy1UZWFt/TGVhc2UtU2Vydmlj/ZXMuanBn",
    size: "bento-sm",
    height: "h-[280px] md:h-full",
  },
  {
    id: "interior",
    title: "Trenching Work for Telecom Sector",
    body: "Modular kitchens, designer wardrobes, false ceilings, accent lighting, and complete interior fit-outs that reflect your personality.",
    image: "https://imgs.search.brave.com/JVQcOSUofcaifpzXYt2HtBl0qiMyjVIFQ8SpD7AoO5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYmFubmVyYmVh/ci5jb20vZGlyZWN0/LzRtR3BXM3p3cGcw/WkswQXhRdy9yZXF1/ZXN0cy8wMDAvMDY4/LzI3NS8xNjgvRHFS/MnYxa05hWU1Bbm9l/dlk4ZXBack9XUC8z/Zjg0OGFiZjQzNTBh/ZTNjNTk2N2IzMDJh/NWI3ZjIxZGMzNGUx/ZGNmLmpwZw",
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
