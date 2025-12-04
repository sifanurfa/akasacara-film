"use client";

import VideoProjectSection from "./VideoProjectSection";
import FilmProjectSection from "./FilmProjectSection";
import AllProjectSection from "./AllProjectSection";
import AwardedSection from "./AwardedSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-black text-white pb-20 font-sans">
            {/* Navbar */}
            <Navbar/>

            {/* Awarded Films */}
            <AwardedSection/>

            {/* Film Projects */}
            <FilmProjectSection/>

            {/* Video / Ads Projects */}
            <VideoProjectSection/>
            
            {/* ALL PROJECTS */}
            <AllProjectSection/>

            {/* Footer */}
            <Footer/>
        </main >
        <Footer />
        </>
    );
}
