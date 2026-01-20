"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import { BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData } from '@/data/news.js';
import { useState } from "react";
import Navbar from "@/components/Navbar";

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

export default function Home() {
  const [currentPage, setcurrentPage] = useState(0);

  // Menentukan jumlah item per halaman berdasarkan layar (Responsif pagination)
  // Di mobile tampil 1, di desktop tampil 3
  const itemsPerPage = 1; // Anda bisa kembangkan logika ini, namun untuk simplisitas:
  const displayedProjects = ProjectData.slice(currentPage, currentPage + (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3));

  const NextPage = () => {
    if (currentPage + 1 < ProjectData.length) {
      setcurrentPage(currentPage + 1);
    }
  };

  const PrevPage = () => {
    if (currentPage > 0) {
      setcurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* 1. LAYER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* 2. HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-[#FFD88C] [text-shadow:0_4px_8px_#1E368F70] px-4">
        <h1 className={`text-[40px] md:text-[64px] font-bold ${eureka.className}`}>
          Welcome To!
        </h1>
        <p className={`mt-4 text-[50px] md:text-[96px] ${handron.className} text-center leading-tight text-[#FFD88C]`}>
          Raditya Work <br className="md:hidden"/> Place!
        </p>
      </div>

      {/* ABOUT SECTION */}
      <div className="flex relative flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 py-20 z-20 mt-10 md:mt-230">
        <div className="relative w-full max-w-[300px] md:w-[524px] h-[400px] md:h-[710px]">
          <Image
            src="/Vector 1.png"
            alt="Vector1"
            fill
            className="object-contain"
            priority
          />    
        </div>

        <div className="relative max-w-xl text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] text-center md:text-left">
          <h2 className={`text-[40px] md:text-[54px] font-bold ${handron.className}`}>HI PAL!</h2>
          <p className={`mt-4 leading-relaxed text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt finibus risus in ullamcorper. Aliquam erat volutpat. Proin vitae nunc a nibh ullamcorper tempus. Praesent a iaculis felis, sed efficitur ipsum.
          </p>
        </div>
      </div>

      {/* PROJECT SECTION */}
      <h2 className={`text-[36px] md:text-[48px] font-bold text-center mb-10 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>PROJECTS</h2>

      <div className="relative px-4 md:px-10 z-10 py-3 flex flex-row items-center justify-center gap-4 md:gap-10 w-full">
        <button 
          onClick={PrevPage}
          disabled={currentPage === 0}
          className={`bg-[#FFB142] p-3 md:p-4 rounded-full shadow-lg z-30 ${currentPage === 0 ? 'opacity-50' : 'active:scale-95'}`}>
          <span className={"text-xl md:text-2xl font-bold text-[#5C1A1B]"}>{'<'}</span>
        </button>

        {/* Card Project Grid */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
          {displayedProjects.map((project, index) => (
            <div key={index} className="w-full max-w-[350px] md:w-[424px] min-h-[500px] md:h-[550px] rounded-[32px] flex-col flex bg-[#FFC76E] shadow-lg justify-center items-center border-[#FF9955] border-4 p-4">
              <div className="relative w-full h-[180px] md:h-[206px]">
                <Image
                  src="/Rectangle 5873.png"
                  alt="Project Thumbnail"
                  fill
                  className="object-contain"
                  priority
                />    
              </div>

              <div className="rounded-full bg-[#FFD88C] flex bg-linear-to-t from-[#FFB366] to-[#FFD88C] shadow-md mt-6 border-[#FFB366] border-4 text-[#87095A] w-full">
                <h2 className={`text-[20px] md:text-[28px] font-bold text-center py-2 px-4 w-full truncate ${handron.className}`}>{project.title}</h2>
              </div>
              <h3 className={`text-[16px] md:text-[20px] text-[#590844] font-bold p-4 text-center mt-4 ${roboto.className}`}>{project.description}</h3>
            </div>
          ))}
        </div>

        <button 
          onClick={NextPage}
          disabled={currentPage + 1 >= ProjectData.length}
          className={`bg-[#FFB142] p-3 md:p-4 rounded-full shadow-lg z-30 ${currentPage + 1 >= ProjectData.length ? 'opacity-50' : 'active:scale-95'}`}>
          <span className="text-xl md:text-2xl font-bold text-[#5C1A1B]">{'>'}</span>
        </button>
      </div>

      {/* TOOLS SECTION */}
      <div className="z-20 flex flex-col items-center justify-center py-20 px-4 md:px-10 relative">
        <h2 className={`text-[36px] md:text-[48px] font-bold text-center mb-10 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>Tools and Technologies</h2>
        
        <div className="rounded-2xl bg-[#340F5C] z-10 w-full max-w-6xl min-h-[527px]  border-4 border-[#340F5C] bg-linear-to-b from-[#58199c] to-[#471F72] shadow-lg flex flex-col p-6 md:p-10 gap-8">
          
          {/* Reusable Category Component */}
          {[
            { title: "Frontend", data: WebsiteToolsData },
            { title: "Backend", data: BackendToolsData },
            { title: "Database", data: DatabaseToolsData }
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className={`text-[24px] md:text-[32px] font-bold drop-shadow-sm drop-shadow-[#340F5C]  text-[#FFD88C] ${eureka.className}`}>{cat.title}</h3>
              <div className="flex flex-wrap justify-start items-center rounded-2xl md:rounded-full gap-4 p-4 bg-[#fff1d2]/10 w-full min-h-[60px]">
                {cat.data.map((tool, i) => (
                  <span key={i} className="text-[#590844] font-bold px-4 py-2 bg-[#FFD88C] rounded-full shadow-md flex items-center transition-transform hover:scale-105">
                    <img src={tool.imageUrl} alt={tool.name} className="w-5 h-5 md:w-6 md:h-6 object-contain"/>
                    <h3 className={`text-[14px] md:text-[18px] ml-2 ${roboto.className}`}>{tool.name}</h3>
                  </span>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* FOOTER DECOR */}
      <div className="relative w-full h-[100px] md:h-[200px] z-20">
        <Image
          src="/btm.png"
          alt="Bottom Decor"
          fill
          className="object-cover md:object-fill"
        />
      </div>

    </main>
  );
}