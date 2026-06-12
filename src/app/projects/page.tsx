import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Our Projects | Construction Portfolio",
  description:
    "Explore M/S Deepak Goel's portfolio of 500+ completed residential, commercial, turnkey, and renovation projects across Kanpur and Uttar Pradesh.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
