"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import {BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData} from '@/data/project.js';
import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";




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



export default function ProjectPage() {
    

    return (
        <main className="relative min-h-screen w-full pt-20">
            <Navbar />
            <h2 className={`text-[48px] font-bold text-center mb-10 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>PROJECTS</h2>

            {/* 1. LAYER BACKGROUND: Gambar memenuhi seluruh area main */}
            <div className="absolute inset-0 z-0 bg-[#17052A]">
                <Image
                    src="/bgproject.png"
                    alt="Project Background"
                    fill
                    className="object-cover"
                />
            </div>
            {/* Konten halaman project dapat ditambahkan di sini */}
            <div className="relative z-10 p-10 text-white">
                <h1 className={`text-4xl font-bold mb-6 ${roboto.className}`}>My Projects</h1>
                {/* Tambahkan daftar proyek atau konten lainnya di sini */}
            </div>
            <div className="rounded-l-2xl bg-yellow-300 w-1 h-1.5">     
                <h1 className="text-black">.</h1>
            </div>

        </main>

    );
}