"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const devlogs = [
  {
    id: 1,
    title: "GOD HELP US! — Codename for the Next Demo",
    date: "25 October 2025",
    image: "/assets/ld01.png",
  },
  {
    id: 2,
    title: "DEVLOG 16 OCT 2025 — Addressing Bugs",
    date: "16 October 2025",
    image: "/assets/ld02.png",
  },
  {
    id: 3,
    title: "We are participating STEAM NEXT FEST 2025!",
    date: "13 October 2025",
    image: "/assets/ld03.png",
  },
];

export default function DevlogSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-8">
      <Slider {...settings}>
        {devlogs.map((devlog) => (
          <div key={devlog.id} className="px-4">
            <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={devlog.image}
                alt={devlog.title}
                width={395}
                height={222}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-white text-2xl font-semibold leading-snug">
                  {devlog.title}
                </h3>
                <p className="text-stone-300 text-lg">
                  {devlog.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
