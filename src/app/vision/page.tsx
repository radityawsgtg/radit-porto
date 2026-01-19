"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { GitHubCalendar } from "react-github-calendar";
import CardPhoto from "@/components/cardphoto";

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
        <main className="relative min-h-screen w-full bg-[#17052A] ">
            <Navbar />

            {/* SEKSI ATAS (Vision & Mission) dengan Background Berbintang */}
            <section className="relative pt-20">
                {/* Background hanya ada di sini */}
                <img 
                src="/bgnav.png" 
                alt="" 
                className="absolute inset-0 z-0 w-full h-full object-cover opacity-30" 
                />

                <div className="relative z-10">
                <h2 className={`text-[48px] pt-15 font-bold text-center mb-5 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>VISION</h2>
                
                {/* Konten Vision */}
                <div className="flex flex-row items-center justify-center p-5 gap-10 mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center w-full h-auto rounded-2xl bg-[#FFD88C] border-4 border-[#FFB366] overflow-hidden">
                    <div className="w-full md:w-1/2 p-10">
                        <img src="/Rectangle 5873.png" alt="Vision" className="w-full h-auto object-cover rounded-2xl" />
                    </div>
                    <div className="w-full md:w-1/2 p-10">
                        <p className={`text-[#6F0E4E] text-left text-lg font-medium ${roboto.className}`}>My vision is...</p>
                    </div>
                    </div>
                </div>

                <h2 className={`text-[48px] pt-15 font-bold text-center mb-5 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>MISION</h2>
                
                {/* Konten Mission */}
                <div className="flex flex-row items-center justify-center p-10 pb-50 gap-10 mx-auto max-w-6xl">
                    <div className="items-center w-full h-auto rounded-2xl bg-[#FFD88C] border-4 border-[#FFB366] overflow-hidden">
                    <div className="w-full p-10">
                        <p className={`text-[#6F0E4E] text-center text-lg font-medium ${roboto.className}`}>My mission is...</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* GAMBAR GUNUNG (Sebagai Penutup Background) */}
                {/* Margin top negatif (-mt-20 atau disesuaikan) membuat gunung "naik" menutupi batas akhir background */}
                <img
                src="/Component 2.png"
                alt="Bottom Decor"
                className="w-full h-auto  translate-y-[50%] md:-translate-y-[40%] absolute z-40" 
                />
            </section>

            {/* SEKSI BAWAH (Setelah Gunung) */}
            <section className="bg-[#17052A] relative flex flex-row z-10 pt-70 gap-10">
                <CardPhoto/>  
                <CardPhoto/>   
                <CardPhoto/>     
                
            </section>
        </main>     
        );
}