import React from "react";
import Image from "next/image";
import Link from "next/link";
import teamOne from "@/assets/team-1.jpg";
import teamTwo from "@/assets/team-2.jpg";
import teamThree from "@/assets/team-3.jpg";

import { Facebook, Twitch, Instagram, Twitter } from "lucide-react";

export default function OurTeam() {
  const teamMembers = [
    {
      image: teamOne,
      title: "Andy Robben",
      decs: "Designer",
      socials: [
        { icon: <Twitter fill="rgb(34 197 94)" />, linkUrl: "exampleUrl2" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamTwo,
      title: "Peter Enonk",
      decs: "Energy",
      socials: [
        { icon: <Twitter fill="rgb(34 197 94)" />, linkUrl: "exampleUrl2" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamThree,
      title: "Attin Willies",
      decs: "Engineer",
      socials: [
        { icon: <Twitter fill="rgb(34 197 94)" />, linkUrl: "exampleUrl2" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
  ];

  return (
    <div className="pb-10">
      <div className="text-center text-lg font-semibold py-10">
        <p  className="text-green-500 font-semibold">Team Members</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">Experienced Team Members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
        {teamMembers.map((item, i) => (
          <div key={i} className="flex justify-center gap-3 bg-white shadow-xl">
            <div>
              <Image
                src={item.image}
                alt={item.title}
                height={340}
                className="rounded-tr-[3rem]"
              />
              <div className="py-3">
                <p className="font-semibold">{item.title}</p>
                <p>{item.decs}</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3 justify-center">
              {item.socials.map((social, j) => (
                <Link key={j} href={social.linkUrl} className="border-2 border-green-500 mr-3 p-1 md:p-2 rounded-full text-white hover:bg-green-500">
                  <div key={j} className="">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
