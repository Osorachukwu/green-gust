'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Hambourger() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && !event.target.closest(".sidebar")) {
        setToggle(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div className="px-5 lg:hidden" onClick={handleToggle}>
      <div>{toggle ? <X /> : <Menu />}</div>
      {toggle ? (
        <div
          className="flex flex-col gap-5 p-5 absolute left-0 top-14 w-[100%] font-medium bg-white border-t-2"
          onClick={(event) => event.stopPropagation()}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <Link href="/project">Project</Link>
          <Link href="/contact">Contact</Link>
          {/* <Link href="">Contact</Link> */}
          {/* <Link href="">Smh</Link> */}
        </div>
      ) : null}
    </div>
  );
}