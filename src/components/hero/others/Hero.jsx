import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBanner from "@/assets/carousel-1.jpg";

export default function Hero({ title }) {
  return (
    <div>
      <div className="relative h-[105vh] w-full bg-purple-500">
        <Image src={heroBanner} alt="" fill />
        <div className="absolute left-32 top-[25rem] space-y-3 text-white">
          <p className="text-6xl font-bold leading-[60px] ">
            Poineers Of Wind And <br /> Renewable Energy
          </p>
          <p className="text-lg font-semibold">
            We explore ways to deepen our contribution to the enviroment and
            social <br /> well-being of our communities while delivering long
            term economic values to our stakeholders
          </p>

          <div className="pt-5">
            <Link
              href="/about"
              className="bg-green-500 py-5 px-10 rounded-full"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// 💥Next.js IMAGES
// import Image from "next/image";
// <Image src="/brand.jpg" alt="" />
// Next images have mandatory width and height properties.. there are two ways you can go about it
// 1. Adding them directly <Image src="/brand.jpg" alt="" width={50} height={50}/>
// 2. The image tag can be put inside a container(div) and then the
// apply position of relative, width and height to the container. Also use the "fill" attribute on the image tag. <Image src="/brand.jpg" alt="" fill/>
// To use external images(linking to images on other websites) checkout 1:06:55 of the video
// The images can be stored in the public folder
