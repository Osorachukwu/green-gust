'use client'
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#top" style={{ display: isVisible ? 'block' : 'none' }}>
      <div className='rounded-full bg-green-500 hover:bg-green-400 h-12 w-12 flex justify-center items-center text-white fixed top-[85vh] right-10 z-50'>
        <ArrowUp size={30} />
      </div>
    </a>
  );
}
