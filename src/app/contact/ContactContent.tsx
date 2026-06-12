"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const contactCards = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    detail: "+91 9415032100",
    sub: "Mon–Sat, 9 AM – 7 PM",
    href: "tel:+919415032100",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "goeldeepak108@gmail.com",
    sub: "We respond within 24 hours",
    href: "mailto:goeldeepak108@gmail.com",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    detail: "Kanpur, Uttar Pradesh",
    sub: "By appointment preferred",
    href: "#map",
    action: "Get Directions",
  },
  {
    icon: Clock,
    title: "Office Hours",
    detail: "Mon–Sat: 9 AM – 7 PM",
    sub: "Sunday by appointment",
    href: null,
    action: null,
  },
];

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Turnkey Project",
  "Renovation & Remodeling",
  "Interior Design",
  "Civil Works",
  "Other",
];

const budgetRanges = [
  "₹20 – 50 Lakh",
  "₹50 Lakh – 1 Crore",
  "₹1 – 3 Crore",
  "₹3 – 5 Crore",
  "₹5 Crore+",
  "Not sure yet",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "",
    projectType: "", budget: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Whether you're planning a home, a commercial space, or a renovation — we're ready to listen. No obligation, no pressure."
        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1800&q=80"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Cards */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Multiple Ways to Reach Us"
            subtitle="Choose whatever's most convenient — we respond promptly through all channels."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map(({ icon: Icon, title, detail, sub, href, action }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-gold/25 transition-all duration-400 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={20} className="text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy text-base mb-1">{title}</h3>
                <p className="font-medium text-navy text-sm mb-1">{detail}</p>
                <p className="text-gray-400 text-xs mb-4 flex-1">{sub}</p>
                {href && action && (
                  <a
                    href={href}
                    className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold hover:gap-2.5 transition-all duration-300"
                  >
                    {action} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form + Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 lg:p-10"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={30} className="text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-2xl mb-3">Thank You!</h3>
                  <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto">
                    Your enquiry has been received. Our team will contact you within 24 hours to discuss your project.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-display font-bold text-navy text-2xl mb-2">Send Us an Enquiry</h2>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours with an honest assessment of your project.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {[
                      { name: "name", label: "Full Name *", placeholder: "Your name", type: "text" },
                      { name: "phone", label: "Phone / WhatsApp *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                      { name: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                      { name: "city", label: "City / Area", placeholder: "e.g. Kakadeo, Kanpur", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all placeholder-gray-300"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">Project Type</label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all text-gray-600"
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">Approximate Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all text-gray-600"
                      >
                        <option value="">Select range...</option>
                        {budgetRanges.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-navy/70 mb-1.5 uppercase tracking-wider">Project Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project — plot size, floors planned, any specific requirements or questions..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all resize-none placeholder-gray-300"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded-full text-base transition-all duration-300 shadow-gold hover:shadow-xl hover:scale-[1.02] group"
                  >
                    <Send size={17} />
                    Submit Enquiry
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-4">
                    We respect your privacy. Your details are never shared with third parties.
                  </p>
                </>
              )}
            </motion.div>

            {/* Right Panel */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Why contact card */}
              <div className="bg-navy rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-pattern opacity-20" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-white text-xl mb-5">What Happens After You Submit?</h3>
                  {[
                    "We review your enquiry within 24 hours",
                    "Our team calls to understand your project in detail",
                    "We schedule a free site visit at your convenience",
                    "You receive a detailed written estimate — no strings attached",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                      <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gold text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-white/85 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promise card */}
              <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
                <h3 className="font-semibold text-navy text-base mb-4">Our Promise</h3>
                {[
                  "Free consultation — no commitment",
                  "Written estimate with full line items",
                  "No hidden charges, ever",
                  "Direct contact with your project manager",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3 mb-3 last:mb-0">
                    <CheckCircle size={15} className="text-gold flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-80 lg:h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229221.7454738736!2d80.04657!3d26.4498841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46d%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="M/S Deepak Goel — Kanpur, Uttar Pradesh"
        />
        <div className="absolute top-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
          <MapPin size={18} className="text-gold" />
          <div>
            <div className="font-semibold text-navy text-sm">M/S Deepak Goel</div>
            <div className="text-gray-400 text-xs">Kanpur, Uttar Pradesh</div>
          </div>
        </div>
      </section>
    </>
  );
}
