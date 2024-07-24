import React from "react";
import Image from "next/image";
import Link from "next/link";
import fixedPanels from "@/assets/fixed-panels.jpg";
import fixedPanelsTwo from "@/assets/fixedPanelsTwo.jpg";
import fixingPanelsTwo from "@/assets/workersTurbins.jpg";
import fixingPanelsThree from "@/assets/fixingPanelsThree.jpg";
import chimneiesSmall from "@/assets/chimniesSmall.jpg";
import tubins from "@/assets/icey-desert-turbins.jpg";
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
import iceyTurbin from "@/assets/icey-desert-turbins.jpg";

export default function Footer() {
  let quickLinks = [
    { title: "About Us", linkUrl: "/about" },
    { title: "Contact Us", linkUrl: "/contact" },
    { title: "Our Services", linkUrl: "/services" },
    { title: "Terms & Condition", linkUrl: "/about" },
    { title: "Support", linkUrl: "/support" },
  ];
  let socialLinks = [
    { icon: <Twitter />, linkUrl: "ddd" },
    // { icon: <Facebook />, linkUrl: "ddd" },
    // { icon: <Youtube />, linkUrl: "ddd" },
    // { icon: <Linkedin />, linkUrl: "ddd" },
  ];

  let projectGallery = [
    fixedPanels,
    chimneiesSmall,
    fixingPanelsThree,
    fixingPanelsTwo,
    fixedPanelsTwo,
    iceyTurbin,
  ];
  return (
    <div className="bg-slate-900 text-white mt-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 container px-4 mx-auto font-medium pt-20 pb-6 ">
        {/* Address */}
        <div>
          <p className="text-xl font-semibold mb-4">Address Green Gust</p>
          <div className="space-y-2 pl-2 mb-4 text-slate-500">
            <div className="flex gap-2">
              <div>
                <MapPin size={20} />
              </div>
              <span>
                Berlin, Germany (HQ) Address: No. Brandenburgische Str. 75,
                12713 Berlin, Germany
              </span>
            </div>
            <div className="flex gap-2">
              <Mail size={20} /> <span> info@company.com</span>
            </div>
            <p className="text-xl font-semibold mb-4 text-white">
              Address
            </p>
            <div className="flex gap-2">
              <div>
                <MapPin size={20} />
              </div>
              <span>ADDRESS: Agerakvo 37, 860 Copenhagen, Denmark</span>
            </div>
            <div className="flex gap-2">
              <Phone size={20} /> <span> +4592457638 </span>
            </div>
            <div className="flex gap-2">
              <Mail size={20} /> <span> info@company.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((item, i) => (
              <Link
                href={item.linkUrl}
                key={i}
                className="h-10 w-10 flex justify-center items-center gap-2 rounded-full border-2 border-slate-500 text-slate-500"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-semibold mb-4">Quick Links</p>
          <div className="space-y-2 pl-2 text-slate-500">
            {quickLinks.map((item, i) => (
              <div key={i} className="flex">
                <ChevronRight />
                <Link href={item.linkUrl}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div>
          <p className="text-xl font-semibold mb-4">Project Gallery</p>

          <div className="grid grid-cols-3 gap-3">
            {projectGallery.map((photo, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <Image src={photo} alt="Project gallery photos" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floor */}
      <div className="mt-10 px-4 md:px-10 text-slate-500">
        <hr />
        <p className="font-medium py-5 md:py-8 md:text-xl">
          &#169; Green-Gust Energy, ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
