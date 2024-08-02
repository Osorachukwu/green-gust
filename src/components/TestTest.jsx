import React from "react";
import Image from "next/image";
import testimonialOne from "@/assets/testimonial-1.jpg";
import testimonialTwo from "@/assets/testimonial-2.jpg";
import testimonialThree from "@/assets/testimonial-3.jpg";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";

function TestTest() {
  return (
    <div>
      <div className="flex flex-col items-center relative md:pb-16">
        <div className="flex items-center">
          <ArrowLeft stroke=" rgb(34 197 94 )"/>
          <div className="h-28 w-28 relative rounded-full">
            <Image
              src={testimonialOne}
              alt=""
              fill
              className="z-0 rounded-full"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-green-500 p-1 rounded-full z-10 rotate-180">
              <Quote fill="white" stroke="" className="z-10" />
            </div>
          </div>
          <ArrowRight stroke=" rgb(34 197 94 )"/>
        </div>
        <div className="text-center custome-shadow py-6 px-20 mt-8 rounded-md">
          <p className="text-slate-400 mb-5">
            Best in the market and also professional in their services
          </p>
          <p className="italic text-slate-400">
            <span className="font-semibold not-italic text-black">
              Angee Enoch
            </span>{" "}
            <br /> Lawyer
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center relative md:pb-16">
        <div className="flex items-center">
          <ArrowLeft stroke=" rgb(34 197 94 )"/>
          <div className="h-28 w-28 relative rounded-full">
            <Image
              src={testimonialTwo}
              alt=""
              fill
              className="z-0 rounded-full"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-green-500 p-1 rounded-full z-10 rotate-180">
              <Quote fill="white" stroke="" className="z-10" />
            </div>
          </div>
          <ArrowRight stroke=" rgb(34 197 94 )"/>
        </div>
        <div className="text-center custome-shadow py-6 px-20 mt-8 rounded-md">
          <p className="text-slate-400 mb-5">
            Best in the market and also professional in their services
          </p>
          <p className="italic text-slate-400">
            <span className="font-semibold not-italic text-black">
              Angee Enoch
            </span>{" "}
            <br /> Lawyer
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center relative md:pb-16">
        <div className="flex items-center">
          <ArrowLeft stroke=" rgb(34 197 94 )"/>
          <div className="h-28 w-28 relative rounded-full">
            <Image
              src={testimonialThree}
              alt=""
              fill
              className="z-0 rounded-full"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-green-500 p-1 rounded-full z-10 rotate-180">
              <Quote fill="white" stroke="" className="z-10" />
            </div>
          </div>
          <ArrowRight stroke=" rgb(34 197 94 )"/>
        </div>
        <div className="text-center custome-shadow py-6 px-20 mt-8 rounded-md">
          <p className="text-slate-400 mb-5">
            Best in the market and also professional in their services
          </p>
          <p className="italic text-slate-400">
            <span className="font-semibold not-italic text-black">
              Angee Enoch
            </span>{" "}
            <br /> Lawyer
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestTest;
