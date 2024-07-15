import React from "react";
import Image from "next/image";
import awardIcon from "@/assets/awardIcon.svg";

export default function HeroDetails() {
  let heroDetails = [
    {
      image: awardIcon,
      digits: 3453,
      title: "Happy Customers",
      desc: "Our commitment to our customers knows no bounds",
    },
    {
      image: awardIcon,
      digits: 4234,
      title: "Project Done",
      desc: "Thus, every transaction we make is to provide you with a seamless experience of your power independence.",
    },
    {
      image: awardIcon,
      digits: 3123,
      title: "Awards Win",
      desc: "Join The Commitment To Net Zero By 2050 With Us",
    },
    {
      image: awardIcon,
      digits: 1831,
      title: "Expert Workers",
      desc: "Discuss With Us For More Value -Added Support",
    },
  ];
  return (
    <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-4 justify-between gap-5 md:gap:-16 xl:gap-36">
      {heroDetails.map((item, i) => (
        <div key={i} className="space-y-3">
          <div className="flex gap-3 items-center">
            <div className="bg-primary p-3 rounded-full">
              <Image src={item.image} alt={item.title} />
            </div>
            <p className="text-4xl font-semibold">{item.digits}</p>
          </div>
          <p className="text-xl font-semibold">{item.title}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
