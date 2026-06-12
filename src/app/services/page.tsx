import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Construction Services | Residential, Commercial & Turnkey",
  description:
    "M/S Deepak Goel offers residential construction, commercial construction, turnkey projects, renovation, interior design, civil works, and project management in Kanpur, UP.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
