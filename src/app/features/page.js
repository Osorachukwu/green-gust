import React from 'react';
import Image from 'next/image';
import HeroDetails from '@/components/hero/home/HeroDetails';
import Hero from '@/components/hero/others/Hero';
import chimneies from '@/assets/chimnies.jpg';
import {
    ArrowRight,
    DraftingCompass,
    Check,
    Headset,
    UserRoundCheck,
  } from "lucide-react";

export default function FeaturesPage() {
    let whyChooseUs = [
        { image: <Check />, title: "Quality", desc: "Services" },
        { image: <UserRoundCheck />, title: "Quality", desc: "Services" },
        { image: <DraftingCompass />, title: "Quality", desc: "Services" },
        { image: <Headset />, title: "Quality", desc: "Services" },
      ];
  return (
    <div>
        <Hero title="Features"/>
        <HeroDetails />
        
      {/* Why Choose Us */}
      <div className="flex flex-col md:flex-row mx-auto bg-slate-100">
        <div className="text-start lg:text-lg md:w-[50%] md:px-16  md:py-10">
          <p className="text-green-500 font-semibold">Why Choose Us</p>
          <p className="text-xl py-2 font-bold lg:text-3xl">
            Complete Commercial <br /> & Residential Solar Systems
          </p>
          <p className="pt-5 pb-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo erat amet
          </p>

          <div className="grid gap-5 grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="border-green-500 border-2 h-10 w-10 rounded-full flex justify-center items-center">
                  {item.image}
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[50%]">
          <Image src={chimneies} alt="panels" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
