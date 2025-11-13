"use-client";

import React from 'react';
import DevlogSlider from '@/components/DevlogSlider'
import PortofolioList from '@/components/PortofolioList';

const Home = () => {
    return (
        <div className="relative bg-interactive overflow-hidden">
            {/* SHOWREEL */}
            <div className=""></div>

            {/* PORTOFOLIO LIST */}
            <div className="inline-flex flex-col justify-center items-center py-section px-container gap-3xl">
                <div className="self-stretch inline-flex flex-col justify-start items-center gap-m px-section">
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                        <div className="text-center justify-start headline-1 vfx-text-title">Discover Our Works</div>
                    </div>
                    <div className="self-stretch text-center justify-start vfx-text-subtitle-2 sub-heading-reg">Step into immersive worlds filled with adventure, creativity, and stories that come to life through our works.</div>
                </div>
               <PortofolioList/>
            </div>

            {/* LATEST DEVLOG */}
            <div className="py-section flex flex-col justify-start items-stretch gap-14">
                <div className="w-full px-container flex justify-between items-end">
                    <div className="vfx-text-title headline-1">LATEST DEVLOG</div>
                    <div className="px-4 py-2 outline outline-[3px] outline-offset-[-3px] outline-white flex justify-center items-center">
                        <div className="vfx-text-title">See All</div>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-[1400px] mx-auto justify-center items-stretch gap-0">
                    <DevlogSlider/>
                </div>
            </div>

            {/* PLATFORM */}
            <div className="px-section flex flex-col justify-start items-center gap-3xl">
                <div className="self-stretch flex flex-col justify-start items-center gap-m">
                    <div className="self-stretch text-center justify-start vfx-text-title headline-1">WHERE OUR STUFFS AT</div>
                    <div className="self-stretch text-center justify-start vfx-text-subtitle-1 sub-heading-reg">We bring our games to players everywhere, on every platform</div>                    
                </div>
                <div className="self-stretch px-section inline-flex justify-between items-center">
                    <div className="self-stretch inline-flex flex-col justify-center items-center gap-2.5">   
                         <img 
                            src="/assets/Itch.io.png" 
                            alt="Itch.io" 
                            className="w-24 object-contain"
                        />         
                        <div className="text-center justify-start text-white text-4xl font-normal font-['Poppins'] leading-10">Itch.io</div>
                    </div>
                    <div className="self-stretch inline-flex flex-col justify-center items-center gap-2.5"> 
                        <img 
                            src="/assets/Steam.png" 
                            alt="Itch.io" 
                            className="w-24 object-contain"
                        />                            
                        <div className="text-center justify-start text-white text-4xl font-normal font-['Poppins'] leading-10">Steam</div>
                    </div>
                    <div className="self-stretch inline-flex flex-col justify-center items-center gap-2.5">  
                        <img 
                            src="/assets/PlayStore.png" 
                            alt="Itch.io" 
                            className="w-24 object-contain"
                        />                           
                        <div className="text-center justify-start text-white text-4xl font-normal font-['Poppins'] leading-10">Play Store</div>
                    </div>
                </div>
            </div>

            {/* ABOUTE US */}
            <div className="py-section px-container flex justify-center items-center gap-xl">
                <div className="flex-1 flex justify-start items-center gap-xl">
                    <div className="flex-1 justify-start vfx-text-title headline-1">ABOUT US!</div>
                    <div className="flex-1 justify-start vfx-text-subtitle-1 sub-heading-reg">LodhongKrupuk Interactive, a division of Akasacara Film, is dedicated to game development. We strive to push the boundaries of interactive storytelling by creating immersive 3D video games.</div>
                </div>
            </div>
        </div>
    );
};

export default Home;