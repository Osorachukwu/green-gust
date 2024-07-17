import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    { icon: <Facebook />, linkUrl: "ddd" },
    { icon: <Youtube />, linkUrl: "ddd" },
    { icon: <Linkedin />, linkUrl: "ddd" },
  ];

  let projectGallery = [
    iceyTurbin,
    iceyTurbin,
    iceyTurbin,
    iceyTurbin,
    iceyTurbin,
    iceyTurbin,
  ];
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 container px-4 mx-auto font-medium pt-20 pb-6">
        {/* Address */}
        <div>
          <p className="text-xl font-semibold mb-4">Address Green Gust</p>
          <div className="space-y-2 pl-2 mb-4">
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

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((item, i) => (
              <Link
                href={item.linkUrl}
                key={i}
                className="h-10 w-10 flex justify-center items-center gap-2 rounded-full border-2 border-black"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-semibold mb-4">Quick Links</p>
          <div className="space-y-2 pl-2">
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
      <div className="mt-10 px-4 md:px-10">
        <hr />
        <p className="text-center font-medium py-5 md:py-8 md:text-xl">
          &#169; Green-Gust Energy, ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
