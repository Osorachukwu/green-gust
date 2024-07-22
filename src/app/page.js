import AboutUs from "@/components/AboutUs";
import BackToTop from "@/components/BackToTop";
import HeroCarousel from "@/components/hero/home/carousel";
import HeroDetails from "@/components/hero/home/HeroDetails";
import Hero from "@/components/hero/others/Hero";
import OurProjects from "@/components/OurProjects";
import OurTeam from "@/components/OurTeam";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      {/* <Hero /> */}
      <HeroCarousel />
      <HeroDetails />
      <AboutUs />
      <Service />
      <OurProjects />
      <OurTeam />
      <BackToTop />
    </section>
  );
}
