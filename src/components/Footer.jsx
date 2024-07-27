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
    <div className="bg-[#1A2A36] text-white mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 px-4 lg:px-32 mx-auto font-medium pt-20 pb-6 ">
        {/* Address */}
        <div className="">
          <p className="text-xl font-semibold mb-4">Address Green-Gust Energy</p>
          <div className="space-y-2 pl-2 mb-4 text-slate-500">
            <div className="flex gap-2">
              <div>
                <MapPin size={20} />
              </div>
              <span>
                Berlin, Germany (HQ) Address: No. Brandenburgische Str. 77,
                12713 Berlin, Germany.
              </span>
            </div>
            <div className="flex gap-2">
              <Mail size={20} /> <span> contact@greengust.com</span>
            </div>
            <p className="text-xl font-semibold mb-4 text-white">Address</p>
            <div className="flex gap-2">
              <div>
                <MapPin size={20} />
              </div>
              <span>Agerakvo 38, 860 Copenhagen, Denmark</span>
            </div>
            <div className="flex gap-2">
              <Phone size={20} /> <span> +4592457638 </span>
            </div>
            <div className="flex gap-2">
              <Mail size={20} /> <span> contact@greengust.com</span>
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
        <div className="">
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
        <div className="">
          <p className="text-xl font-semibold mb-4">Project Gallery</p>

          <div className="grid grid-cols-3 gap-3">
            {projectGallery.map((photo, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <Image src={photo} alt="Project gallery photos" />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-xl font-semibold mb-2">Newsletter</p>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

          <div className="h-12 flex justify-between bg-white p-1 rounded-md">
            <input type="text" placeholder="Your email" className="h-full outline-green-500 pl-2 bg-white"/>
            <Link href=""> <div className="bg-green-500 rounded-md h-full px-1 flex justify-center items-center"><p >SignUp</p></div> </Link>
          </div>
           
        </div>
      </div>

      {/* Floor */}
      <div className="mt-10 px-4 md:px-10 text-slate-500">
        <hr />
        <p className="text-sm md:text-base font-medium py-5 md:py-8">
          &#169; Green-Gust Energy, ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
