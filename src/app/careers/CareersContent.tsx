"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronRight, Heart, Users, Trophy, TrendingUp, Shield, Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  { icon: Trophy, title: "Work on Landmark Projects", body: "Be part of Kanpur's most prestigious construction projects — from luxury villas to multi-crore commercial complexes." },
  { icon: TrendingUp, title: "Continuous Growth", body: "Structured career progression, skill development programs, and exposure to diverse project types across all service lines." },
  { icon: Users, title: "Expert Team Culture", body: "Work alongside 80+ experienced engineers, architects, and tradespeople in a culture built on professionalism and mutual respect." },
  { icon: Heart, title: "Fair Compensation", body: "Market-competitive salaries, performance bonuses, and transparent review cycles — no arbitrary salary decisions." },
  { icon: Shield, title: "Job Security", body: "20 years of consistent growth, a full project pipeline, and a client base that returns project after project means stable, long-term employment." },
  { icon: Star, title: "Pride of Craftsmanship", body: "Build things that last. Every project we deliver is a permanent part of Kanpur's skyline — work you can point to with pride." },
];

const openRoles = [
  { title: "Site Engineer — Civil", dept: "Engineering", type: "Full-Time", location: "Kanpur", exp: "2–5 years", desc: "Oversee day-to-day construction activities on residential and commercial projects. Ensure IS code compliance, manage labour teams, and coordinate material delivery." },
  { title: "Structural Draftsman — AutoCAD", dept: "Design & Architecture", type: "Full-Time", location: "Kanpur", exp: "2–4 years", desc: "Prepare detailed structural drawings using AutoCAD for residential and commercial projects. Work closely with structural engineers and architects." },
  { title: "Project Manager — Residential", dept: "Project Management", type: "Full-Time", location: "Kanpur", exp: "5–8 years", desc: "Lead end-to-end management of residential construction projects. Client communication, site coordination, vendor management, timeline adherence." },
  { title: "Interior Designer", dept: "Interior Design", type: "Full-Time", location: "Kanpur", exp: "3–6 years", desc: "Design and manage complete interior fit-outs for residential and commercial spaces. Proficiency in modular systems, lighting design, and material selection." },
  { title: "Quantity Surveyor / Estimator", dept: "Finance & Estimation", type: "Full-Time", location: "Kanpur", exp: "3–5 years", desc: "Prepare detailed BOQs, cost estimates, and project budgets. Work with procurement team to optimize material costs without compromising specification." },
  { title: "Business Development Executive", dept: "Sales & Business Dev.", type: "Full-Time", location: "Kanpur", exp: "2–4 years", desc: "Identify and develop new project opportunities, nurture client relationships, and represent M/S Deepak Goel in the Kanpur real estate and developer community." },
];

export default function CareersContent() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career With the Team That Builds Kanpur"
        subtitle="Join 80+ engineers, architects, and construction professionals who've made M/S Deepak Goel their long-term home. We build structures — and careers."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80"
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Benefits */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Join Us"
            title="What It Means to Work Here"
            subtitle="We've built a company where talented people stay for years — because the work is meaningful, the team is excellent, and the environment is honest."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {benefits.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-400 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-py bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Openings"
            subtitle="We hire for talent, attitude, and potential — not just credentials. If you don't see a perfect fit, reach out anyway."
          />
          <div className="space-y-5">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-400 p-6 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-semibold text-navy text-lg group-hover:text-gold transition-colors">{role.title}</h3>
                      <span className="px-2.5 py-0.5 bg-gold/10 text-gold text-xs font-semibold rounded-full">{role.dept}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{role.desc}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={12} className="text-gold" />
                        <span>{role.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-gold" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-gold" />
                        <span>{role.exp} experience</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="flex items-center gap-2 bg-navy group-hover:bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 flex-shrink-0"
                  >
                    Apply Now <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="section-py bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Apply"
            title="Send Us Your Application"
            subtitle="Don't see the perfect role listed? We always welcome applications from talented construction professionals."
          />
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {[
                { name: "name", label: "Full Name *", placeholder: "Your name", type: "text" },
                { name: "phone", label: "Phone *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                { name: "email", label: "Email *", placeholder: "your@email.com", type: "email" },
                { name: "exp", label: "Years of Experience", placeholder: "e.g. 4 years", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all placeholder-gray-300"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">Role You're Applying For</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all text-gray-600">
                  <option value="">Select a position or type 'Open Application'</option>
                  {openRoles.map((r) => <option key={r.title}>{r.title}</option>)}
                  <option>Open Application (No Specific Role)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">Tell Us About Yourself</label>
                <textarea
                  rows={4}
                  placeholder="Your background, key skills, notable projects you've worked on, and why you want to join M/S Deepak Goel..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all resize-none placeholder-gray-300"
                />
              </div>
            </div>

            <button className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded-full text-base transition-all duration-300 shadow-gold hover:shadow-xl hover:scale-[1.02]">
              Submit Application
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">
              We review all applications personally and respond within 5 business days.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        heading="Building Kanpur — Together"
        subheading="We're growing. If you're a talented construction professional looking for meaningful work in a company that values integrity, join us."
        primaryCTA="View All Open Roles"
        primaryHref="#apply"
        secondaryCTA="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}
