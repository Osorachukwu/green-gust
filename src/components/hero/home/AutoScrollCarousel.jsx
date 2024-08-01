"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import xtwitter from "@/assets/xtwitter-green.svg";
import Autoplay from "embla-carousel-autoplay";
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AutoScrollCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="w-full -z-50 bg-slate-900 text-green-100 md:hidden py-1" id="top">
      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex justify-center gap-2 items-center text-sm">
              <MapPin size={18} stroke="rgb(34 197 94)" />
              <p>ADDRESS: Agerakvo 38, 860 Copenhagen, Denmark</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center gap-2 items-center text-sm">
              <Clock size={18} stroke="rgb(34 197 94)" />
              <p>MON - Fri 9.00AM - 9.00PM</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center gap-2 items-center text-sm">
              <Phone size={18} stroke="rgb(34 197 94)" />
              <p>+4592457638</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center gap-2 items-center text-sm">
              <Link
                href="https://twitter.com/energygust?s=21&t=dkwdg1Q6zPYDE2VuKxBJPA"
                className="px-2"
              >
                <Image src={xtwitter} alt="twitter icon" width={20} />
              </Link>
              <p>Twitter</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
