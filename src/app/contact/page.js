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
      <Hero title="Contact" currentPage="Current" />
      <div className="container px-4 mx-auto">
        <p className="text-xl font-semibold mb-4">Address Green-Gust Energy</p>
        <div className="space-y-2 pl-2 mb-4 text-slate-500">
          <div className="flex gap-2">
            <MapPin size={20} />
            <span> Agravaco 38, 860 Copenhagen, Denmark</span>
          </div>
          <div className="flex gap-2">
            <MapPin size={20} />
            <span>
              Berlin, Germany (HQ) Address: No. Brandenburgische Str. 77, 12713
              Berlin, Germany.
            </span>
          </div>
          <div className="flex gap-2">
            <Phone size={20} /> <span> +4592457638</span>
          </div>
          <div className="flex gap-2">
            <Mail size={20} /> <span> contact@greengust.org</span>
          </div>
        </div>
      </div>
    </div>
  );
}
