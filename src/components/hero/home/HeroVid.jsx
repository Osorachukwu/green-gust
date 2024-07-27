import React from "react";

export default function HeroVid() {
  return (
    <div>
      <video
        className="w-full object-cover"
        autoPlay
        loop
        muted
        // controls
      >
        <source src="/VID-20240727-WA0001.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
