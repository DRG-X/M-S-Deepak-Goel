"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "residential",
    title: "Residential Construction",
    tagline: "Your Dream Home, Built Right",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    description:
      "We specialize in constructing premium independent houses, villas, duplexes, and multi-storey residences across Kanpur. From compact homes for first-time builders to luxury villas with custom finishes, every project is treated with the same level of care, precision, and commitment to quality.",
    features: [
      "G+1 to G+4 independent houses and villas",
      "Custom architectural designs — any style, any layout",
      "Vastu-compliant floor planning",
      "Premium material specification (Fe-500 TMT, 53-grade cement)",
      "Modular interior fit-out options",
      "Complete handover with warranty documentation",
    ],
    deliverables: "Turnkey residential projects delivered 9–18 months",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    tagline: "Structures That Drive Business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    description:
      "From multi-storey office complexes to retail showrooms and industrial warehouses, we bring the same level of engineering precision and quality control to every commercial project. Our commercial builds are designed for performance, aesthetics, and long-term structural integrity.",
    features: [
      "Office complexes, commercial towers, and showrooms",
      "Industrial warehouses and manufacturing facilities",
      "Fire safety integration and MEP engineering",
      "Basement parking, high-speed elevators, structural steel",
      "CCTV, access control, and smart building provisions",
      "Government approval and NOC assistance",
    ],
    deliverables: "Commercial projects typically 12–24 months",
  },
  {
    id: "turnkey",
    title: "Turnkey Projects",
    tagline: "One Contract. One Team. Complete Delivery.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    description:
      "Our complete turnkey service covers every phase from land assessment and architectural design to final interior finishing and handover documentation — all under a single contract, with one project manager, and full accountability from day one.",
    features: [
      "Single-contract responsibility from concept to handover",
      "Architectural design, structural engineering, MEP",
      "All government approvals and municipal sanctions",
      "Complete construction and civil works",
      "Interior fit-out and finishing",
      "Post-handover documentation and warranty",
    ],
    deliverables: "End-to-end delivery on agreed milestones",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    tagline: "Transform Your Existing Space",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=900&q=80",
    description:
      "Whether it's a decade-old family home or an aging commercial space, our renovation team combines structural expertise with modern design sensibility to transform existing structures with minimal disruption and maximum impact.",
    features: [
      "Full home and apartment renovation",
      "Structural reinforcement and floor addition",
      "Kitchen and bathroom remodeling",
      "External façade and landscaping upgrades",
      "Office and commercial space refurbishment",
      "Phased renovation while occupied",
    ],
    deliverables: "Renovation timelines 3–8 months typically",
  },
  {
    id: "interior",
    title: "Interior Design",
    tagline: "Spaces That Reflect You",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80",
    description:
      "Our interior design service transforms raw spaces into finished environments that are both beautiful and deeply functional. From modular kitchens and designer wardrobes to false ceilings and custom furniture, we execute every interior project with craftsmanship and attention to detail.",
    features: [
      "Modular kitchens with premium hardware",
      "Custom wardrobes and built-in storage",
      "False ceilings — POP, gypsum, wooden",
      "Ambient, task, and accent lighting design",
      "Bathroom tile and fixture selection",
      "Custom furniture and joinery",
    ],
    deliverables: "Interior fit-outs 6–12 weeks",
  },
  {
    id: "civil",
    title: "Civil Works",
    tagline: "Engineering Precision at Every Layer",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    description:
      "Strong structures begin below ground. Our civil works division handles RCC framework construction, deep foundation work, boundary walls, compound development, road construction, and all infrastructure-level civil engineering for both residential and commercial sites.",
    features: [
      "RCC framework and column-beam construction",
      "Foundation work — raft, pile, strip foundation",
      "Boundary walls and compound development",
      "Road construction and site development",
      "Drainage and plumbing civil works",
      "Structural repair and reinforcement",
    ],
    deliverables: "Civil works timelines as per project scope",
  },
];

export default function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Construction Services Under One Roof"
        subtitle="From residential villas to large commercial complexes — every service you need, delivered by one trusted team."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Detail */}
      <div className="bg-white">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-py ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl-navy img-zoom group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-1.5 bg-gold text-white text-xs font-bold rounded-full">
                        {service.deliverables}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">{service.tagline}</span>
                  </div>
                  <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-7">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 group shadow-navy"
                  >
                    Enquire About This Service
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <StatsSection />
      <CTASection
        heading="Ready to Start Your Project?"
        subheading="Tell us about your vision and we'll tell you exactly how we can make it real — with complete transparency on timeline and cost."
        primaryCTA="Get a Free Consultation"
        secondaryCTA="View Our Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
