"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Construction Guide", "Cost & Budget", "Renovation", "Interior Design", "Legal & Contracts", "Materials"];

const articles = [
  { id: 1, title: "How Much Does It Cost to Build a House in Kanpur in 2024?", cat: "Cost & Budget", read: "8 min", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", summary: "A detailed cost guide covering per sq. ft. construction rates by specification tier, material cost breakdowns, labour rates, approval fees, and the most common budget-busting surprises.", featured: true },
  { id: 2, title: "10 Things to Verify Before Hiring a Construction Company in UP", cat: "Legal & Contracts", read: "7 min", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", summary: "A practical vetting checklist for homeowners and developers — covering contractor registration, past project verification, contract structure, and how to spot corner-cutters." },
  { id: 3, title: "What Is a Turnkey Construction Project — And Is It Right for You?", cat: "Construction Guide", read: "6 min", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", summary: "A complete explainer on turnkey construction — scope, contract structure, how pricing works, who benefits most, and the critical questions to ask any contractor." },
  { id: 4, title: "How to Plan a Home Renovation in Kanpur: Step-by-Step Guide", cat: "Renovation", read: "9 min", image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=600&q=80", summary: "Covers needs assessment, renovation budgeting, design planning, contractor selection, phasing strategy, and how to manage a renovation without it taking over your life." },
  { id: 5, title: "Best Flooring Options for Indian Homes in 2024 — Pros, Cons & Costs", cat: "Interior Design", read: "7 min", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80", summary: "An expert comparison covering vitrified tiles, marble, granite, engineered wood, vinyl — with cost estimates, maintenance requirements, and climate suitability." },
  { id: 6, title: "RCC vs. Steel Frame Construction — Which Is Right for Your Building?", cat: "Construction Guide", read: "8 min", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", summary: "A technically grounded comparison of reinforced concrete and structural steel frame construction — cost, speed, design flexibility, ideal building types, and long-term maintenance." },
  { id: 7, title: "Understanding Building Approvals in Kanpur — What You Need and Why", cat: "Legal & Contracts", read: "6 min", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80", summary: "A plain-language guide to municipal approvals required for construction in Kanpur — from building plan sanction to occupancy certificate." },
  { id: 8, title: "Modular Kitchens vs. Carpenter-Made — What's Actually Worth the Money?", cat: "Interior Design", read: "5 min", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", summary: "An honest cost and quality comparison between modular kitchen systems and carpenter-built alternatives for Indian homes." },
  { id: 9, title: "Grade-A vs. Grade-B Construction Materials — What the Difference Actually Costs", cat: "Materials", read: "6 min", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80", summary: "Why the difference between Fe-415 and Fe-500 TMT steel or 43-grade and 53-grade cement matters — and what choosing wrong actually costs you long-term." },
  { id: 10, title: "How to Read a Construction Quote — A Homeowner's Guide to Spotting Red Flags", cat: "Legal & Contracts", read: "7 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", summary: "Line-by-line guidance on understanding a construction estimate — what should be itemized, what bundled figures hide, and how to compare quotes fairly." },
  { id: 11, title: "5 Renovation Mistakes That Cost Kanpur Homeowners Lakhs", cat: "Renovation", read: "5 min", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80", summary: "The five most common and expensive renovation errors — from skipping structural assessment to not locking in material specs before work begins." },
  { id: 12, title: "What Does Construction Cost Per Sq. Ft. in Kanpur Right Now?", cat: "Cost & Budget", read: "6 min", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", summary: "Current per sq. ft. construction rates in Kanpur by quality tier — basic, standard, and premium — with factors that move the number up or down." },
  { id: 13, title: "How Long Does It Take to Build a House in India? The Honest Answer", cat: "Construction Guide", read: "5 min", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", summary: "Construction timelines by project size, the most frequent causes of delay, and a practical schedule planning framework." },
  { id: 14, title: "Vastu Shastra and Modern Construction — Can They Coexist?", cat: "Construction Guide", read: "7 min", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", summary: "Where Vastu principles align naturally with good design, where practical compromises exist, and how M/S Deepak Goel integrates Vastu guidance into contemporary residential designs." },
  { id: 15, title: "How to Avoid Budget Overruns in Your Construction Project", cat: "Cost & Budget", read: "8 min", image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&q=80", summary: "The most common causes of cost escalation and actionable controls — design freeze protocols, BOQ-based contracts, milestone payment structures, and contingency budgeting." },
  { id: 16, title: "Home Waterproofing in India — Why It Matters and How It's Done Right", cat: "Materials", read: "6 min", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", summary: "Waterproofing methods for every application — terrace, bathrooms, external walls, basement — which products work in Indian climate conditions, and why skipping it is one of the most expensive construction mistakes." },
  { id: 17, title: "Commercial Office Design Trends in India for 2024", cat: "Interior Design", read: "6 min", image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&q=80", summary: "Design strategies for business owners planning office construction or renovation — biophilic design, hybrid work planning, and smart building systems." },
  { id: 18, title: "What to Include in a Construction Agreement — A Homeowner's Complete Checklist", cat: "Legal & Contracts", read: "8 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", summary: "All essential clauses — scope of work, material schedules, payment milestones, delay penalties, warranty terms, dispute resolution, and exit conditions." },
  { id: 19, title: "How to Read a Construction Floor Plan — A Beginner's Guide for Indian Homeowners", cat: "Construction Guide", read: "7 min", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", summary: "A visual, plain-language guide to understanding architectural drawings — dimensions, symbols, room layout conventions, structural element markings." },
  { id: 20, title: "Renovation vs. Reconstruction — When Should You Demolish and Rebuild?", cat: "Renovation", read: "6 min", image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=600&q=80", summary: "A decision framework helping homeowners assess their existing structure — structural integrity testing, comparative cost analysis, regulatory permissions, and when each option delivers better value." },
];

export default function BlogContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = articles[0];
  const rest = articles.slice(1);

  const filtered = rest.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || a.cat === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Expert Insights for Smarter Construction Decisions"
        subtitle="Tips, trends, and honest advice from our 20+ years of experience — written for homeowners, developers, and business owners across Uttar Pradesh."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-16 group"
          >
            <div className="relative overflow-hidden img-zoom">
              <img src={featured.image} alt={featured.title} className="w-full h-72 lg:h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent" />
              <div className="absolute top-6 left-6 px-3 py-1.5 bg-gold text-white text-xs font-bold rounded-full">
                Featured Article
              </div>
            </div>
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">{featured.cat}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <Clock size={12} />
                  {featured.read} read
                </span>
              </div>
              <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">{featured.summary}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-300 group/link"
              >
                Read Full Article <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-5 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-navy text-white"
                      : "border border-gray-200 text-gray-500 hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-400 flex flex-col"
              >
                <div className="relative overflow-hidden img-zoom" style={{ aspectRatio: "16/9" }}>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Tag size={10} className="text-gold" />
                    <span className="text-xs font-semibold text-navy">{article.cat}</span>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                    <Clock size={11} />
                    <span>{article.read} read</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-3 leading-tight group-hover:text-gold transition-colors duration-300 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{article.summary}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-2.5 transition-all duration-300"
                  >
                    Read Article <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              No articles match your search. Try different keywords or categories.
            </div>
          )}
        </div>
      </section>

      <CTASection
        heading="Have a Construction Question?"
        subheading="Our team is happy to answer your questions directly. No sales pitch — just honest advice from 20+ years of experience."
        primaryCTA="Ask Us Anything"
        secondaryCTA="Browse All Posts"
        secondaryHref="/blog"
      />
    </>
  );
}
