"use client";
import * as React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import testimonialOne from "@/assets/testimonial-1.jpg";
import testimonialTwo from "@/assets/testimonial-2.jpg";
import testimonialThree from "@/assets/testimonial-3.jpg";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="my-20">
      <div className="text-center text-lg font-semibold pb-10">
        <p className="text-green-500 font-semibold">Testimonial</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">
          What Our Clients Say!
        </p>
      </div> 

      {/* Carousel */}
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          focus: "center",
          autoplay: true,
          interval: 3000,
          gap: "0.5rem",
          pagination: false,
          arrows: true,
        }}
        aria-label="Testimonials"
      >
        <SplideSlide>
          <div className="flex flex-col items-center relative md:pb-16">
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
            <div className="text-center custome-shadow py-6 px-20 mt-8 rounded-md">
              <p className="text-slate-400 mb-5">Best in the market and also professional in their services</p>
              <p className="italic text-slate-400">
                <span className="font-semibold not-italic text-black">Angee Enoch</span> <br /> Lawyer
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col items-center relative md:pb-16">
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
            <div className="text-center custome-shadow py-6 px-20 mt-8 rounded-md">
              <p className="text-slate-400 mb-5">Introducing our smart intergrated system that uses inteligence to secure <br /> efficiency, turning insights into savings. Equipped with state-of-the-art <br /> technology and software, oue digital systems have been proven to significantly <br /> boost flexibility and cost saving while minimising downtime error.</p>
              <p className="italic text-slate-400">
                <span className="font-semibold not-italic text-black">Todd Penner</span> <br /> Engineer
              </p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col items-center relative md:pb-16">
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
            <div className="text-center custome-shadow py-6 px-20 mt-8 rounded-md">
              <p className="text-slate-400 mb-5">Switching to clean energy is the first step towards energy independence. <br />Moving forward, owners must have proficient control over their energy <br /> consumption, maintaining a balance between low energy use, low cost and <br />high productivity</p>
              <p className="italic text-slate-400">
                <span className="font-semibold not-italic text-black">Jacob Roberts</span> <br /> Freelancer
              </p>
            </div>
          </div>
        </SplideSlide>
        
      </Splide>
    </div>
  );
}
