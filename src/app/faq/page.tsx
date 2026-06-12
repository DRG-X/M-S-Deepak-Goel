import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Construction Questions Answered",
  description:
    "Get answers to 30+ frequently asked questions about construction, renovation, turnkey projects, interior design, and working with M/S Deepak Goel in Kanpur, UP.",
};

export default function FAQPage() {
  return <FAQContent />;
}
