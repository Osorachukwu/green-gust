"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function NavLinks() {
  const [dropDownOne, setDropDownOne] = useState(false);
  const pathname = usePathname();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/service" },
    { title: "Project", path: "/project" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-full hidden md:block">
      <div className="flex items-center gap-4 text-lg h-full">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${pathname === link.path ? "text-purple-800" : ""} hover:text-purple-500`}
          >
            {link.title}
          </Link>
        ))}
        {/* 💥 Drop-downs */}
        <div
          onMouseEnter={() => setDropDownOne(!dropDownOne)}
          onMouseLeave={() => setDropDownOne(!dropDownOne)}
          className="relative whitespace-nowrap p-2 md:p-5"
        >
          <Link href="" className="flex">
            <span> Pages </span>
            <ChevronDown />
          </Link>
          {dropDownOne ? (
            <div>
              <div className="w-40 text-sm absolute top-[4.5rem] left-0 bg-white z-50 text-start flex flex-col rounded-xl overflow-hidden shadow-2xl">
                <Link href="/features" className="py-1 px-3 hover:font-bold">
                  Feature
                </Link>
                <Link href="/quote" className="py-1 px-3">
                  Free Quote
                </Link>
                <Link href="/quote" className="py-1 px-3">
                  Our Team
                </Link>
                <Link href="/players" className="py-1 px-3">
                  Testimonial
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        {/* 💥 */}
        <Link
          href="/contact"
          className="flex items-center text-white px-4 bg-green-400 h-full"
        >
          GET A QOUTE <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
