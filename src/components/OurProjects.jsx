import React from "react";
import Image from "next/image";
import tubins from "@/assets/icey-desert-turbins.jpg";

export default function OurProjects() {
  let ourProjects = [
    {
      image: tubins,
      title: "Solar panels",
      desc: "We Are pioneers of solar & renewable energy industry",
    },
    {
      image: tubins,
      title: "Solar panels",
      desc: "We Are pioneers of solar & renewable energy industry",
    },
    {
      image: tubins,
      title: "Solar panels",
      desc: "We Are pioneers of solar & renewable energy industry",
    },
    {
      image: tubins,
      title: "Solar panels",
      desc: "We Are pioneers of solar & renewable energy industry",
    },
    {
      image: tubins,
      title: "Solar panels",
      desc: "We Are pioneers of solar & renewable energy industry",
    },
    {
      image: tubins,
      title: "Solar panels",
      desc: "We Are pioneers of solar & renewable energy industry",
    },
  ];
  return (
    <div className="container px-4 mx-auto">
      <div className="text-center text-lg font-semibold pb-16">
        <p>Our projects</p>
        <p className="text-3xl">
        Visit Our Latest Solar And <br /> Renewable Energy Projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {ourProjects.map((item, i) => (
          <div key={i} className="rounded-lg overflow-hidden">
            <Image src={item.image} alt={item.title} />
            <div className="flex">
              <p className="border-b-2 my-4 py-2">{item.title}</p>
            </div>
            <p className="text-xl font-bold">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
