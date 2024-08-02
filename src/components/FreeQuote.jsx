import React from "react";
import Image from "next/image";
import Link from "next/link";
import quotePhoto from "@/assets/quote.jpg";
import ContactForm from "./forms/ContactForm";

export default function FreeQuote() {

  return (
    <div className="px-4 mx-auto flex flex-col md:flex-row mb-6">
      <div className="h-full lg:w-[50%] md:w-[50%]">
        <Image src={quotePhoto} alt="panels" className="w-full h-full" />
      </div>

      <div className="text-start lg:text-lg md:w-[50%] md:px-16 bg-slate-200 md:py-10">
        <p className="text-green-500 font-semibold">Free Qoute</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">Get A Free Qoute</p>
        <p className="pt-5 pb-3">
          Green Gust is an integrated energy company delivering total clean
          energy solutions. We have played a pivotal role in the evolution of
          solar energy in Europe Asia since our establishment in 2009, paving
          the way to a brighter, cleaner tomorrow.
        </p>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
