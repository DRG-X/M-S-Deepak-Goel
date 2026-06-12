"use client";

import { motion } from "framer-motion";
import { MessageSquare, MapPin, Calculator, Layout, HardHat, Shield, Key, CheckCircle, Clock, DollarSign } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    badge: "Free • 1–2 hours",
    description:
      "Everything starts with a conversation. You share your requirements, budget range, preferred timeline, and any design ideas you already have. We listen carefully, ask the right questions, and give you an honest assessment of what's achievable — and what to watch out for.",
    detail:
      "This consultation can happen at our office, your site, or remotely via video call. There's no commitment required and no sales pressure involved. Our goal at this stage is simply to understand you.",
    tip: "What to bring: Any sketches, inspiration images, plot documents, or approximate budget figure.",
    color: "from-gold/20 to-gold/5",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Site Inspection & Assessment",
    badge: "No charge • 1–2 days",
    description:
      "Our lead engineer and architect visit your plot or existing structure to assess soil bearing capacity, site access routes, municipal setback requirements, and any site-specific challenges — waterlogging, adjacency issues, slope.",
    detail:
      "This step is non-negotiable for us. Accurate site data is the foundation of accurate cost estimation.",
    tip: "Accurate site data → accurate cost estimates. This step saves you money.",
    color: "from-navy/10 to-navy/5",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Cost Estimation & Planning",
    badge: "3–5 business days",
    description:
      "Based on your requirements and site inspection data, we prepare a comprehensive written cost estimate broken down by material costs (by category and specification), labour costs (by trade and activity), government fees and approval costs, and contingency.",
    detail:
      "Nothing is bundled. Nothing is hidden. You know exactly what each line item represents — and why.",
    tip: "We do not provide verbal quotes. Everything is in writing before work begins.",
    color: "from-gold/15 to-gold/5",
  },
  {
    number: "04",
    icon: Layout,
    title: "Design Development & Approval",
    badge: "7–21 days",
    description:
      "Our architecture team develops your complete set of construction drawings: floor plans, elevations, structural drawings, electrical/plumbing schematics, and 3D rendered visuals. You review everything and approve before any physical work begins.",
    detail:
      "Revisions at this stage are welcome and expected. We don't start building until you're confident in the design.",
    tip: "3D renders are included. You see your home before we build it.",
    color: "from-navy/10 to-navy/5",
  },
  {
    number: "05",
    icon: HardHat,
    title: "Construction Execution",
    badge: "9–18 months (full builds)",
    description:
      "Construction begins only after all designs are approved, all relevant government sanctions are in place, and material supply agreements are confirmed. Our certified team works to a phased schedule with a dedicated site supervisor on-site daily.",
    detail:
      "You receive regular updates via photos, weekly reports, and direct access to your assigned project manager at all times.",
    tip: "Material Standard: 53-grade OPC cement | Fe-500 TMT steel | ISI-marked bricks",
    color: "from-gold/20 to-gold/5",
  },
  {
    number: "06",
    icon: Shield,
    title: "Quality Assurance & Inspections",
    badge: "At every milestone",
    description:
      "At every key milestone, our QA team conducts formal inspections against IS code benchmarks. Clients are welcome — and encouraged — to visit the site at any inspection milestone. Transparency is not optional for us.",
    detail:
      "Inspections cover: Foundation, Slab, Brickwork, Plumbing & Electrical, Plastering, Tiling, and Final Finishing.",
    tip: "You can visit the site at any milestone inspection. We welcome it.",
    color: "from-navy/10 to-navy/5",
  },
  {
    number: "07",
    icon: Key,
    title: "Final Handover",
    badge: "1–2 days walkthrough",
    description:
      "Once construction and finishing are complete, we conduct a comprehensive walkthrough with you. Every room, every fitting, every surface is reviewed. Any snagging items are addressed before you sign off.",
    detail:
      "You receive the complete set of sanctioned drawings, engineer certificates, material documentation, all NOCs, warranty cards, and your dedicated post-handover support contact.",
    tip: "Post-Handover Warranty: 1-year structural defect warranty with dedicated support.",
    color: "from-gold/20 to-gold/5",
  },
];

