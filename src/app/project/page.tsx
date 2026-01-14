"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import {BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData} from '@/data/project.js';
import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";





const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});



export default function ProjectPage() {
    

    return (
        <main className="relative min-h-screen w-full pt-20">
            <Navbar />
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

        </main>

    );
}