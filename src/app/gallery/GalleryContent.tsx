"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Residential", "Commercial", "Interiors", "Construction", "Renovation"];

const galleryImages = [
  { id: 1, src: "https://imgs.search.brave.com/JVQcOSUofcaifpzXYt2HtBl0qiMyjVIFQ8SpD7AoO5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYmFubmVyYmVh/ci5jb20vZGlyZWN0/LzRtR3BXM3p3cGcw/WkswQXhRdy9yZXF1/ZXN0cy8wMDAvMDY4/LzI3NS8xNjgvRHFS/MnYxa05hWU1Bbm9l/dlk4ZXBack9XUC8z/Zjg0OGFiZjQzNTBh/ZTNjNTk2N2IzMDJh/NWI3ZjIxZGMzNGUx/ZGNmLmpwZw", alt: "Luxury Villa Exterior — Swaroop Nagar", cat: "Residential", tall: true },
  { id: 2, src: "https://imgs.search.brave.com/Lp7gi6_wqEukyycN92mZHQ93bTDNPq-IKNSFzO6SjSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzIv/NDg4ODAwODYxL1BM/L0lPL05aLzIzNDgw/MDY2OC9yMjE1bC1o/eWRyYXVsaWMtZXhj/YXZhdG9yLTUwMHg1/MDAuanBn", alt: "Modern Kitchen Interior", cat: "Interiors", tall: false },
  { id: 3, src: "https://imgs.search.brave.com/sfgxLd976Ka9SpH54qJLHNwUzHJ2blnMl65a4JDSx-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80Lmlt/aW1nLmNvbS9kYXRh/NC9QSS9ESC9JT1Mt/Mzg2MTA3My9wcm9k/dWN0LTI1MHgyNTAu/anBlZw", alt: "Commercial Complex — Civil Lines", cat: "Commercial", tall: false },
  { id: 4, src: "https://imgs.search.brave.com/CuvhxohuqW7uzaWFV7vpvrDh7r5mWiGP1HGkBMpWa_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIyLzUv/U1gvWEovS04vMTQ3/NjY0NjUvYnV5LWpj/Yi1leGNhdmF0b3It/MjUweDI1MC5qcGc", alt: "Foundation Work — Industrial Site", cat: "Construction", tall: true },
  { id: 5, src: "https://imgs.search.brave.com/dCu198jfpzpyX4MSCJM5K8OW5Si1sVKmgmVOPVNSDMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZWl0/aGVsZWN0cm9uaWNz/LmluL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI2LzAzL2Z1amlr/dXJhXzcycy0zMDB4/MzAwLnBuZw", alt: "Premium Office Interior", cat: "Interiors", tall: false },
  { id: 6, src: "https://imgs.search.brave.com/E3kN7JKGbTX2PgRoytjkzd2_58urt4GGGIjhs5mzwKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzIv/NDg5NDI3OTMyL1ha/L0xEL0pSLzExMjkz/MzYvY29tcGxldGUt/bWFjaGluZS1oeWRy/YXVsaWMtYnV0dC1m/dXNpb24tMjUweDI1/MC5qcGc", alt: "Independent Villa — Kidwai Nagar", cat: "Residential", tall: false },
  { id: 7, src: "https://imgs.search.brave.com/QYUvaLqiK2nQTbfIo4Hf6s7tn1Xbwqn0JReVOk8QPRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM2R1/MWt4aWV5ZDFucC5j/bG91ZGZyb250Lm5l/dC9hc3NldHMvYmxv/Zy9ydWRyYV9jaGFp/bl90cmVuY2hlcl9i/bG9nLmpwZw", alt: "Home Renovation — Govind Nagar", cat: "Renovation", tall: true },
  { id: 8, src: "https://imgs.search.brave.com/kIKbHmNrW4dWoliLenygGux2sGDNCjzW7RwW9jNdIlc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU0/NTAwMjIwMi9waG90/by9wb3J0YWJsZS1k/aWVzZWwtZ2VuZXJh/dG9yLWFjLWF0LXRo/ZS1zaG93cm9vbS1v/Zi1hLWxhcmdlLXN0/b3JlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz02SmE1ZUVi/SUJLZllDaEtONS1y/Y0RyelFTSk5jTXBF/M3Z6dFlIdWRieWww/PQ", alt: "Multi-Storey Commercial Tower", cat: "Commercial", tall: false },
  { id: 9, src: "https://imgs.search.brave.com/6Gfz2w7AnMb3eipPb8zCxvWPxUb7eGH6QtTrJB2kihA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/NzkzMTg2OS9waG90/by93b21hbi1kaWdn/aW5nLWEtc2V3ZXIt/dHJlbmNoLWluLXRo/ZS1zdHJlZXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW8t/WE50YkJKaGk2T29I/MUo0OGN6MFFuVjNM/RklBQkF5MW00Um13/MnNVdVk9", alt: "Corporate Office Fit-Out", cat: "Interiors", tall: false },
  { id: 10, src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", alt: "Construction Site Progress", cat: "Construction", tall: true },
  { id: 11, src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", alt: "Bedroom Interior Design", cat: "Interiors", tall: false },
  { id: 12, src: "https://imgs.search.brave.com/dCigYQDLt4dSW0dXrqtjuG-TY5W8LGda95laznPwtew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXIt/Y2Fycmllci10cnVj/ay1kZWxpdmVyLW5l/dy1hdXRvLWJhdGNo/LXRvLWRlYWxlci0z/NzAzMDI4LmpwZw", alt: "Luxury Villa Entrance", cat: "Residential", tall: false },
  { id: 13, src: "https://imgs.search.brave.com/CYcafXI7LYFW00jlsZULdW2NAlYIj_uWaXbAZuhwRbw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/NjE2LzM2My9zbWFs/bC90aGVyZS1pcy1h/LWxvdC1vZi1zYW5k/LW9uLXRoZS1jb25z/dHJ1Y3Rpb24tc2l0/ZS1hLW1vYXQtd2Fz/LWR1Zy1mb3Itc2V3/ZXJhZ2UtY3JlYXRp/b24tb2YtZHJhaW5z/LXRvLWRyYWluLXdh/dGVyLXVuZGVyZ3Jv/dW5kLWdyb3VuZHdh/dGVyLXRyZWF0bWVu/dC1jYXJlLWZvci10/aGUtZW52aXJvbm1l/bnQtcGhvdG8uanBn", alt: "Swimming Pool & Terrace", cat: "Residential", tall: true },
  { id: 14, src: "https://imgs.search.brave.com/1M3K9MaUXdZtk52T2QIB9xppKGfo0Qu83kvijOmo-w0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUw/MDQ2MjY0NS9waG90/by90d28td29ya2Vy/cy1sYXlpbmctaW50/ZXJuZXQtY2FibGUt/aW4tcmVzaWRlbnRp/YWwtYXJlYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dWJD/NnZmNVBFV3NCXzNT/d2xTb0RCWkI2a2ZE/QzZRbjc3T1pYb0Jp/UGN5ND0", alt: "Living Room Transformation", cat: "Renovation", tall: false },
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
