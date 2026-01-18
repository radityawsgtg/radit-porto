"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { GitHubCalendar } from "react-github-calendar";
import ProjectCard from "@/components/project";

const handron = Handron({ 
  src: '../../../public/fonts/Handron-Solid.otf',
  variable: '--font-handron'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const eureka = Eureka({ 
  src: '../../../public/fonts/Euskadi-Regular.otf',
  variable: '--font-eureka'
});

export default function VisionPage() {
    

    return (
        <main className="relative min-h-screen w-full pt-20 bg-[#17052A]">
            <Navbar />
            
            {/* 1. LAYER BACKGROUND: Gambar memenuhi seluruh area main */}
            
            <img src="/bgnav.png" alt="" className="absolute inset-0 z-0 w-full h-full object-cover opacity-30" />
            <h2 className={`text-[48px] pt-15 font-bold text-center mb-5 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>VISION</h2>

            {/* Konten halaman vision dapat ditambahkan di sini */}
            {/* Parent Utama */}
            <div className="flex relative flex-row items-center justify-center z-10 p-5 gap-10 mx-auto max-w-6xl">
            
                {/* KOTAK KUNING (Sekarang kita beri flex agar isinya ke samping) */}
                <div className="flex flex-col md:flex-row items-center w-full h-auto rounded-2xl bg-[#FFD88C] border-2 border-[#FFB366] overflow-hidden">
                    
                    {/* KOLOM KIRI: GAMBAR */}
                    <div className="w-full md:w-1/2 p-10">
                    <img 
                        src="/Rectangle 5873.png" 
                        alt="Vision" 
                        className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 rounded-2xl"
                    />
                    </div>

                    {/* KOLOM KANAN: TULISAN */}
                    <div className="w-full md:w-1/2 p-10">
                    <p className={`text-[#6F0E4E] text-left text-lg font-medium ${roboto.className}`}>
                        My vision is to become a proficient full-stack developer who can create innovative and impactful web applications...
                    </p>
                    </div>

                </div>
            </div>

            <h2 className={`text-[48px] pt-15 font-bold text-center mb-5 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>MISION</h2>
            <div className="flex relative flex-row items-center justify-center z-10 p-5 gap-10 mx-auto max-w-6xl">
            
                {/* KOTAK KUNING (Sekarang kita beri flex agar isinya ke samping) */}
                <div className=" items-center w-full h-auto rounded-2xl bg-[#FFD88C] border-2 border-[#FFB366] overflow-hidden">
                    
                    {/* KOLOM KANAN: TULISAN */}
                    <div className="w-full p-10">
                    <p className={`text-[#6F0E4E] text-center text-lg font-medium ${roboto.className}`}>
                        My vision is to become a proficient full-stack developer who can create innovative and impactful web applications...
                    </p>
                    </div>
                </div>
            </div>

            <img
                src="/btm.png"
                alt="Bottom Decor"
                width={1920}
                height={200}
                className=" left-0 w-full h-auto z-20 relative"
            />

        



        
            



        </main>      
        );
}