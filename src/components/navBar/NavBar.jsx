import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/GRREN-GUST-LOGO.svg";
import Hambourger from "./Hambourger";
import xtwitter from '@/assets/xtwitter-green.svg'
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import AutoScrollCarousel from "../hero/home/AutoScrollCarousel";

export default function NavBar() {
  return (
    <section>
      <AutoScrollCarousel />
      {/* Opening time and co */}
      <div className="hidden md:block">
        <div className="bg-slate-900 text-green-100 flex flex-row justify-between px-5 text-[10px] md:text-sm">
          <div className="flex flex-row gap-2 md:gap-10 py-2">
            <div className="flex gap-2 items-center">
              <MapPin size={18} stroke="rgb(34 197 94)" />
              <p>ADDRESS: Agerakvo 38, 860 Copenhagen, Denmark</p>
            </div>
            <div className="flex gap-2 items-center">
              <Clock size={18} stroke="rgb(34 197 94)" />
              <p>MON - Fri 9.00AM - 9.00PM</p>
            </div>
          </div>
          {/* 💥Col -2 */}
          <div className="flex items-center gap-10">
            <a href="tel:4592457638">
              <div className="flex gap-2 items-center">
                <Phone size={18} stroke="rgb(34 197 94)" />
                <p>+4592457638</p>
              </div>
            </a>

            {/* Socials */}
            <div className="">
              <Link
                href="https://twitter.com/energygust?s=21&t=dkwdg1Q6zPYDE2VuKxBJPA"
                className="px-2"
              >
               <Image src={xtwitter} alt="twitter icon" width={20}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* And co... 💥*/}
      <div className="relative w-full flex gap-16 justify-between items-center h-20 bg-white shadow-2xl z-50">
        <div className="h-full pl-5 flex items-center">
          <Link
            href="/"
            className=" text-lg md:text-2xl xl:text-4xl font-semibold flex items-center gap-4 whitespace-nowrap"
          >
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-8 lg:h-20 lg:w-20"
            />
            <span className="text-green-500">Green-Gust Energy</span>
          </Link>
        </div>
        <NavLinks />
        <Hambourger />
      </div>
    </section>
  );
}
