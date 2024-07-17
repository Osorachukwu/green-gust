import AboutUs from "@/components/AboutUs";
import HeroDetails from "@/components/hero/home/HeroDetails";
import Hero from "@/components/hero/others/Hero";
import OurTeam from "@/components/OurTeam";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <Hero title="About Us"/>
      <HeroDetails />
      <AboutUs />
      <OurTeam />
    </div>
  );
}
