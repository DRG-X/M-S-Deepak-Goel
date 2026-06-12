import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Consultation",
  description:
    "Get in touch with M/S Deepak Goel for a free construction consultation in Kanpur, UP. Residential, commercial, renovation, and turnkey project enquiries welcome.",
};

export default function ContactPage() {
  return <ContactContent />;
}
