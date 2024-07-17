import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './hero.module.css'
import heroBanner from "@/assets/carousel-1.jpg";

export default function Hero({ title }) {
  return (
    <div className={`${styles.parent} h-[50vh] relative mb-20`}>
      <p className="text-5xl text-white font-bold absolute top-32 left-40">{title}</p>
      
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
