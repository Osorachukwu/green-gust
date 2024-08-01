import React from "react";
import Image from "next/image";
import Link from "next/link";
import teamOne from "@/assets/team-1.jpg";
import teamTwo from "@/assets/team-2.jpg";
import teamThree from "@/assets/team-3.jpg";
import xtwitter from "@/assets/xtwitter-white.svg";

import { Facebook, Twitch, Instagram, Twitter } from "lucide-react";

export default function OurTeam() {
  const teamMembers = [
    {
      image: teamOne,
      title: "Andy Robben",
      decs: "Designer",
      socials: [
        { icon: xtwitter, linkUrl: "https://twitter.com/energygust?s=21&t=dkwdg1Q6zPYDE2VuKxBJPA" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamTwo,
      title: "Peter Enonk",
      decs: "Energy",
      socials: [
        { icon: xtwitter, linkUrl: "https://twitter.com/energygust?s=21&t=dkwdg1Q6zPYDE2VuKxBJPA" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
    {
      image: teamThree,
      title: "Attin Willies",
      decs: "Engineer",
      socials: [
        { icon: xtwitter, linkUrl: "https://twitter.com/energygust?s=21&t=dkwdg1Q6zPYDE2VuKxBJPA" },
        // { icon: Facebook, linkUrl: "exampleUrl1" },
        // { icon: Instagram, linkUrl: "exampleUrl3" },
      ],
    },
  ];

  return (
    <div className="pb-10">
      <div className="text-center text-lg font-semibold py-10">
        <p className="text-green-500 font-semibold">Team Members</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">
          Experienced Team Members
        </p>
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
                <Link
                  key={j}
                  href={social.linkUrl}
                  className="bg-green-500 mr-3 p-1 md:p-2 rounded-full text-white hover:bg-green-400 flex justify-center items-center"
                >
                  {/* {social.icon} */}
                  <div className="flex justify-center">
                    <Image src={social.icon} alt={social.linkUrl} width={30} />
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
