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
import { motion } from "framer-motion";





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
            <motion.h2 
                className={`text-[48px] pt-15 font-bold text-center mb-10 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >PROJECTS</motion.h2>

            {/* 1. LAYER BACKGROUND: Gambar memenuhi seluruh area main */}
            <div className="absolute inset-0 z-0 bg-[#17052A]">
                <Image
                    src="/"
                    alt="Project Background"
                    fill
                    className="object-center"
                />
            </div>

            <div className="absolute -top-1 -right-200 w-350 h-350 rotate-12 opacity-80">
                    <Image src="/PuzA1.png" alt="puzzle" width={500} height={500} className="object-contain" />
                </div>
                <div className="absolute top-1/4  w-350 h-350 rotate-1 opacity-80">
                    <Image src="/PuzT1.png" alt="puzzle" width={300} height={300} className="object-contain" />
                </div>
                <div className="absolute top-1/4 left-3/4 w-350 h-350 rotate-1 opacity-80">
                    <Image src="/PuzB1.png" alt="puzzle" width={500} height={500} className="object-contain" />
                </div>
                <div className="absolute -bottom-10 w-350 h-350 rotate-1 opacity-80">
                    <Image src="/PuzB2.png" alt="puzzle" width={1000} height={1000} className="object-contain" />
                </div>

            {/* Konten halaman project dapat ditambahkan di sini */}
            <motion.div 
                className="relative z-10 rounded-2xl w-full max-w-6xl mx-auto [&_span]:text-white [&_text]:fill-white p-8 bg-[#FFFFFF10] border-2 backdrop-blur-md border border-[#FFFFFF20] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:border-[#BB83FF] transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
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

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <ProjectCard />
            </motion.div>
            
            <motion.img
                src="/btm.png"
                alt="Bottom Decor"
                width={1920}
                height={200}
                className="bottom-0 left-0 w-full h-auto z-20 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
            />

            


        </main>

    );
}