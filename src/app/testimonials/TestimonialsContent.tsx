"use client";

import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Sharma", role: "Homeowner", location: "Kidwai Nagar, Kanpur",
    project: "G+2 Independent Villa | 3,200 sq. ft.", avatar: "RS",
    quote: "I've spoken with several construction companies in Kanpur, but M/S Deepak Goel is in a different league altogether. The quality of materials, the professionalism of the site team, and the cleanliness of the construction site impressed me throughout the entire project. My home was delivered exactly on the promised date — not a single day late.",
  },
  {
    name: "Priya Agarwal", role: "Business Owner", location: "Civil Lines, Kanpur",
    project: "Commercial Showroom (Turnkey) | 3,500 sq. ft.", avatar: "PA",
    quote: "We commissioned a 3,500 sq. ft. commercial showroom as a complete turnkey project. Deepak Ji and his team managed every aspect — from government plan approvals to the final interior fit-out — without a single week of delay. I dealt with one person, had one contract, and received one completed building. That's how it should work.",
  },
  {
    name: "Amit Verma", role: "Property Developer", location: "Kanpur",
    project: "2 commercial complexes, ongoing relationship", avatar: "AV",
    quote: "As a developer who has worked with multiple contractors over the years, I can say without hesitation that M/S Deepak Goel is the only team I trust with my premium projects. Their structural quality is outstanding. Their site management is disciplined. And their pricing is always what they quoted — not what they 'revised' later.",
  },
  {
    name: "Sunita Gupta", role: "Homeowner", location: "Armapur Estate, Kanpur",
    project: "Full Home Renovation | 2,200 sq. ft.", avatar: "SG",
    quote: "Our 30-year-old family home needed complete renovation. M/S Deepak Goel handled it with such sensitivity — preserving the elements we cherished while completely modernizing everything else. We were able to stay in the house throughout. The transformation is genuinely unbelievable.",
  },
  {
    name: "Rohit Srivastava", role: "Factory Owner", location: "Panki Industrial Area, Kanpur",
    project: "Manufacturing Facility | 18,000 sq. ft.", avatar: "RS",
    quote: "They built our entire manufacturing facility on time and 4% under budget — which is honestly unheard of in this industry. The site project manager was remarkably responsive. I received weekly photo updates and could call him anytime. This is how construction should be managed.",
  },
  {
    name: "Anita Mishra", role: "Homeowner", location: "Govind Nagar, Kanpur",
    project: "Interior Fit-Out — Full Home", avatar: "AM",
    quote: "The interior design team completely transformed our living spaces. The modular kitchen they designed has become the talking point of every family gathering. Every guest who visits asks who designed it. The attention to detail — the lighting placement, the storage, the finishes — is exceptional.",
  },
  {
    name: "Vikram Tiwari", role: "First-Time Homeowner", location: "Rawatpur, Kanpur",
    project: "Independent House (G+1) | 1,800 sq. ft.", avatar: "VT",
    quote: "I was building my first home and didn't know where to start. M/S Deepak Goel guided me through every decision — design, materials, approvals — with patience and complete transparency. They never made me feel like I was asking too many questions. Now I have a beautiful home and complete peace of mind.",
  },
  {
    name: "Kavita Agarwal", role: "Director", location: "Kanpur",
    project: "Office Interior Fit-Out | 5,000 sq. ft.", avatar: "KA",
    quote: "We needed a 5,000 sq. ft. office space renovated and fitted out within a strict 90-day window. M/S Deepak Goel not only met that deadline — they delivered ahead of it. The quality of the office interior is something our employees and clients comment on every single day.",
  },
];

const successStories = [
  {
    title: "From Empty Plot to Dream Home in 11 Months",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    body: "When the Sharma family purchased a 3,000 sq. ft. plot in Kidwai Nagar, they had a vision — a spacious three-floor home with modern interiors, a children's play terrace, and a Vastu-compliant layout. M/S Deepak Goel handled everything from custom architectural design to final interior fit-out, delivered the completed home 3 weeks ahead of schedule, and came in 6% under the original budget through disciplined material procurement. The Sharmas now live in the home they always imagined — and have referred two family members to us.",
    result: "Delivered 3 weeks early • 6% under budget",
  },
  {
    title: "A Business That Couldn't Afford to Wait",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    body: "When Agarwal Exports needed a new 22,000 sq. ft. warehouse in Panki — with a hard operational deadline 8 months away — most contractors declined. M/S Deepak Goel took on the challenge, deployed two parallel site teams, and delivered the complete structure with loading docks and admin block 2 weeks ahead of even that aggressive timeline. The client's business operations launched without a single day's delay.",
    result: "22,000 sq. ft. in 8 months • 2 weeks early",
  },
  {
    title: "Rebuilding a Family Legacy",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800&q=80",
    body: "The Gupta family home in Govind Nagar had been standing for nearly three decades. When the family decided it was time for a complete renovation, they were torn — between preserving what felt like home and accepting that everything needed to change. M/S Deepak Goel managed the renovation in phases while the family stayed on site, completed the project in 5 months, and delivered a home that felt brand new while still feeling like theirs.",
    result: "Completed in 5 months • Family stayed on-site throughout",
  },
];

const videos = [
  { title: "Rajesh Sharma's Villa Reveal", sub: "Filmed inside the completed home", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" },
  { title: "Rohit Srivastava's Warehouse Tour", sub: "Factory operational tour with client", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { title: "Sunita Gupta's Renovation Reveal", sub: "Before footage + current home walkthrough", image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=600&q=80" },
];

export default function TestimonialsContent() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="450+ Families and Businesses Trust Us With Their Most Important Projects"
        subtitle="Don't just take our word for it — hear directly from the people who live and work in the structures we've built."
        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1800&q=80"
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      {/* Written Testimonials */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Client Reviews"
            title="What Our Clients Say"
            subtitle="Real reviews from real clients — no scripts, no staging."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-400 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={15} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote size={20} className="text-gold/25" />
                </div>
                <p className="text-gray-700 text-base leading-relaxed italic mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role} — {t.location}</div>
                    <div className="text-gold/70 text-xs mt-0.5">{t.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Video Testimonials */}
      <section className="section-py bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Video Reviews"
            title="Watch What Our Clients Say"
            subtitle="Some experiences are best heard in the client's own words."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {videos.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-card hover:shadow-xl transition-shadow duration-400"
              >
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/65 transition-colors duration-400" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full glass border border-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Play size={22} className="text-white fill-white ml-1" />
                  </div>
                  <h3 className="text-white font-semibold text-base text-center px-4">{v.title}</h3>
                  <p className="text-white/85 text-sm text-center mt-1 px-4">{v.sub}</p>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-gold/80 border border-gold/30 rounded-full px-3 py-1">Video Testimonial</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-py bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Case Studies"
            title="Client Success Stories in Detail"
            subtitle="The full story behind some of our most memorable project deliveries."
          />
          <div className="space-y-10">
            {successStories.map((story, i) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl-navy img-zoom">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gold text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                      {story.result}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-block text-gold font-semibold text-xs tracking-widest uppercase border border-gold/25 rounded-full px-4 py-1.5 mb-4">
                    Success Story
                  </div>
                  <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-4 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">{story.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Become Our Next Success Story?"
        subheading="Join 450+ satisfied clients who trusted M/S Deepak Goel with their most important projects. Your journey starts with a free consultation."
        primaryCTA="Request a Free Consultation"
      />
    </>
  );
}
