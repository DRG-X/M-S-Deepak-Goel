import Link from "next/link";
import { Phone, Mail, MapPin, Globe, MessageSquare, Video, Briefcase } from "lucide-react";

const services = [
  { label: "Residential Construction", href: "/services#residential" },
  { label: "Commercial Construction", href: "/services#commercial" },
  { label: "Turnkey Projects", href: "/services#turnkey" },
  { label: "Renovation & Remodeling", href: "/services#renovation" },
  { label: "Interior Design", href: "/services#interior" },
  { label: "Civil Works", href: "/services#civil" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Blueprint Pattern */}
      <div className="absolute inset-0 blueprint-pattern opacity-30" />

      {/* Top Gold Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-display font-bold text-lg">DG</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">M/S Deepak Goel</div>
                <div className="text-xs text-gold/80 font-medium tracking-widest uppercase">Construction</div>
              </div>
            </Link>
            {/* Brand description: raised from /50 to /75 — WCAG AA on #0f1f3d */}
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Built on Trust. Delivered with Excellence. Kanpur's most trusted construction company with 20+ years of proven expertise.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: "#", label: "Website" },
                { Icon: MessageSquare, href: "#", label: "WhatsApp" },
                { Icon: Video, href: "#", label: "YouTube" },
                { Icon: Briefcase, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gold" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    /* Raised from /45 to /70 — body link text on dark bg */
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gold" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-gold" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  {/* Raised from /50 to /75 */}
                  <span className="text-white/75 text-sm leading-relaxed">
                    Kanpur, Uttar Pradesh<br />
                    India — 208001
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-gold" />
                </div>
                <a href="tel:+919415032100" className="text-white/75 hover:text-gold text-sm transition-colors">
                  +91 9415032100 
                  +91 9415032103
                  +91 8318592905
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-gold" />
                </div>
                <a href="goeldeepak108@gmail.com" className="text-white/75 hover:text-gold text-sm transition-colors">
                  goeldeepak108@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 px-4 py-2 border border-gold/20 rounded-full inline-block">
              <span className="text-gold/80 text-xs font-medium tracking-wider">
                20+ Years of Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar — copyright stays at /50 (decorative), legal links raised */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} M/S Deepak Goel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {/* Legal links: raised from /30 to /55 */}
            <Link href="#" className="text-white/55 hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/55 hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="text-white/55 hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
