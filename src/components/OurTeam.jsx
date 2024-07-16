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
        { icon: Facebook, linkUrl: "exampleUrl1" },
        { icon: Twitter, linkUrl: "exampleUrl2" },
        { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamOne,
      title: "Peter Enonk",
      decs: "Energy",
      socials: [
        { icon: Facebook, linkUrl: "exampleUrl1" },
        { icon: Twitter, linkUrl: "exampleUrl2" },
        { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamOne,
      title: "Attin Willies",
      decs: "Engineer",
      socials: [
        { icon: Facebook, linkUrl: "exampleUrl1" },
        { icon: Twitter, linkUrl: "exampleUrl2" },
        { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
  ];

  return (
    <div>
      <div className="text-center text-lg font-semibold">
        <p>Team Members</p>
        <p className="text-3xl">Experienced Team Members</p>
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
                <div key={j} className="border-2 border-black p-3 rounded-full">
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
