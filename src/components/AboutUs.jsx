import React from "react";
import Image from "next/image";
import Link from "next/link";
import fixedPanels from "@/assets/fixed-panels.jpg";
import { Check } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <div className="mx-auto flex flex-col lg:flex-row mb-6">
        <div className="lg:w-[50%] bg-red-400">
          <Image src={fixedPanels} alt="panels" className="w-full" />
        </div>

        <div className="text-start space-y-4 lg:text-lg font-semibold lg:w-[50%] md:pl-10 bg-slate-200 md:py-10">
          <p>About Us</p>
          <p className="text-xl lg:text-3xl">
            25+ Years Experience In Solar & Renewable Energy Industry
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo erat amet
          </p>

          <div>
            <div className="flex items-center gap-2">
              <div className="bg-green-300 h-5 w-5 rounded-full flex justify-center items-center">
                <Check size={15} />
              </div>
              <p>Diam dolor diam ipsum</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-300 h-5 w-5 rounded-full flex justify-center items-center">
                <Check size={15} />
              </div>
              <p>Diam dolor diam ipsum</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-300 h-5 w-5 rounded-full flex justify-center items-center">
                <Check size={15} />
              </div>
              <p>Diam dolor diam ipsum</p>
            </div>
          </div>

          <div className="pt-5">
            <Link
              href="/about"
              className="bg-green-500 text-white py-5 px-10 rounded-full"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
