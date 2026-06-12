import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | 20+ Years of Construction Excellence in Kanpur, UP",
  description:
    "Learn about M/S Deepak Goel — Kanpur's leading construction company with over 20 years of experience building homes, commercial spaces, and landmark projects across Uttar Pradesh.",
};

export default function AboutPage() {
  return <AboutContent />;
}