const inspectionTable = [
  { milestone: "Foundation", checks: "Bearing capacity, depth, reinforcement placement" },
  { milestone: "Slab", checks: "Concrete mix, cover blocks, curing protocol" },
  { milestone: "Brickwork", checks: "Bond pattern, mortar ratio, plumb and level" },
  { milestone: "Plumbing & Electrical", checks: "Pipe pressure, conduit routing, earthing" },
  { milestone: "Plastering", checks: "Thickness, finish, crack resistance treatment" },
  { milestone: "Tiling & Flooring", checks: "Level, joint uniformity, adhesive coverage" },
  { milestone: "Final Finishing", checks: "Paint quality, fixture installation, snagging" },
];

const handoverDocs = [
  "Sanctioned building plan set (original + copies)",
  "Structural drawings and engineer certificates",
  "Material specification and brand documentation",
  "All applicable NOCs and occupancy documentation",
  "Warranty cards for fixtures, fittings, and appliances",
  "Your dedicated post-handover support contact",
];

export default function ProcessContent() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How We Turn Your Vision Into Reality"
        subtitle="A clear, structured 7-step process — from your first consultation to your keys. Every step documented, transparent, and managed with precision."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80"
        breadcrumbs={[{ label: "Process" }]}
      />

      {/* Process Steps */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Step by Step"
            title="Our 7-Step Construction Process"
            subtitle="Every step is structured, documented, and designed to protect your investment while delivering the result you envisioned."
          />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: i * 0.05 }}
                  className={`grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-400`}
                >
                  {/* Number + Icon Panel */}
                  <div className={`bg-gradient-to-br ${step.color} p-8 lg:p-10 flex flex-col items-center justify-center min-w-[160px] text-center border-r border-gray-100/50`}>
                    <div className="font-display font-bold text-5xl text-navy/10 mb-4 leading-none select-none">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shadow-md mb-3">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <div className="text-xs font-semibold text-gold/80 px-3 py-1 border border-gold/25 rounded-full text-center">
                      {step.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 bg-white">
                    <h3 className="font-display font-bold text-navy text-2xl mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">{step.description}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.detail}</p>
                    <div className="flex items-start gap-2 bg-gold/8 border border-gold/20 rounded-xl px-4 py-3">
                      <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                      <p className="text-navy/70 text-sm">{step.tip}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Inspection Table */}
      <section className="section-py bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Quality Assurance"
            title="What Gets Inspected at Every Milestone"
            subtitle="Formal quality checks against IS code benchmarks — at every critical stage of construction."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-semibold text-sm">Construction Milestone</th>
                    <th className="text-left px-6 py-4 font-semibold text-sm">What Gets Checked</th>
                  </tr>
                </thead>
                <tbody>
                  {inspectionTable.map((row, i) => (
                    <tr
                      key={row.milestone}
                      className={`border-b border-gray-100 hover:bg-gold/5 transition-colors ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                          <span className="font-semibold text-navy text-sm">{row.milestone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{row.checks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Handover Documents */}
      <section className="section-py bg-navy relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern opacity-25" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Final Handover</span>
              </div>
              <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-5 leading-tight">
                What You Receive at Handover
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                At project completion, we conduct a comprehensive walkthrough and ensure every room, fitting, and surface meets the agreed specification before you sign off. You receive a complete documentation package.
              </p>
              <div className="space-y-3">
                {handoverDocs.map((doc) => (
                  <div key={doc} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <div className="text-gold font-bold text-xs tracking-widest uppercase mb-6">Post-Handover Warranty</div>
              <div className="font-display font-bold text-white text-5xl mb-3">1 Year</div>
              <p className="text-white/90 text-base mb-8 leading-relaxed">
                Structural defect warranty with a dedicated support contact. Our commitment doesn't end at handover — we remain by your side.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "On-Time Delivery", sub: "Contractual commitment" },
                  { icon: Shield, label: "Quality Guarantee", sub: "IS code compliance" },
                  { icon: DollarSign, label: "No Hidden Costs", sub: "What's quoted is final" },
                  { icon: CheckCircle, label: "Full Documentation", sub: "Every paper in order" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-white/5 rounded-2xl p-4">
                    <Icon size={18} className="text-gold mb-2" />
                    <div className="text-white text-sm font-semibold">{label}</div>
                    <div className="text-white/65 text-xs mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Begin?"
        subheading="The first step costs nothing and commits you to nothing. Just a conversation."
        primaryCTA="Book Your Free Consultation"
        secondaryCTA="View Our Projects"
        secondaryHref="/projects"
      />
    </>
  );
}
