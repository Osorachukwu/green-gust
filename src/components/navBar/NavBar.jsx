import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/GRREN-GUST-LOGO.svg";
import Hambourger from "./Hambourger";
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function NavBar() {
  return (
    <section>
      {/* Opening time and co */}
      <div className="hidden lg:block">
        <div className="bg-slate-900 text-slate-500 flex justify-between px-5 text-sm">
          <div className="flex gap-10 py-2">
            <div className="flex gap-2 items-center">
              <MapPin size={18} className="text-purple-300" />
              <p>1234 Main Street, Anytown, CA 12345</p>
            </div>
            <div className="flex gap-2 items-center">
              <Clock size={18} className="text-purple-300" />
              <p>MON - Fri 9.00AM - 9.00PM</p>
            </div>
          </div>
          {/* Col -2 */}
          <div className="flex gap-10">
            <div className="flex gap-2 items-center py-2">
              <Clock size={18} className="text-purple-300" />
              <p>MON - Fri 9.00AM - 9.00PM</p>
            </div>

            <div className="flex divide-x-[1px]">
              <Link href="" className="px-2 py-2">
                <Facebook size={18} className="text-purple-300" />
              </Link>
              <Link href="" className="px-2 py-2">
                <Twitter size={18} className="text-purple-300" />
              </Link>
              {/* <Linkedin className="text-purple-800" /> */}
              <Link href="" className="px-2 py-2">
                <Linkedin size={18} className="text-purple-300" />
              </Link>
              <Link href="" className="px-2 py-2">
                <Instagram size={18} className="text-purple-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* And co... */}
      <div className="relative w-full flex gap-16 justify-between items-center h-20 bg-white shadow-2xl z-50">
        <div className="h-full px-5 md:px-10 flex items-center">
          <Link
            href="/"
            className=" text-lg md:text-3xl font-semibold flex items-center gap-4 whitespace-nowrap"
          >
            <Image src={logo} alt="Logo" className="h-full w-8  lg:h-12 lg:w-12" />
            {/* <span>Green Gust</span> */}
          </Link>
        </div>
        <NavLinks />
        <Hambourger />
      </div>
    </section>
  );
}
