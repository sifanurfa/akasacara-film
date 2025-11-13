"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function PortfolioSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {/* ===== SLIDE 1 ===== */}
        <div className="relative w-full h-[747px] flex justify-center items-center overflow-hidden bg-neutral-900/50">
          {/* Background (Full width tapi tetap center, tidak nabrak) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1920px] h-full">
            <Image
              src="/assets/darah_nyai.png"
              alt="Ganyang Setan Alas background"
              fill
              priority
              className="object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-neutral-900/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full h-full mx-auto 
                          px-6 md:px-16 lg:px-24 gap-10 lg:gap-16 max-w-[1280px]">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center items-start gap-8 md:gap-10 max-w-[620px]">
              <div className="flex flex-col gap-4">
                <p className="text-white text-lg md:text-xl font-['Poppins']">Coming Soon</p>
                <h3 className="text-white text-3xl md:text-[48px] font-['Playfair_Display'] font-semibold leading-tight">
                  Ganyang Setan Alas! The Game
                </h3>
                <p className="text-stone-300 text-base md:text-lg font-['Poppins'] leading-relaxed">
                  Ganyang Setan Alas! The Game is a single-player shooter set in a haunted Indonesian forest,
                  where four students, armed with a range of weapons, must survive relentless zombie attacks and
                  escape a cursed fate.
                </p>
              </div>

              {/* Rating */}
              <div className="flex gap-1.5 md:gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-2xl md:text-3xl">★</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* Wishlist Button */}
                <button className="px-5 md:px-6 py-2.5 md:py-3 bg-white text-black text-base md:text-xl font-semibold font-['Poppins'] rounded-lg flex items-center gap-3 hover:bg-stone-200 transition">
                  <Image
                    src="/assets/wht.png" 
                    alt="Wishlist Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  Wishlist Now
                </button>

                {/* Watch Trailer Button */}
                <button className="px-5 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-md text-white text-base md:text-xl font-semibold font-['Poppins'] rounded-lg flex items-center gap-3 border border-white/20 hover:bg-white/20 transition">
                  <Image
                    src="/assets/wth.png"
                    alt="Trailer Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  Watch Trailer
                </button>
              </div>
            </div>
    

            {/* RIGHT IMAGES */}
            <div className="flex flex-col gap-3">
              <Image
                src="/assets/ss01.png"
                alt="screenshot1"
                width={339}
                height={191}
                className="rounded-md object-cover"
              />
              <Image
                src="/assets/ss01.png"
                alt="screenshot2"
                width={339}
                height={191}
                className="rounded-md object-cover"
              />
              <Image
                src="/assets/ss01.png"
                alt="screenshot3"
                width={339}
                height={191}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
