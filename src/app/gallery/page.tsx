import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Project Gallery | Construction Photos",
  description:
    "Browse M/S Deepak Goel's project gallery — residential villas, commercial complexes, interiors, and construction progress across Kanpur, UP.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
