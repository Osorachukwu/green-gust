import React from "react";
import Image from "next/image";
import Link from "next/link";
import quotePhoto from "@/assets/quote.jpg";

export default function FreeQuote() {
  return (
    <div className="px-4 mx-auto flex flex-col md:flex-row mb-6">
      <div className="lg:w-[50%] bg-purple-500 mb-4 md:w-[50%]">
        <Image src={quotePhoto} alt="panels" className="w-full h-full" />
      </div>

      <div className="text-start lg:text-lg md:w-[50%] md:px-16 bg-slate-200 md:py-10">
      <p className="text-purple-800 font-semibold">Free Qoute</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">
         Get A Free Qoute
        </p>
        <p className="pt-5 pb-3">
          Green Gust is an integrated energy company delivering total clean
          energy solutions. We have played a pivotal role in the evolution of
          solar energy in Europe Asia since our establishment in 2009, paving
          the way to a brighter, cleaner tomorrow.
        </p>

        {/* Form */}
        <div>
          <form className="flex flex-col w-full">
            <div className="grid grid-cols-2 gap-5 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-md h-14 outline-purple-500 px-4"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="rounded-md h-14 outline-purple-500 px-4"
              />
              <input
                type="text"
                placeholder="Your Mobile"
                className="rounded-md h-14 outline-purple-500 px-4"
              />
              <input
                type="text"
                placeholder="Your Select A Service"
                className="rounded-md h-14 outline-purple-500 px-4"
              />
            </div>

            <textarea
              rows={3}
              className="rounded-md h-14 outline-purple-500 px-4"
              placeholder="Special Text..."
            ></textarea>
            <div className="my-5">
              <Link href="/about">
                <p className="bg-purple-500 text-white rounded-full inline-block py-4 px-10">
                  Submit
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
