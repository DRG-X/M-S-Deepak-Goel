import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Construction Blog & Insights",
  description:
    "Expert articles on home construction, renovation tips, interior design trends, and real estate advice from M/S Deepak Goel — Kanpur's leading construction company.",
};

export default function BlogPage() {
  return <BlogContent />;
}
