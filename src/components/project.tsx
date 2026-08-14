"use client";
import Image from "next/image";
import Handron from "next/font/local";
import { Poppins } from "next/font/google";
import { ExternalLink } from "lucide-react";
import { ProjectWeb, GameDev, MachineLearning } from "@/data/project.js";
import Link from 'next/link';

// Konfigurasi Font
const handron = Handron({
  src: '../../public/fonts/Handron-Solid.otf',
  variable: '--font-handron'
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

const CATEGORIES = [
  { label: "Web Development", data: ProjectWeb, icons: ["/next.svg", "/Tailwind.svg"] },
  { label: "Game Development", data: GameDev, icons: ["/python.png"] },
  { label: "Machine Learning", data: MachineLearning, icons: ["/python.png", "/mp.jpg"] },
];

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4 sm:p-8 md:p-12">
      {CATEGORIES.map((category) =>
        category.data.map((project) => (
          <Link
            key={project.id}
            href={project.projectUrl || "#"}
            target={project.projectUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl bg-[#2A0F4D] border border-[#FFFFFF15] overflow-hidden shadow-lg hover:border-[#BB83FF] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            {/* Gambar project */}
            <div className="relative w-full aspect-video bg-[#1B0A33]">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 rounded-full bg-[#17052A]/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#FFD88C] border border-[#FFFFFF20]">
                {category.label}
              </span>
            </div>

            {/* Konten teks */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 text-white">
              <h3 className={`text-lg sm:text-xl text-[#fde0a3] mb-2 ${handron.className}`}>
                {project.name}
              </h3>
              <p className={`text-sm text-white/80 leading-relaxed flex-1 ${poppins.className}`}>
                {project.description}
              </p>

              <div className="flex items-center gap-2 mt-4 flex-wrap">
                {category.icons.map((iconPath, index) => (
                  <div key={index} className="p-1.5 rounded-lg bg-[#441379] border border-[#FFFFFF15]">
                    <Image src={iconPath} alt="Tech icon" width={18} height={18} className="w-[18px] h-[18px] object-contain" />
                  </div>
                ))}
                <span className={`ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#BB83FF] group-hover:text-[#e9d5ff] transition-colors ${poppins.className}`}>
                  Lihat Project <ExternalLink size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
