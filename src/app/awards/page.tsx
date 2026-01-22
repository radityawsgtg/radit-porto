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
import CardPhoto from "@/components/cardphoto";
import CardAward from "@/components/cardawards";
import { AwardsData } from "@/data/awards";
import {motion} from "framer-motion"

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

export default function awardsPage (){



    return(
            <main className=" relative min-h-screen w-full bg-[#17052A] ">
                <Navbar />  
                
                <div className="relative z-10 pt-20">
                    <h2 className={`text-[48px] pt-15 font-bold text-center mb-5 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>AWARDS</h2>
                       {/* MAPPING DATA KE KOMPONEN */}
                            <div className="flex flex-col gap-10">
                                {AwardsData.map((award, index) => (
                                    <motion.div
                                    key={award.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                    >
                                    <CardAward 
                                        title={award.title}
                                        description={award.description}
                                        narasumber={award.narasumber}
                                        image={award.image}
                                    />
                                    </motion.div>
                                ))}
                            </div>


                        <img
                        src="/btm.png"
                        alt="Bottom Decor"
                        width={1920}
                        height={200}
                        className="bottom-0 left-0 w-full h-auto z-20 relative"
                    />


                </div>



            </main>

    );
}