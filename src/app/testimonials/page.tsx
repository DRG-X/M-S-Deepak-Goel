import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Client Testimonials | Kanpur Construction Reviews",
  description:
    "Read what 450+ satisfied clients say about M/S Deepak Goel's construction quality, transparency, and on-time project delivery in Kanpur, Uttar Pradesh.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
