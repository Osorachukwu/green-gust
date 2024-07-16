"use client";
import * as React from "react";
import imgOne from "@/assets/wind-banner.png";
import imgTwo from "@/assets/RENEWABLE-ENERGY.webp";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="w-full -z-50">
      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div
              className="relative p-1 h-[500px] md:h-[95vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${imgOne.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Harness the Power of Wind Energy
                  </h1>
                  <p className="mt-2 text-sm md:text-lg">
                    Wind energy is a clean, renewable source of power that helps
                    reduce our dependence on fossil fuels and combat climate
                    change.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative p-1 h-[500px] md:h-[95vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${imgTwo.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Embrace Renewable Energy
                  </h1>
                  <p className="mt-2 text-sm md:text-lg">
                    Renewable energy sources like wind and solar power are
                    essential for a sustainable future, reducing greenhouse gas
                    emissions and preserving natural resources.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
