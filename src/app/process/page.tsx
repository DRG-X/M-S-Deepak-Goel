import type { Metadata } from "next";
import ProcessContent from "./ProcessContent";

export const metadata: Metadata = {
  title: "Our Construction Process | 7-Step Project Delivery",
  description:
    "Discover how M/S Deepak Goel manages every construction project — from the first consultation to final handover — with complete transparency and milestone-based delivery.",
};

export default function ProcessPage() {
  return <ProcessContent />;
}
