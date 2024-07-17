import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import Hero from "@/components/hero/others/Hero";

export default function ContactPage() {
  return (
    <div>
        <Hero title="Contact"/>
      <div className="container px-4 mx-auto">
        <p className="text-xl font-semibold mb-4">Address Green Gust</p>
        <div className="space-y-2 pl-2 mb-4 text-slate-500">
          <div className="flex gap-2">
            <MapPin size={20} />{" "}
            <span> 1234 Main Street, Anytown, CA 12345</span>
          </div>
          <div className="flex gap-2">
            <Phone size={20} /> <span> 123-456- 7890</span>
          </div>
          <div className="flex gap-2">
            <Mail size={20} /> <span> info@company.com</span>
          </div>
          <div className="flex gap-2">
            <Mail size={20} /> <span> info@company.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
