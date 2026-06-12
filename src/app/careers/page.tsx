import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | Join M/S Deepak Goel",
  description:
    "Join Kanpur's most trusted construction company. Explore open positions across engineering, site management, architecture, and business development.",
};

export default function CareersPage() {
  return <CareersContent />;
}
