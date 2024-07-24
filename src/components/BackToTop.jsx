import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  return (
   <a href="#top">
     <div className='rounded-full bg-green-500 hover:bg-green-400 h-12 w-12 flex justify-center items-center text-white fixed top-[85vh] right-10 z-50'>
        <ArrowUp size={30}/>

    </div>
   </a>
  )
}
