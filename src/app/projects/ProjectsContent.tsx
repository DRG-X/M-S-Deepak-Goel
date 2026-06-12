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
    id: 2, title: "Navkar Commercial Complex", location: "Civil Lines, Kanpur",
    type: "Commercial", area: "12,000 sq. ft.", year: "2022", duration: "18 months",
    description: "Modern 5-storey commercial structure with basement parking, high-speed elevators, retail ground floor, and integrated fire safety systems.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 3, title: "Aryan Office Park", location: "Kakadeo, Kanpur",
    type: "Turnkey", area: "8,500 sq. ft.", year: "2023", duration: "12 months",
    description: "Turnkey office development with open-plan workspaces, modular meeting rooms, server room, and premium client-facing reception.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 4, title: "Sharma Villa", location: "Kidwai Nagar, Kanpur",
    type: "Residential", area: "3,200 sq. ft.", year: "2022", duration: "11 months",
    description: "G+2 independent villa with Vastu-compliant layout, children's play terrace, and complete interior fit-out. Delivered 3 weeks early.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: 5, title: "Agarwal Exports Warehouse", location: "Panki Industrial Area, Kanpur",
    type: "Industrial", area: "22,000 sq. ft.", year: "2023", duration: "8 months",
    description: "Large industrial warehouse with loading docks and admin block. Delivered 2 weeks ahead of an already aggressive 8-month deadline.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 6, title: "Gupta Family Home Renovation", location: "Govind Nagar, Kanpur",
    type: "Renovation", area: "2,200 sq. ft.", year: "2023", duration: "5 months",
    description: "Complete renovation of a 30-year-old family home, completed in phases while family remained on-site. Preserved heritage while modernizing entirely.",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&q=80",
  },
  {
    id: 7, title: "TechFront HQ Office Interior", location: "Civil Lines, Kanpur",
    type: "Turnkey", area: "5,000 sq. ft.", year: "2023", duration: "90 days",
    description: "Complete office fit-out delivered within a strict 90-day window. Premium interior with collaborative workspaces, boardroom, and reception.",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80",
  },
  {
    id: 8, title: "Mishra Residence Interior", location: "Govind Nagar, Kanpur",
    type: "Residential", area: "1,800 sq. ft.", year: "2022", duration: "8 weeks",
    description: "Complete interior fit-out with modular kitchen, designer wardrobes, false ceilings, and ambient lighting. The modular kitchen became the talking point.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
  },
  {
    id: 9, title: "Verma Commercial Tower", location: "Kakadeo, Kanpur",
    type: "Commercial", area: "15,000 sq. ft.", year: "2021", duration: "20 months",
    description: "Multi-storey commercial tower with mixed-use retail and office floors. Structural RCC frame with premium glazed exterior.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80",
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
