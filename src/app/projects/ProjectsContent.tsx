"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Square, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Residential", "Commercial", "Turnkey", "Renovation", "Industrial"];

const projects = [
  {
    id: 1, title: "Kanpur Metro", location: "Kanpur",
    type: "Civil", area: "4,200 sq. ft.", year: "2023", duration: "14 months",
    description: "A landmark urban infrastructure project contributing to the transformation of Kanpur's transportation network. M/S Deepak Goel Construction played a key role in delivering high-quality civil works with a strong focus on safety, precision, and timely execution, supporting the city's vision for modern and sustainable mobility.",
    image: "https://imgs.search.brave.com/DegBDJ2DBFbKAHrNy2zBIJS_pTtTYazQqKpuDnvKF3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg1L0xhdXR0YXNh/YXJlbl9tZXRyb2Fz/ZW1hXzIuanBn",
  },
  {
    id: 2, title: "BSNL", location: "Kanpur",
    type: "Commercial", area: "", year: "", duration: "",
    description: "Telecommunications infrastructure project involving the construction of a modern office and network facility, designed to support reliable communication services with robust engineering, safety, and operational efficiency.",
    image: "https://imgs.search.brave.com/IftN08I1MYky8L2vcx0LpKjDs-fzUje_RKsv5J4PWis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZm9uZWFyZW5h/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEw/L0JTTkwtbmV3LWxv/Z28tMS0xMDI0eDUx/MC5qcGc",
  },
  {
    id: 3, title: "HAL", location: " Kanpur",
    type: "Turnkey", area: "8,500 sq. ft.", year: "2023", duration: "12 months",
    description: "Specialized infrastructure project for India's leading aerospace and defense organization, featuring high-security construction, precision engineering, and facilities designed to meet stringent industrial and operational standards.",
    image: "https://imgs.search.brave.com/sQm6RD5hvLLmad6Ik4WKMjcZbUCLqmCRZaZ4ZjyU-Pk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5wbmdhYWEuY29t/LzM3OS8zOTE2Mzc5/LW1pZGRsZS5wbmc",
  },
  {
    id: 4, title: "PWD ", location: "Kanpur",
    type: "Residential", area: "3,200 sq. ft.", year: "2022", duration: "11 months",
    description: "Government infrastructure project focused on the construction and modernization of public facilities, executed with strict adherence to quality standards, safety regulations, and timely project delivery.",
    image: "https://imgs.search.brave.com/wySFpsftwsOg1wsOROmWSXVIKUeISv9EhHY16tfLFwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wd2Qt/bG9nby1wd2QtbGV0/dGVyLXB3ZC1sZXR0/ZXItbG9nby1kZXNp/Z24taW5pdGlhbHMt/cHdkLWxvZ28tbGlu/a2VkLWNpcmNsZS11/cHBlcmNhc2UtbW9u/b2dyYW0tbG9nby1w/d2QtdHlwb2dyYXBo/eS0zOTQ3NjM2NzAu/anBn",
  },
  {
    id: 5, title: "NUPPL ", location: "Panki Industrial Area, Kanpur",
    type: "Industrial", area: "22,000 sq. ft.", year: "2023", duration: "8 months",
    description: "Industrial infrastructure development featuring a large-scale manufacturing and warehouse facility with advanced structural engineering, optimized logistics planning, and durable construction for high-performance operations.",
    image: "https://imgs.search.brave.com/ZN6vn7Y_H9OHBUTgSGixyIado8rGLweEwVC7uFVzWdk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/My8zMi9pbml0aWFs/LWxldHRlci1ucC1j/cmVhdGl2ZS1zd29v/c2gtZGVzaWduLWxv/Z28tdmVjdG9yLTI4/MzMwMzMyLmpwZw",
  },
  {
    id: 6, title: "Reliance", location: "Govind Nagar, Kanpur",
    type: "Renovation", area: "2,200 sq. ft.", year: "2023", duration: "5 months",
    description: "Infrastructure development for Reliance Industries, delivering high-quality industrial and commercial facilities with a focus on safety, engineering excellence, and timely project execution.",
    image: "https://imgs.search.brave.com/CRfKQe-VOIDu9xjdh6ehVpf3e_a1Z_PyVmFcwKFTFU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y1L2U1/L2ZmL2Y1ZTVmZjA3/NzUyOWVlYjcwNWMy/MjYwNGQ2YTBhMzFi/LmpwZw",
  },

];

export default function ProjectsContent() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects That Speak for Themselves"
        subtitle="500+ completed projects across Kanpur and Uttar Pradesh — each one a story of precision, trust, and on-time delivery."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Completed Projects"
            subtitle="Browse by category or view the full portfolio."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? "bg-navy text-white shadow-navy"
                    : "border border-gray-200 text-gray-500 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl border border-gray-100 hover:border-gold/20 transition-all duration-500 flex flex-col"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-bold rounded-full">
                      {project.type}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 glass text-white text-xs font-semibold rounded-full text-shadow-sm">
                      {project.year}
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="font-display font-bold text-navy text-xl mb-1 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-3">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1.5 text-xs text-navy/60">
                        <Square size={11} className="text-gold" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-navy/60">
                        <Calendar size={11} className="text-gold" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      <CTASection
        heading="Your Project Could Be Next"
        subheading="Join 450+ satisfied clients who trusted M/S Deepak Goel with their most important construction projects."
      />
    </>
  );
}
