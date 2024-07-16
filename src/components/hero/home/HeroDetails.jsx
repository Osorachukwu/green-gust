import React from "react";
import Image from "next/image";
// import awardIcon from "@/assets/awardIcon.svg";
// import { Check } from "lucide-react";
import happyCustomersIcon from '@/assets/happy-customers.png';
import awardIcon from '@/assets/awards.png';
import checkIcon from '@/assets/check.png';
import checkIconOne from '@/assets/checkIcon.svg';
import expertWorkersIcon from '@/assets/expert-workers.png';


export default function HeroDetails() {
  let heroDetails = [
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
        <div key={i}>
          <div className="flex gap-3 items-center mb-3">
            <div className="h-[45px] w-[45px] relative bg-pink-300 p-3 rounded-full">
              <Image src={item.image} alt={item.title} fill />
            </div>
            <p className="text-3xl font-bold">{item.digits}</p>
          </div>
          <p className="text-lg font-semibold">{item.title}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
