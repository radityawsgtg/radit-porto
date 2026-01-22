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
import Cardvision from "@/components/cardvision";

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
                <div className="flex flex-row items-center justify-center p-5 gap-10 mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center w-full h-auto rounded-2xl bg-[#FFD88C] border-4 border-[#FFB366] overflow-hidden">
                    <div className="w-full md:w-1/2 p-10">
                        <img src="/Rectangle 5873.png" alt="Vision" className="w-full h-auto object-cover rounded-2xl" />
                    </div>
                    <div className="w-full md:w-1/2 p-10">
                        <p className={`text-[#6F0E4E] text-left text-lg font-medium ${roboto.className}`}>To harness technology as a bridge between knowledge, character, and impact. I believe that technology, when guided by values like empathy, responsibility, and integrity, can transform education, empower people, and contribute to Indonesia’s journey toward 2045.
                            <br></br>
                            
                        </p>
                    </div>
                    </div>
                </div>

                <h2 className={`text-[48px] pt-15 font-bold text-center mb-5 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>MISION</h2>
                
                {/* Konten Mission */}
                <div className="flex flex-row items-center justify-center p-10 pb-50 gap-10 mx-auto max-w-4xl">
                    <div className="items-center w-full h-auto rounded-2xl bg-[#FFD88C] border-4 border-[#FFB366] overflow-hidden">
                    <div className="w-full p-10">
                        <p className={`text-[#6F0E4E] text-center text-lg font-medium ${roboto.className}`}>I aim to develop educational platforms that are not only intelligent but also character-driven, promoting values of logic, empathy, and wisdom (2C1B: Cerdas, Cemerlang, Bijaksana). In the short term, I’m building accessible learning content, and in the long term, I envision founding an EduTech platform that redefines how Indonesia learns. By combining innovation, collaboration, and social contribution, I want to be part of shaping a more inclusive and prepared nation for 2045.</p>
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
            <section className="bg-[#17052A] relative   z-10 pt-70 gap-10 items-center">
                <Cardvision/>    
                
            </section>

            <h2 className={`text-[48px] pt-25 font-bold text-center  text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>Why im here?</h2>

            <div className=" flex relative flex-col items-center">
                <div className="gap-4 w-full mt-8 ">
                    <h3 className="text-[#FFD88C] text-center mx-auto max-w-150 mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et soluta praesentium non eligendi error, esse quis dolorem fuga neque. 
                    Beatae numquam aliquam possimus illum molestiae officia animi consectetur doloremque voluptates
                    quibusdam magni eaque in velit assumenda quam ex, sapiente obcaecati?</h3>
            
                    <div className="w-fit mx-auto h-auto bg-amber p-2 rounded-lg border-2 bg-[#A288D1]  border-[#FFFFFF20] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:border-[#BB83FF] transition-all duration-300 hover:bg-amber-50">
                    <Image src="/medium.svg" alt="Next" width={100} height={100} />
                </div>
            </div>
            
            </div>

                <img
                    src="/btm.png"
                    alt="Bottom Decor"
                    width={1920}
                    height={200}
                    className="bottom-0 left-0 w-full h-auto z-20 relative"
                />

            
            
        </main>     
        );
}