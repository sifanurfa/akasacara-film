"use client";
import { useState } from "react";

// Type artikel
interface Article {
  date: string;
  title: string;
  image: string;
}

// Type tab 
type ArticleTabs = "All" | "News" | "Press" | "Announcement";

// Daftar tab 
const tabs: ArticleTabs[] = ["All", "News", "Press", "Announcement"];

// Data artikel 
const articlesData: Record<ArticleTabs, Article[]> = {
  All: [
    {
      date: "October 12, 2025",
      title:
        "Film ‘Darah Nyai’, Horor Jagal Mistis yang Bangkitkan Legenda Nyai Roro Kidul",
      image: "/assets/News01.png",
    },
    {
      date: "July 28, 2025",
      title: "Sinopsis Film Darah Nyai dan Para Pemainnya",
      image: "/assets/News02.png",
    },
    {
      date: "December 5, 2024",
      title:
        "The Draft!, Film Besutan Sivitas Akademika UGM Jadi Sorotan di Festival Film Internasional",
      image: "/assets/News03.png",
    },
    {
      date: "October 24, 2018",
      title:
        "E! : JAKARTA- Low-Budget Sci-Fi ‘Tengkorak’ Makes Us Rethink Humanity",
      image: "/assets/News04.png",
    },
  ],
  News: [
    {
      date: "October 24, 2018",
      title:
        "E! : JAKARTA- Low-Budget Sci-Fi ‘Tengkorak’ Makes Us Rethink Humanity",
      image: "/assets/News04.png",
    },
    {
      date: "September 3, 2025",
      title: "Sinopsis Film Darah Nyai dan Para Pemainnya",
      image: "/assets/News02.png",
    },
  ],
  Press: [
    {
      date: "December 5, 2024",
      title:
        "The Draft!, Film Besutan Sivitas Akademika UGM Jadi Sorotan di Festival Film Internasional",
      image: "/assets/News03.png",
    },
    {
      date: "October 24, 2018",
      title:
        "E! : JAKARTA- Low-Budget Sci-Fi ‘Tengkorak’ Makes Us Rethink Humanity",
      image: "/assets/News04.png",
    },
  ],
  Announcement: [
    {
      date: "November 10, 2025",
      title: "Pendaftaran Kompetisi Film Pendek UGM Resmi Dibuka!",
      image: "/assets/News04.png",
    },
  ],
};

// Section Berita
export default function NewsSection() {
  const [activeTab, setActiveTab] = useState<ArticleTabs>("All");

  // Ambil isi artikel berdasarkan tab aktif
  const activeArticles = articlesData[activeTab];

  return (
    <section className="self-stretch py-section inline-flex flex-col justify-start items-center gap-2xl">
      {/*  MENU  */}
      <div className="inline-flex justify-start items-center gap-20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-5xl font-['Playfair_Display'] leading-[56px] transition-colors duration-300 ${
              activeTab === tab
                ? "text-[#D4AF37]"
                : "text-white hover:text-[#D4AF37]"
            } font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* LIST BERITA  */}
      <div className="self-stretch px-container inline-flex flex-col justify-start items-start gap-7">
        {activeArticles.map((item, idx) => (
          <div key={idx} className="w-full">
            <div className="flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12 py-6 hover:bg-[#D4AF37]">
              <div className="flex-1 h-96 p-6 inline-flex flex-col justify-center items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[499.26px] flex-1"
                />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                <p className="self-stretch justify-start text-white text-xl font-normal font-['Poppins'] leading-7">
                  {item.date}
                </p>
                <h2 className="self-stretch justify-start text-white text-5xl font-semibold font-['Playfair_Display'] leading-[56px]">
                  {item.title}
                </h2>
              </div>
            </div>

            {/* Garis Pemisah */}
            {idx !== activeArticles.length - 1 && (
              <div className="w-full border-t border-white/50 my-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* ===== PAGINATION BULLETS ===== */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="w-6 h-6 bg-[#D4AF37] rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </section>
  );
}
