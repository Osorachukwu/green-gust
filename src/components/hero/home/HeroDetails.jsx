'use client';
import React, { useState } from "react";
import Image from "next/image";
import happyCustomersIcon from '@/assets/white-expert-workers.png';
import awardIcon from '@/assets/white-awards.png';
import checkIconOne from '@/assets/white-check.png';
import expertWorkersIcon from '@/assets/white-happy-customers.png';

export default function HeroDetails() {
  const [hoverStates, setHoverStates] = useState(
    new Array(4).fill(false) // Assuming there are 4 items in heroDetails
  );

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const heroDetails = [
    {
      image: happyCustomersIcon,
      digits: 3453,
      title: "Happy Customers",
      desc: "Our commitment to our customers knows no bounds",
    },
    {
      image: checkIconOne,
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
      image: expertWorkersIcon,
      digits: 1831,
      title: "Expert Workers",
      desc: "Discuss With Us For More Value -Added Support",
    },
  ];

  return (
    <div className="container px-4 py-20 mx-auto grid grid-cols-1 md:grid-cols-4 justify-between gap-5 md:gap:-16 xl:gap-36">
      {heroDetails.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave(i)}
        >
          <div className="flex gap-3 items-center mb-3">
            <div
              className={`h-[45px] w-[45px] flex items-center justify-center p-2 rounded-full border-2 ${
                hoverStates[i] ? "bg-green-500" : "bg-green-500"
              }`}
            >
              <Image src={item.image} alt={item.title} width={40} height={40} />
            </div>
            <p className="text-3xl font-bold">{item.digits}</p>
          </div>
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
