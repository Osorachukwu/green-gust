import React from "react";
import Image from "next/image";
import Link from "next/link";
import teamOne from "@/assets/team-1.jpg";
import { Facebook, Twitch, Instagram, Twitter } from "lucide-react";

export default function OurTeam() {
  const teamMembers = [
    {
      image: teamOne,
      title: "Andy Robben",
      decs: "Designer",
      socials: [
        { icon: Twitter, linkUrl: "exampleUrl2" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamOne,
      title: "Peter Enonk",
      decs: "Energy",
      socials: [
        { icon: Twitter, linkUrl: "exampleUrl2" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamOne,
      title: "Attin Willies",
      decs: "Engineer",
      socials: [
        { icon: Twitter, linkUrl: "exampleUrl2" },
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                <div key={j} className="border-2 border-green-500 p-3 rounded-full text-green-500">
                  <Link key={j} href={social.linkUrl}>
                    <social.icon />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
