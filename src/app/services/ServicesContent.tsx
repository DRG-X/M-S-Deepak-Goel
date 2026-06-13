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
    title: "Telecom & Optical Fiber Infrastructure",
    tagline: "Your Work, Done Right",
    image: "https://imgs.search.brave.com/eaLnnWc8trwEdQgw3ic0DMVFvvH9F1XGZPzpDgai7u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTY4NDU2L3Bob3Rv/L2JsdWUtbmV0d29y/ay1jYWJsZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUNu/ZmF0OGxpQ2E2RHJD/RmhRSzFCenczazBE/bUlYclFyZVlsSEx3/T2RXSG89",
    description:
      "We possess extensive expertise in the deployment of Optical Fiber Cable (OFC) networks, delivering end-to-end infrastructure solutions with a focus on quality, efficiency, and timely execution.",
    features: [
      "OFC network deployment and installation",
      "HDD-based underground OFC construction",
      "Underground and aerial OFC laying works",
      "HDPE duct laying and route preparation",
      "Cable pulling and cable blowing operations",
      "Trenching and excavation works",
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
    title: "Metro Rail & Urban Infrastructure",
    tagline: "Transform Your Existing Space",
    image: "https://imgs.search.brave.com/QD31_l8bphXQqKGbXO332wbNOBxbHlzwdZe9kB1XzIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzkxLzM2LzEw/LzM2MF9GXzc5MTM2/MTAzOV9yb3Y0ZWF2/UzVZRHlFV0F0NTRU/ejRGVGoyaEdmZkNT/Vi5qcGc",
    description:
      "We actively contribute to metro rail and urban infrastructure development through specialized civil and utility works, supporting station, depot, and track-related projects.",
    features: [
      "Track laying support works",
      "Utility shifting and diversion activities",
      "Cable route development and infrastructure support",
      "Civil construction and structural works",
      "RCC/PCC foundations and concrete works",
      "Trenching and reinstatement works",
    ],
    deliverables: "Renovation timelines 3–8 months typically",
  },
  {
    id: "interior",
    title: "Plant & Equipment Strength",
    tagline: "Spaces That Reflect You",
    image: "https://imgs.search.brave.com/hfOSFd_bn2aXfJ284OgA7X2IHd575lpIgmsaB6RB4Do/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmgtcGxhbnRoaXJl/LmNvLnphL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzAxL1JI/LVBsYW50LUhpcmUt/RXhjYXZ0b3ItU2lk/ZS1WaWV3LmpwZw",
    description:
      "Our in-house fleet of modern machinery and specialized equipment enables self-sufficient execution of projects while ensuring productivity, reliability, and operational efficiency.",
    features: [
      "HDD rigs for trenchless construction",
      "Hydraulic excavators and earth-moving machinery",
      "JCB backhoe loaders",
      "Hydraulic earth breakers",
      "Tippers and transportation vehicles",
      "Air compressors and vibratory compactors",
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
