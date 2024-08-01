'use client'
import './globals.css';
import AboutUs from "@/components/AboutUs";
import BackToTop from "@/components/BackToTop";
import Bubles from "@/components/hero/home/Bubles";
import HeroCarousel from "@/components/hero/home/carousel";
import HeroDetails from "@/components/hero/home/HeroDetails";
import HeroVid from "@/components/hero/home/HeroVid";
import VidCarousel from "@/components/hero/home/VidCarousel";
import Hero from "@/components/hero/others/Hero";
import OurProjects from "@/components/OurProjects";
import OurTeam from "@/components/OurTeam";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleBubleClick = (index) => {
    setActiveSlide(index);
  };
  return (
    <section className="">
      {/* <HeroCarousel /> */}
      {/* <HeroVid /> */}
      <VidCarousel activeSlide={activeSlide}/>
      <HeroDetails />
      <AboutUs />
      <Service />
      <OurProjects />
      <OurTeam />
      <BackToTop />
      <Testimonial />
      <Bubles onBubleClick={handleBubleClick}/>
    </section>
  );
}
