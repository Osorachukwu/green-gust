"use client";
import * as React from "react";
import Link from "next/link";
import imgOne from "@/assets/wind-banner.png";
import imgTwo from "@/assets/RENEWABLE-ENERGY.webp";
import imgThree from "@/assets/carousel-3.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Bubles from "./Bubles";

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="w-full -z-50" id="top">
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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="text-white p-4 lg:pl-32 md:pt-40">
                  <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold">
                    Pioneers of solar And <br /> renewable energy
                  </h1>
                  <p className="mt-2 text-sm md:text-lg md:mt-5">
                    We explore new ways to deepen our contributions to the
                    environmental and social <br /> well-being of our
                    communities while delivering long-term economic value to our
                    stakeholders.
                  </p>
                  <div className="mt-20">
                    <Link href="/about">
                      <p className="bg-green-500 hover:bg-green-400 text-white rounded-full inline-block py-4 px-6">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative p-1 h-[500px] md:h-[95vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${imgTwo.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="text-white p-4 lg:pl-32 md:pt-40">
                  <h1 className="text-2xl md:text-5xl font-extrabold">
                    Hydro power potential <br /> export preparation
                  </h1>
                  <p className="mt-2 text-sm md:text-lg md:mt-5">
                    This involved assembling international 23 person team,
                    travelling between turbines by <br /> boat and living on
                    posidon.
                  </p>
                  <div className="my-20">
                    <Link href="/about">
                      <p className="bg-green-500 hover:bg-green-400 text-white rounded-full inline-block py-4 px-6">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="relative p-1 h-[500px] md:h-[95vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${imgThree.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="text-white p-4 lg:pl-32 md:pt-40">
                  <h1 className="text-2xl md:text-5xl font-extrabold">
                    Generating electricity <br /> from Wind farms is more <br />{" "}
                    efficient at sea
                  </h1>
                  <p className="mt-2 text-sm md:text-lg md:mt-5">
                    Around 20 miles from the westernmost point of Denmark is
                    Blavands Huk, home to the Horns <br /> Rev 2, a wind farm
                    with 91 Siemens turbines.
                  </p>
                  <div className="my-20">
                    <Link href="/about">
                      <p className="bg-green-500 hover:bg-green-400 text-white rounded-full inline-block py-4 px-6">
                        Read More
                      </p>
                    </Link>
                  </div>
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
