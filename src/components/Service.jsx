import React from "react";
import Image from "next/image";
import Link from "next/link";
import fixedPanels from "@/assets/fixed-panels.jpg";
import bulb from "@/assets/idea-bulb.png";
import { ArrowRight } from "lucide-react";

export default function Service() {
  let serviceItems = [
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: " Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      linkUrl: "",
    },
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: " Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      linkUrl: "",
    },
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: " Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      linkUrl: "",
    },
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: " Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      linkUrl: "",
    },
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: " Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      linkUrl: "",
    },
    {
      image: fixedPanels,
      icon: bulb,
      title: "Solar panels",
      desc: " Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      linkUrl: "",
    },
  ];

  let whyChooseUs = [
    { image: bulb, title: "Quality", desc: "Services" },
    { image: bulb, title: "Quality", desc: "Services" },
    { image: bulb, title: "Quality", desc: "Services" },
    { image: bulb, title: "Quality", desc: "Services" },
  ];

  return (
    <div>
     <div className="text-center text-lg font-semibold pb-16">
        <p>Our projects</p>
        <p className="text-3xl">
        We Are Pioneers In The World Of <br /> Renewable Energy
        </p>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-3 gap-20 bg-white">
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
            <div className="space-y-3">
              <p className="text-2xl font-semibold">{item.title}</p>
              <p>{item.desc}</p>
              <Link href="" className="flex">
                Read more <ArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="flex">
        <div className="text-start text-lg font-semibold w-[50%] pl-10">
          <p>Why Choose Us</p>
          <p className="text-3xl">
            Complete Commercial & Residential Solar Systems
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo erat amet
          </p>

          <div className="grid gap-5 grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="bg-green-300 h-10 w-10 rounded-full flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={30}
                    width={30}
                  />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[50%] bg-red-400">
          <Image src={fixedPanels} alt="panels" className="w-full" />
        </div>
      </div>
    </div>
  );
}
