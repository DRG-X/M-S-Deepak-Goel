"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Square } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    id: 1,
    title: "Kanpur Metro",
    location: "Kanpur",
    type: "Luxury Villa",
    area: "4,200 sq. ft.",
    duration: "14 months",
    year: "2023",
    description:
      "A landmark urban infrastructure project contributing to the transformation of Kanpur's transportation network. M/S Deepak Goel Construction played a key role in delivering high-quality civil works with a strong focus on safety, precision, and timely execution, supporting the city's vision for modern and sustainable mobility.",
    image: "https://imgs.search.brave.com/DegBDJ2DBFbKAHrNy2zBIJS_pTtTYazQqKpuDnvKF3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg1L0xhdXR0YXNh/YXJlbl9tZXRyb2Fz/ZW1hXzIuanBn",
    tag: "Residential",
  },
  {
    id: 2,
    title: "HAL",
    location: " Kanpur",
    type: "Commercial Building",
    area: "12,000 sq. ft.",
    duration: "18 months",
    year: "2022",
    description:
      "Specialized infrastructure project for India's leading aerospace and defense organization, featuring high-security construction, precision engineering, and facilities designed to meet stringent industrial and operational standards.",
    image: "https://imgs.search.brave.com/sQm6RD5hvLLmad6Ik4WKMjcZbUCLqmCRZaZ4ZjyU-Pk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5wbmdhYWEuY29t/LzM3OS8zOTE2Mzc5/LW1pZGRsZS5wbmc",
    tag: "Commercial",
  },
  {
    id: 3,
    title: "Reliance",
    location: "Kakadeo, Kanpur",
    type: "Office Complex (Turnkey)",
    area: "8,500 sq. ft.",
    duration: "12 months",
    year: "2023",
    description:
      "Infrastructure development for Reliance Industries, delivering high-quality industrial and commercial facilities with a focus on safety, engineering excellence, and timely project execution..",
    image: "https://imgs.search.brave.com/CRfKQe-VOIDu9xjdh6ehVpf3e_a1Z_PyVmFcwKFTFU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y1L2U1/L2ZmL2Y1ZTVmZjA3/NzUyOWVlYjcwNWMy/MjYwNGQ2YTBhMzFi/LmpwZw",
    tag: "Turnkey",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-py bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects That Speak for Themselves"
          subtitle="A glimpse into the structures we've built — and the lives we've shaped."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl border border-gray-100 hover:border-gold/20 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-bold rounded-full shadow-md">
                  {project.tag}
                </div>

                {/* Year */}
                <div className="absolute top-4 right-4 px-3 py-1 glass text-white text-xs font-semibold rounded-full text-shadow-sm">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 flex flex-col">
                <h3 className="font-display font-bold text-navy text-xl mb-1 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-4">
                  <MapPin size={13} />
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-1.5 text-xs text-navy/60">
                    <Square size={12} className="text-gold" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy/60">
                    <Calendar size={12} className="text-gold" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="ml-auto">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold hover:gap-2.5 transition-all duration-300"
                    >
                      View Details <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 group shadow-navy"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
