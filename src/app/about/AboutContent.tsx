"use client";

import { motion } from "framer-motion";
import { CheckCircle, Quote, Building, Users, Trophy, Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const values = [
  { icon: CheckCircle, title: "Integrity", body: "We say what we'll do. We do what we say. No exceptions." },
  { icon: Star, title: "Quality", body: "We never compromise on materials, workmanship, or structural safety — regardless of budget tier." },
  { icon: Trophy, title: "Transparency", body: "Open communication and honest pricing at every stage. You'll never be surprised by a bill." },
  { icon: Building, title: "Timeliness", body: "Your deadline is our commitment. We build our project schedules around yours." },
  { icon: Users, title: "Innovation", body: "We adopt modern construction techniques, 3D design tools, and sustainable practices." },
  { icon: CheckCircle, title: "Client-Centricity", body: "Every decision we make puts your interest first. Your satisfaction isn't just a goal — it's our standard." },
];

const trustPoints = [
  { title: "Licensed & Compliant", body: "Fully registered and compliant with all UP municipal and state construction regulations. We operate with complete transparency on the legal side of every project." },
  { title: "Insured Projects", body: "Every project site is covered with comprehensive civil works insurance, protecting both our clients and our team." },
  { title: "Milestone-Based Payments", body: "You pay as visible, verified work progresses — not upfront. This payment structure protects your investment at every stage." },
  { title: "Written Agreements", body: "Every project, regardless of size, begins with a detailed written contract covering scope, specifications, timeline, penalties, and warranty terms." },
  { title: "After-Sales Support", body: "Our commitment doesn't end at handover. We remain by your side during the warranty period and beyond for any structural or finishing concerns." },
  { title: "Deep Local Expertise", body: "20+ years in Kanpur means we understand the city's soil conditions, municipal approval processes, trusted material suppliers, and local challenges better than any outsider ever could." },
];

const timeline = [
  { year: "2004", milestone: "M/S Deepak Goel founded in Kanpur. First project: 1,800 sq. ft. residential home in Govind Nagar." },
  { year: "2007", milestone: "Expanded into commercial construction. First office complex delivered in Civil Lines." },
  { year: "2010", milestone: "Crossed 50 completed projects. Team expanded to 25 members." },
  { year: "2013", milestone: "Launched dedicated interior design and renovation services." },
  { year: "2016", milestone: "Recognized as a leading construction firm in Kanpur by the local industry body." },
  { year: "2018", milestone: "Crossed 300 completed projects. Introduced full turnkey project capability." },
  { year: "2020", milestone: "Adopted 3D architectural rendering and BIM-assisted planning for all projects." },
  { year: "2022", milestone: "Team grew to 80+ members. Expanded project reach across Uttar Pradesh." },
  { year: "2024", milestone: "Crossed 500 projects. 20 years of building trust — and counting." },
];

export default function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Two Decades of Building Trust, One Structure at a Time"
        subtitle="Founded on the principles of integrity, craftsmanship, and client satisfaction — M/S Deepak Goel has grown from a local contracting firm to one of Kanpur's most respected construction companies."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Company Story */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Our Story</span>
              </div>
              <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-6 leading-tight">
                From One Project to Five Hundred
              </h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>
                  Over 20 years ago, Deepak Goel started with a simple but powerful belief: that every family deserves a home built with honesty, and every business deserves a space built with excellence.
                </p>
                <p>
                  What began as a modest contracting operation in the heart of Kanpur has grown into one of Uttar Pradesh's most trusted construction companies — with a portfolio spanning luxury residences, multi-storey commercial complexes, and large-scale turnkey developments.
                </p>
                <p>
                  Through Kanpur's rapid urbanization, evolving building regulations, and shifting client expectations, one thing has never changed: we deliver exactly what we promise. Not approximately. Exactly.
                </p>
                <p>
                  Today, M/S Deepak Goel employs a team of 80+ engineers, architects, project managers, and skilled tradespeople — all united by a single mission: to build structures that stand strong for generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl-navy">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"
                  alt="M/S Deepak Goel — Construction Team"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="font-display font-bold text-3xl text-gold mb-1">20+</div>
                <div className="text-white/85 text-sm">Years of Building Excellence in Kanpur</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Purpose" title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "Mission",
                text: "To deliver construction projects of the highest quality — on time and within budget — through ethical practices, superior craftsmanship, and an unwavering commitment to client satisfaction.",
              },
              {
                label: "Vision",
                text: "To be Uttar Pradesh's most trusted and sought-after construction company — known not just for the structures we build, but for the trust we create with every client, every project, and every promise we keep.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-gold-dark rounded-l-3xl" />
                <div className="pl-4">
                  <div className="text-gold font-bold text-xs tracking-widest uppercase mb-3">{item.label}</div>
                  <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Values"
            title="What We Stand For"
            subtitle="Six principles that guide every decision we make — on site and off it."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 group-hover:bg-gold/15 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-base mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Leadership */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Leadership"
            title="The Vision Behind the Company"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl-navy">
                <img
                  src="/images/papa.jpeg"
                  alt="Deepak Goel — Founder"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-display font-bold text-white text-2xl text-shadow-md">Deepak Goel</div>
                  <div className="text-gold text-sm font-medium mt-1 text-shadow-sm">Founder & Managing Director</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                With over two decades of hands-on experience in the construction industry, Deepak Goel has personally overseen more than 500 projects across Kanpur and Uttar Pradesh. Known for his meticulous attention to detail, deeply ethical business practices, and broad knowledge of civil and structural engineering, he has built a company that clients return to — project after project.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                His approach is simple: treat every client's project as if it were your own home. That philosophy is embedded in how every member of the M/S Deepak Goel team operates — from the design desk to the construction site.
              </p>
              <div className="bg-navy rounded-2xl p-6 relative">
                <Quote size={24} className="text-gold/30 mb-3" />
                <blockquote className="text-white/95 text-base italic leading-relaxed mb-4">
                  "I started this company with one goal: to build with integrity. Every structure we build is a reflection of that promise — and I take that personally."
                </blockquote>
                <div className="text-gold text-sm font-semibold">— Deepak Goel, Founder</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-py bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Over 450 Clients Choose and Return to M/S Deepak Goel"
            subtitle="Six pillars of trust that define how we work and why clients come back."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <h3 className="font-semibold text-navy text-base group-hover:text-gold transition-colors">{pt.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-8">{pt.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-navy relative overflow-hidden">
        <div className="absolute inset-0 blueprint-pattern opacity-25" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our Journey"
            title="20 Years of Building Kanpur"
            subtitle="Every milestone is a story of trust delivered."
            light
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"} pl-14 md:pl-0`}>
                    <div className="inline-block bg-gold text-white text-sm font-bold px-4 py-1.5 rounded-full mb-2">
                      {item.year}
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">{item.milestone}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-navy-light shadow-gold flex-shrink-0 mt-1" />

                  {/* Empty opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Build Your Vision Together"
        subheading="Whether it's your dream home or your next business space — we're ready to make it real."
        primaryCTA="Schedule a Free Consultation"
        secondaryCTA="Call Us Now"
        secondaryHref="/contact"
      />
    </>
  );
}
