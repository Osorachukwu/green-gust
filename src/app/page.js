import AboutUs from "@/components/AboutUs";
import HeroDetails from "@/components/hero/home/HeroDetails";
import Hero from "@/components/hero/others/Hero";
import OurProjects from "@/components/OurProjects";
import OurTeam from "@/components/OurTeam";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <Hero />
      <HeroDetails />
      <AboutUs />
      <Service />
      <OurProjects />
      <OurTeam />
    </section>
  );
}
