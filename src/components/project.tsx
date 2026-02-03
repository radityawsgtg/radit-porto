"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ProjectWeb, GameDev, MachineLearning } from "@/data/project.js";
import Link from 'next/link';

// Konfigurasi Font
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
  // Gabungkan semua data project untuk memudahkan render, 
  // atau kamu bisa tetap memisahnya jika urutannya harus spesifik.
  const allProjects = [
    { data: ProjectWeb, tagImg: "/webdev.png", icons: ["/next.svg", "/Tailwind.svg"] },
    { data: GameDev, tagImg: "/gdev.png", icons: ["/python.png"] },
    { data: MachineLearning, tagImg: "/ML.png", icons: ["/python.png", "/mp.jpg"] }
  ];

  return (
    <>
      {allProjects.map((category) => 
        category.data.map((project) => (
          <div key={project.id} className="relative p-4 sm:p-8 md:p-15">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="rounded-2xl bg-[#340F5C] z-10 w-full mx-auto max-w-4xl h-auto justify-center relative mt-10 bg-linear-to-b from-[#6F20C2] to-[#471F72] shadow-lg gap-4 sm:gap-8 md:gap-10 p-1 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] group-hover:bg-linear-to-b group-hover:from-[#b672ff] group-hover:to-[#e9d5ff] transition-all duration-300">
                
                <div className="p-6 sm:p-8 md:p-20 bg-[#340F5C] w-full h-full rounded-2xl flex flex-col md:flex-row gap-6 sm:gap-6 md:gap-8 relative">
                  
                  {/* Image Project */}
                  <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center items-center">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.name} 
                      width={400} 
                      height={400} 
                      className="w-56 h-56 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] object-contain" 
                    />
                  </div>

                  {/* Konten Teks */}
                  <div className="w-full md:w-3/5 text-white text-left">
                    <div className={`text-[#fde0a3] text-center md:text-left py-2 text-2xl sm:text-2xl block mb-3 sm:mb-4 ${eureka.className}`}>
                      {project.name}
                    </div>
                    <p className={`text-sm sm:text-sm leading-relaxed text-center md:text-left ${roboto.className}`}>
                      {project.description}
                    </p>
                    
                    {/* Tag Atas (Web Dev/Game Dev/ML) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-105 transition-all duration-300">
                      <Image 
                        className="drop-shadow-[0_0_5px_#FFD88C] w-60 h-[100px] sm:w-32 sm:h-[43px] md:w-[600px] md:h-[200px]" 
                        src={category.tagImg} 
                        alt="Category Tag" 
                        width={600} 
                        height={200} 
                      />
                    </div>

                    {/* Button Lihat Project (Bawah) */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-2 group-hover:scale-105 transition-all duration-300">
                      <Image 
                        className="drop-shadow-[0_0_10px_#693a9c] w-80 h-[100px] sm:w-32 sm:h-[64px] md:w-[600px] md:h-[300px]" 
                        src="/lihatp.png" 
                        alt="View Project" 
                        width={600} 
                        height={300} 
                      />
                    </div>

                    {/* Tech Stack Icons - SUDAH DIPERBESAR UNTUK MOBILE */}
                    <div className="flex justify-center md:justify-start gap-4 w-full mt-8 sm:mt-8">
                      {category.icons.map((iconPath, index) => (
                        <div key={index} className="w-auto h-auto bg-amber p-2.5 sm:p-2 rounded-xl border-2 backdrop-blur-md border-[#FFFFFF20] hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:border-[#BB83FF] transition-all duration-300 hover:bg-amber-50">
                          <Image 
                            src={iconPath} 
                            alt="Tech Icon" 
                            width={32} 
                            height={32} 
                            className="w-8 h-8 sm:w-[30px] sm:h-[30px]" 
                          />
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
}