import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/logo-plain.png";
import Hambourger from "./Hambourger";

export default function NavBar() {
  return (
    <section className="w-full mx-auto flex gap-16 justify-between items-center h-16 bg-white shadow-2xl z-50">
      <div className="h-full px-5 md:px-10 flex items-center">
        <Link
          href="/"
          className=" text-lg md:text-3xl font-semibold flex items-center gap-4 whitespace-nowrap"
        >
          <Image src={logo} alt="Logo" className="h-8 w-8  lg:h-12 lg:w-12" />
          <span>Green Gust</span>
        </Link>
      </div>
      <NavLinks />
      <Hambourger />
    </section>
  );
}
