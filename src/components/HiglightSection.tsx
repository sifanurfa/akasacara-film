"use client";
import React, { useState } from "react";

type HighlightItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
};

const HighlightSection = () => {
  const [mainHighlight, setMainHighlight] = useState({
    id: 0,
    title: "Menyakiti Laut dan Saatnya Penghakiman",
    category: "Press",
    date: "Oct 25, 2025",
    image: "/assets/hlmain.png",
  });

  const [subHighlights, setSubHighlights] = useState([
    {
      id: 1,
      title: "Karya Kolaboratif Sekolah Vokasi UGM Setan Alas",
      category: "Announcement",
      date: "July 21, 2025",
      image: "/assets/hl01.png",
    },
    {
      id: 2,
      title: "Menyakiti Laut dan Saatnya Penghakiman",
      category: "Article",
      date: "July 21, 2025",
      image: "/assets/hl02.png",
    },
    {
      id: 3,
      title: "Film “Setan Alas” Berhasil Menangi Kompetisi",
      category: "Press",
      date: "July 21, 2025",
      image: "/assets/hl03.png",
    },
  ]);

  // fungsi untuk menukar gambar utama dengan gambar kecil yang diklik
  const handleSwap = (item: HighlightItem) => {
    const newSubs = subHighlights.map((sub) =>
      sub.id === item.id ? mainHighlight : sub
    );
    setSubHighlights(newSubs);
    setMainHighlight(item);
  };

  return (
    <div className="self-stretch px-container py-section inline-flex flex-col justify-start items-start gap-xl">
      <div className="self-stretch justify-start text-[#D4AF37] text-6xl font-bold font-['Playfair_Display'] leading-[72px]">
        HIGHLIGHT
      </div>

      <div className="self-stretch inline-flex justify-start items-start gap-l">
        {/* MAIN IMAGE */}
        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-m">
          <img
            src={mainHighlight.image}
            alt={mainHighlight.title}
            className="self-stretch h-[456px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          />
          <div className="self-stretch pb-md px-md inline-flex flex-col justify-start items-start gap-m">
            <div className="self-stretch justify-start">
              <span className="text-white text-xl font-medium font-['Poppins'] leading-7">
                {mainHighlight.category}
              </span>
              <span className="text-stone-300 text-xl font-normal font-['Poppins'] leading-7">
                {" "}
                / {mainHighlight.date}
              </span>
            </div>
            <div className="self-stretch inline-flex justify-end items-start gap-m">
              <div className="flex-1 justify-start text-white text-4xl font-semibold font-['Playfair_Display'] leading-10">
                {mainHighlight.title}
              </div>
            </div>
          </div>
        </div>

        {/* SUB IMAGES */}
        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-l">
          {subHighlights.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSwap(item)}
              className="self-stretch pl-6 inline-flex justify-end items-center gap-14 cursor-pointer hover:bg-white/5 transition-all duration-200 rounded-xl"
            >
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start">
                  <span className="text-white text-base font-normal font-['Poppins'] leading-6">
                    {item.category}
                  </span>
                  <span className="text-stone-300 text-base font-normal font-['Poppins'] leading-6">
                    {" "}
                    / {item.date}
                  </span>
                </div>
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Playfair_Display'] leading-7">
                  {item.title}
                </div>
              </div>
              <div className="flex-1 self-stretch px-6 inline-flex flex-col justify-center items-start gap-2.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="self-stretch h-36 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
