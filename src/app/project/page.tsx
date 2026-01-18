"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import {BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData} from '@/data/project.js';
import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { GitHubCalendar } from "react-github-calendar";




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
            <h2 className={`text-[48px] pt-15 font-bold text-center mb-10 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>PROJECTS</h2>

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
            <div className="relative z-10 rounded-2xl w-full max-w-6xl mx-auto [&_span]:text-white [&_text]:fill-white p-8 bg-[#FFFFFF10] border-2 backdrop-blur-md border border-[#FFFFFF20] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:border-[#BB83FF] transition-all duration-300">
                <GitHubCalendar
                    username="radityawsgtg"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    colorScheme="light"
                    labels={{ 
                        totalCount: "Kontribusi dalam setahun",
                        months: "Jan Feb Mar Apr Mei Jun Jul Agu Sep Okt Nov Des".split(" "),
                        legend: { less: "Sedikit",
                            more: "Banyak"}
                    }
                    }
                />
                <h3 className={`text-[#BB83FF] text-center mt-4 ${eureka.className}`}>As a developer, GitHub plays a vital role in showcasing my projects and tracking my growth. Each green square represents a day of coding, contributing to open-source projects, and continuously learning in the field of software development.</h3>

            </div>
            <div className="relative p-15">
                <div className="rounded-2xl bg-[#340F5C] z-10 w-full  mx-auto max-w-4xl  h-auto  justify-center relative mt-10 bg-linear-to-b from-[#6F20C2] to-[#471F72] shadow-lg  gap-10 p-1 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:bg-linear-to-b hover:from-[#b672ff] hover:to-[#e9d5ff] transition-all duration-300">         
                    <div className="p-20 bg-[#340F5C] w-full  h-full rounded-2xl  flex flex-row gap-8">         
                        <Image src="/Rectangle 5873.png" alt="Project" width={400} height={400} />
                        <div className="w-1/2 text-white text-left">
                        <div className={` text-[#fde0a3] text-center py-2 text-2xl block mb-4 ${eureka.className}`}>
                            JUDUL PROJEK
                        </div>
                        <p className={`text-sm leading-relaxed ${roboto.className}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed tincidunt finibus risus in ullamcorper. Aliquam erat volutpat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates amet praesentium laudantium quas consectetur itaque deserunt?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta reprehenderit, voluptate pariatur numquam veritatis sint beatae dolores repellendus excepturi, recusandae cupiditate! Consectetur aspernatur sequi quis quos nulla labore quidem.
                        </p>
                        
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-105 transition-all duration-300">                         
                            <Image className="drop-shadow-[0_0_5px_#FFD88C]"src="/webdev.png" alt="Tag" width={400} height={400} />  
                        </div>
                        <div className="absolute bottom-0 translate-y-5/8 left-1/2 transform -translate-x-1/2  p-2 hover:scale-105 transition-all duration-300">
                            <Image className="drop-shadow-[0_0_10px_#693a9c]" src="/lihatp.png" alt="Tag" width={400} height={400} />
                        </div>
                        <div className="flex gap-4 w-full mt-8">
                            <div className="w-auto h-auto bg-amber p-2 rounded-lg border-2 backdrop-blur-md  border-[#FFFFFF20] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:border-[#BB83FF] transition-all duration-300 hover:bg-amber-50">
                                <Image src="/next.svg" alt="Next" width={30} height={30} />
                            </div>
                        </div>
                        
                        </div>
                    </div>  
                </div>
                

            </div>

        </main>

    );
}