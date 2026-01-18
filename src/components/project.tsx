"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { GitHubCalendar } from "react-github-calendar";
import{BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData} from '@/data/news.js';
import {ProjectWeb} from "@/data/project.js";



const handron = Handron({ 
  src: '../../public/fonts/Handron-Solid.otf',
  variable: '--font-handron'
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const eureka = Eureka({ 
  src: '../../public/fonts/Euskadi-Regular.otf',
  variable: '--font-eureka'
});

export default function ProjectCard() {
    return (
        <>
            {ProjectWeb.map((Proweb) => (
                <div key={Proweb.id} className="relative p-15">
                    <div className="rounded-2xl bg-[#340F5C] z-10 w-full mx-auto max-w-4xl h-auto justify-center relative mt-10 bg-linear-to-b from-[#6F20C2] to-[#471F72] shadow-lg gap-10 p-1 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:bg-linear-to-b hover:from-[#b672ff] hover:to-[#e9d5ff] transition-all duration-300">         
                        <div className="p-20 bg-[#340F5C] w-full h-full rounded-2xl flex flex-row gap-8">         
                            <Image src={Proweb.imageUrl} alt={Proweb.name} width={400} height={400} />
                            <div className="w-1/2 text-white text-left">
                                <div className={`text-[#fde0a3] text-center py-2 text-2xl block mb-4 ${eureka.className}`}>
                                    {Proweb.name}
                                </div>
                                <p className={`text-sm leading-relaxed ${roboto.className}`}>
                                    {Proweb.description}
                                </p>
                                
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-105 transition-all duration-300">                         
                                    <Image className="drop-shadow-[0_0_5px_#FFD88C]" src="/webdev.png" alt="Tag" width={400} height={400} />  
                                </div>
                                <div className="absolute bottom-0 translate-y-5/8 left-1/2 transform -translate-x-1/2 p-2 hover:scale-105 transition-all duration-300">
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
            ))}
        </>
    );
}