import NewsSection from '@/components/NewsSection';
import HiglightSection from '@/components/HiglightSection';
import ShowreelSlider from '@/components/ShowrellSlider'; 
import React from 'react';

const Announcement = () => {
    return (
        <div className="relative bg-vfx inline-flex flex-col justify-start items-start gap-[23px] overflow-hidden">
            {/* SHOWRELL */}
            <ShowreelSlider/>

            {/* HIGHTLIGHT */}
            <HiglightSection/>
            
            {/* NEWS */}
            <NewsSection/>
        </div>

    );
};

export default Announcement;