"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Residential", "Commercial", "Interiors", "Construction", "Renovation"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Luxury Villa Exterior — Swaroop Nagar", cat: "Residential", tall: true },
  { id: 2, src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80", alt: "Modern Kitchen Interior", cat: "Interiors", tall: false },
  { id: 3, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "Commercial Complex — Civil Lines", cat: "Commercial", tall: false },
  { id: 4, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "Foundation Work — Industrial Site", cat: "Construction", tall: true },
  { id: 5, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Premium Office Interior", cat: "Interiors", tall: false },
  { id: 6, src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", alt: "Independent Villa — Kidwai Nagar", cat: "Residential", tall: false },
  { id: 7, src: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&q=80", alt: "Home Renovation — Govind Nagar", cat: "Renovation", tall: true },
  { id: 8, src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80", alt: "Multi-Storey Commercial Tower", cat: "Commercial", tall: false },
  { id: 9, src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80", alt: "Corporate Office Fit-Out", cat: "Interiors", tall: false },
  { id: 10, src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", alt: "Construction Site Progress", cat: "Construction", tall: true },
  { id: 11, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", alt: "Bedroom Interior Design", cat: "Interiors", tall: false },
  { id: 12, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Luxury Villa Entrance", cat: "Residential", tall: false },
  { id: 13, src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80", alt: "Swimming Pool & Terrace", cat: "Residential", tall: true },
  { id: 14, src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", alt: "Living Room Transformation", cat: "Renovation", tall: false },
  { id: 15, src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", alt: "Building Blueprint Review", cat: "Construction", tall: false },
  { id: 16, src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", alt: "Modern Showroom Interior", cat: "Commercial", tall: true },
  { id: 17, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Modular Kitchen Installation", cat: "Interiors", tall: false },
  { id: 18, src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", alt: "Commercial Building Construction", cat: "Construction", tall: false },
];

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.cat === activeFilter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const lightboxIndex = filtered.findIndex((img) => img.id === lightbox);
  const prevImage = () => {
    const prev = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[prev].id);
  };
  const nextImage = () => {
    const next = (lightboxIndex + 1) % filtered.length;
    setLightbox(filtered[next].id);
  };

  const currentImage = filtered[lightboxIndex];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Visual Journey Through Our Work"
        subtitle="From construction sites to completed spaces — every image tells a story of craft, precision, and pride."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Our Work in Pictures"
            subtitle="Browse through residential, commercial, and interior projects — each image is a promise delivered."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-navy text-white shadow-navy"
                    : "border border-gray-200 text-gray-500 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="masonry-grid">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="masonry-item group relative rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(img.id)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ height: img.tall ? "320px" : "220px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className="text-white text-sm font-medium text-shadow-sm">{img.alt}</p>
                    <span className="text-gold text-xs text-shadow-sm">{img.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold/50 hover:text-gold transition-all z-10"
              onClick={closeLightbox}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold/50 hover:text-gold transition-all z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src.replace("w=800", "w=1200")}
                alt={currentImage.alt}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="bg-navy/90 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
                <p className="text-white text-sm font-medium">{currentImage.alt}</p>
                <span className="text-gold text-xs font-semibold px-3 py-1 border border-gold/30 rounded-full">
                  {currentImage.cat}
                </span>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold/50 hover:text-gold transition-all z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        heading="Want to See More?"
        subheading="Schedule a site visit and see a live project in progress — or browse our full portfolio with our team in person."
        primaryCTA="Request a Consultation"
        secondaryCTA="View All Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
