"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const faqGroups = [
  {
    group: "About the Company",
    faqs: [
      { q: "How long has M/S Deepak Goel been in business?", a: "We have been serving clients in Kanpur and across Uttar Pradesh for over 20 years. Since founding, we have successfully delivered 500+ projects spanning residential homes, commercial complexes, industrial facilities, and interior fit-outs." },
      { q: "Are you licensed and registered?", a: "Yes. M/S Deepak Goel operates fully within all municipal and state construction regulations in Uttar Pradesh. We carry all required contractor certifications, are RERA-compliant in our residential project practices, and operate with comprehensive site insurance on all projects." },
      { q: "How many projects have you completed?", a: "We have completed over 500 projects across residential, commercial, industrial, renovation, and interior categories since our founding in 2004." },
      { q: "Do you have in-house engineers and architects?", a: "Yes. We maintain a full in-house team of civil engineers, structural engineers, and architects. We also engage specialist consultants for specific project requirements — MEP design, soil testing, and landscape architecture." },
      { q: "Who oversees my project day to day?", a: "Every project is assigned a dedicated project manager who is your single point of contact throughout construction. They are reachable directly — not through a call centre — and provide you with weekly updates." },
    ],
  },
  {
    group: "Residential Construction",
    faqs: [
      { q: "What is the construction cost per sq. ft. in Kanpur?", a: "Construction costs depend on specification level. As a general estimate: basic construction starts around ₹1,400–₹1,600 per sq. ft.; standard construction runs ₹1,700–₹2,000 per sq. ft.; premium and luxury construction ranges ₹2,000–₹2,800+ per sq. ft. We provide a detailed, itemized cost estimate after your site visit and requirements discussion." },
      { q: "How long does it take to build a house?", a: "A standard independent house of 2,000–3,000 sq. ft. typically takes 10–14 months from construction commencement. Larger projects or projects with complex designs may take longer. Your project proposal will include a specific, milestone-based timeline." },
      { q: "Do you handle government approvals and building permits?", a: "Yes. We assist with all municipal approvals — building plan sanction from Kanpur Nagar Nigam, NOC from relevant departments, and any other statutory clearances required for your specific project type." },
      { q: "What materials do you use as standard?", a: "Our standard specification includes 53-grade OPC cement (Ultratech or ACC), Fe-500 TMT steel bars, ISI-marked machine-made bricks, RMC or site-mixed concrete with tested aggregates, and premium tiles and sanitary fittings from established brands. Upgrade options are available and clearly costed." },
      { q: "Can I customize my home design?", a: "Absolutely. Every residential project begins with your brief. Our architects design around your plot dimensions, lifestyle requirements, Vastu preferences, and budget. Customization is not an exception — it is our standard approach." },
      { q: "Do you offer Vastu Shastra-compliant designs?", a: "Yes. Vastu compliance is available as an integrated design parameter. Our architects are experienced in balancing Vastu principles with modern design requirements and structural constraints." },
      { q: "Can you build on a small plot — less than 1,000 sq. ft.?", a: "Yes. We have extensive experience with compact residential projects. Smart planning on small plots is a design specialty — maximizing liveable area within tight footprints is something we do well." },
    ],
  },
  {
    group: "Turnkey & Commercial Projects",
    faqs: [
      { q: "What is a turnkey project?", a: "A turnkey project is a single-contract delivery where M/S Deepak Goel takes responsibility for every phase — from architectural design and government approvals through to construction, finishing, and handover. You deal with one team, one contract, and one point of accountability throughout." },
      { q: "Do you take on large commercial construction projects?", a: "Yes. We have experience with multi-storey commercial complexes, retail showrooms, warehouses, manufacturing facilities, and office parks. Our largest completed projects exceed 20,000 sq. ft. Project-specific feasibility discussions are always welcome." },
      { q: "Can you assist with commercial building approvals?", a: "Yes. We handle all government sanctioning, fire NOC applications, structural engineer certifications, and occupancy documentation for commercial projects in Kanpur and across Uttar Pradesh." },
    ],
  },
  {
    group: "Renovation & Interior Design",
    faqs: [
      { q: "Can I live in my home during renovation?", a: "Yes, in most cases. We plan renovations in phases specifically to minimize disruption and allow occupancy throughout. The feasibility depends on the scope — we assess this during the site visit and plan accordingly." },
      { q: "How much does a home renovation cost in Kanpur?", a: "Renovation costs vary significantly based on scope, existing structure condition, and specification level. Basic renovation work (replastering, painting, tiling) typically starts at ₹600–₹900 per sq. ft. Full structural and interior renovation ranges from ₹1,200–₹2,000+ per sq. ft. A site visit and detailed scoping is essential for accurate costing." },
      { q: "Do you offer modular kitchen installation?", a: "Yes. Our interior design team offers complete modular kitchen solutions — from design and material selection through to installation and finishing. We work with established brands and custom joinery solutions." },
    ],
  },
  {
    group: "Payments, Contracts & Warranty",
    faqs: [
      { q: "How does the payment structure work?", a: "We operate on a milestone-based payment system. Payments are made in stages tied to verified, visible progress on site — not as a lump sum upfront. The payment schedule is agreed and documented in your project contract before work begins." },
      { q: "Do you provide a written contract?", a: "Yes, every project — regardless of size — begins with a detailed written agreement covering scope of work, material specifications, timeline and milestones, delay penalty clauses, payment schedule, warranty terms, and dispute resolution provisions." },
      { q: "Is there a warranty on the construction work?", a: "Yes. We provide a 1-year structural defect warranty on all construction projects, with a dedicated support contact for any post-handover concerns. Specific warranty terms for fixtures, fittings, and appliances are covered by the respective manufacturer warranties." },
      { q: "What happens if the project is delayed?", a: "Delay penalty provisions are included in every project contract. The contract specifies the penalty structure for project delays that are within our control. We also have a strong track record of on-time delivery — which is a condition our clients consistently highlight in their feedback." },
    ],
  },
  {
    group: "Getting Started",
    faqs: [
      { q: "How do I begin a project with M/S Deepak Goel?", a: "The first step is a free consultation — at our office, your plot, or via video call. You share your vision, budget range, and timeline. We listen, ask the right questions, and provide an honest assessment. There's no commitment or pressure at this stage." },
      { q: "What should I prepare before the first consultation?", a: "If you have them: plot ownership documents, any sketches or inspiration images you've collected, an approximate budget figure, and your preferred timeline. If you don't have these yet, that's completely fine — we've helped clients start from scratch many times." },
      { q: "Do you work outside of Kanpur?", a: "Our primary service area is Kanpur and the surrounding districts of Uttar Pradesh. For large-scale projects in other UP cities, we evaluate feasibility on a case-by-case basis. Contact us with your project details and location for a direct assessment." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-gray-100 last:border-0 transition-colors duration-300 ${open ? "bg-gold/3" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 px-2 text-left group"
      >
        <span className={`font-medium text-base leading-snug transition-colors duration-300 ${open ? "text-gold" : "text-navy group-hover:text-gold"}`}>
          {q}
        </span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${open ? "bg-gold text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gold/10 group-hover:text-gold"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-2 pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQContent() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Got Questions? We Have Clear Answers."
        subtitle="We believe informed clients make better decisions — and we're always happy to explain everything in plain, honest language. No jargon. No deflection."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Common Questions"
            title="Everything You Need to Know"
            subtitle="30+ questions answered — from costs and timelines to contracts and warranties."
          />

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            {/* Sidebar nav */}
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Jump to section</p>
                {faqGroups.map((group) => (
                  <a
                    key={group.group}
                    href={`#${group.group.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block py-2 px-3 text-sm text-navy/60 hover:text-gold hover:bg-gold/5 rounded-lg transition-all duration-200"
                  >
                    {group.group}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-12">
              {faqGroups.map((group, gi) => (
                <motion.div
                  key={group.group}
                  id={group.group.replace(/\s+/g, "-").toLowerCase()}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: gi * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-6 bg-gold" />
                    <h2 className="font-display font-bold text-navy text-xl">{group.group}</h2>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden px-4">
                    {group.faqs.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Still Have Questions?"
        subheading="Our team is happy to answer anything not covered here — directly and without pressure. Call us, email us, or schedule a free consultation."
        primaryCTA="Schedule a Free Call"
        secondaryCTA="View Our Process"
        secondaryHref="/process"
      />
    </>
  );
}
