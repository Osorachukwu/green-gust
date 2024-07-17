import React from "react";
import Image from "next/image";
import Link from "next/link";
import fixedPanels from "@/assets/fixed-panels.jpg";
import fixedPanelsTwo from "@/assets/fixedPanelsTwo.jpg";
import fixingPanelsTwo from "@/assets/workersTurbins.jpg";
import fixingPanelsThree from "@/assets/fixingPanelsThree.jpg";
import chimneies from "@/assets/chimnies.jpg";
import chimneiesSmall from "@/assets/chimniesSmall.jpg";
import iceyTurbin from "@/assets/icey-desert-turbins.jpg";
import bulb from "@/assets/idea-bulb.png";
import {
  ArrowRight,
  DraftingCompass,
  Check,
  Headset,
  UserRoundCheck,
} from "lucide-react";

export default function Service() {
  let serviceItems = [
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: "We offer everything from specific services on an individual technician level, to complete service teams with project management and full-scope solutions.",
      linkUrl: "",
    },
    {
      image: iceyTurbin,
      icon: bulb,
      title: "Wind Turbines",
      desc: "Our wide-ranging expertise covers all major wind turbine models and includes both retrofit work as well as scheduled service and maintenance.",
      linkUrl: "",
    },
    {
      image: fixedPanelsTwo,
      icon: bulb,
      title: "Hydropower Plants",
      desc: "We are able to deploy an expert close visual inspection of the blade to correctly classify levels of damage, using rope access techniques as the quickest method to save on lost production.",
      linkUrl: "",
    },
    {
      image: fixingPanelsTwo,
      icon: bulb,
      title: "Solar panels",
      desc: "The costs for renewable technologies will continue to fall significantly year on year, says the International Renewable Energy Agency (IRENA) in its latest report. .",
      linkUrl: "",
    },
    {
      image: fixingPanelsThree,
      icon: bulb,
      title: "Wind Turbines",
      desc: "In the last decade, the cost of large scale solar system projects has fallen as much as 85%, and cost of solar PV electricity has fallen 7% year-on-year.",
      linkUrl: "",
    },
    {
      image: chimneiesSmall,
      icon: bulb,
      title: "Hydropower Plants",
      desc: "Cost of large scale solar system projects has fallen cheaper.",
      linkUrl: "",
    },
  ];

  let whyChooseUs = [
    { image: <Check />, title: "Quality", desc: "Services" },
    { image: <UserRoundCheck />, title: "Quality", desc: "Services" },
    { image: <DraftingCompass />, title: "Quality", desc: "Services" },
    { image: <Headset />, title: "Quality", desc: "Services" },
  ];

  return (
    <div className="mx-auto mb-16">
      <div className="px-4 md:px-20 pb-32">
        <div className="text-center text-lg font-semibold pb-16">
          <p className="text-purple-800 font-semibold">Our Services</p>
          <p className="text-xl py-2 font-bold lg:text-3xl">
            We Are Pioneers In The World Of <br /> Renewable Energy
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 md:gap-20 w-full">
          {serviceItems.map((item, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt="fixed solar panels"
                className="mb-10"
              />
              {/* <div className="h-16 w-16 bg-green-400 rounded-full flex justify-center items-center -mt-20 ml-4 z-20">
              <Image src={item.icon} alt="idea-bulb" height={40} width={40} className="z-20"/>
            </div> */}
              <div className="space-y-3 px-10 pb-6">
                <p className="text-xl font-semibold">{item.title}</p>
                <p>{item.desc}</p>
                <Link
                  href={item.linkUrl}
                  className="flex gap-1 items-center font-medium text-sm text-purple-800 hover:text-purple-500"
                >
                  Read more <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex flex-col md:flex-row mx-auto px-4">
        <div className="text-start lg:text-lg md:w-[50%] md:px-16 bg-slate-100 p-3 md:py-10">
          <p className="text-purple-800 font-semibold">Why Choose Us</p>
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
              <div key={i} className="flex items-center gap-2 md:gap-5">
                <div className="border-purple-800 border-2 h-10 w-10 rounded-full flex justify-center items-center">
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
  );
}
