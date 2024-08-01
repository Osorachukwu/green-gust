
import React from 'react'
import Image from 'next/image';
import imgOne from "@/assets/wind-banner.png";
import imgTwo from "@/assets/RENEWABLE-ENERGY.webp";
import imgThree from '@/assets/carousel-3.jpg'

export default function Bubles() {
    const bubleImages = [imgOne, imgTwo, imgThree];
  return (
    <div className='space-y-2 absolute right-6 bottom-40 md:bottom-10'>
        {bubleImages.map((image, i)=> (
            <div key={i} className='relative h-[50px] w-[50px] rounded-full overflow-hidden border-2 border-white'>
                <Image src={image} alt='' fill/>
            </div>
        ))}
        
    </div>
  )
}
