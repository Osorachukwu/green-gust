import React from "react";
import Image from "next/image";
import Link from "next/link";
import fixedPanels from "@/assets/fixed-panels.jpg";
import { CircleCheck } from "lucide-react";
import fixingPanels from "@/assets/fixingPanels.jpg";

export default function AboutUs() {
  return (
    <div className="px-4 mx-auto flex flex-col md:flex-row mb-16 pt-6">
      <div className="h-full lg:w-[50%] md:w-[50%]">
        <Image src={fixingPanels} alt="panels" className="w-full h-full" />
      </div>

      <div className="text-start lg:text-lg md:w-[50%] p-3 md:px-16 md:py-10  bg-slate-100">
        <p className="text-green-500 font-semibold">About Us</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">
          25+ Years Experience In Solar & Renewable Energy Industry
        </p>
        <p className="pt-5 pb-3">
          Green Gust is an integrated energy company delivering total clean
          energy solutions. We have played a pivotal role in the evolution of
          solar energy in Europe Asia since our establishment in 2009, paving
          the way to a brighter, cleaner tomorrow.
        </p>

        <div className="">
          <div className="flex gap-2 text-base">
            <CircleCheck size={25} className="text-green-500" />
            <p>
              Solar PV systems. To date, our portfolio consists of more than
              300MW of commercial
            </p>
          </div>
          <div className="flex gap-2 text-base">
            <CircleCheck size={25} className="text-green-500" />
            <p>
              Inspecting and maintaining these assets is not easy, especially in
              the harsh North Sea conditions
            </p>
          </div>
          <div className="flex gap-2 text-base">
            <CircleCheck size={25} className="text-green-500" />
            <p>
              Inspecting and maintaining these assets is not easy, especially in
              the harsh North Sea conditions
            </p>
          </div>
        </div>

        <div className="my-5">
          <Link href="/about">
            <p className="bg-green-500 hover:bg-green-500 text-white rounded-full inline-block py-4 px-6">
              Explore More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
