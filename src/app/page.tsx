"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import {BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData} from '@/data/project.js';
import { use } from "react";
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

   {/*logika dari project section}*/}

      const [currentPage, setcurrentPage] = useState(0);

      const NextPage = () => {
        if (currentPage + 3 < ProjectData.length) {
          setcurrentPage(currentPage + 1);
        }
      };

      const PrevPage = () => {
        if (currentPage > 0) {
          setcurrentPage(currentPage - 1);
        }
      };

      const displayedProjects = ProjectData.slice(currentPage, currentPage + 3);

  return (

    
    // Main menjadi kontainer utama yang memegang koordinat (relative)
    <main className="relative min-h-screen w-full">
      <Navbar />
      
      {/* 1. LAYER BACKGROUND: Gambar memenuhi seluruh area main */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* 2. LAYER CONTENT: Teks berada di atas gambar menggunakan z-10 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-[#FFD88C] [text-shadow:0_4px_8px_#1E368F70]">
        <h1 className={`text-[64px] font-bold ${eureka.className}`}>
          Welcome To!
        </h1>
        <p className={`mt-4 text-lg ${handron.className} text-[96px] text-center leading-tight text-[#FFD88C] `}>
          Raditya Work <br/>Place!
        </p>
      </div>

      <div className="flex relative flex-row items-center justify-center gap-20 px-20 py-20 z-20 mt-230">
        <div className="relative w-[524px] h-[710px] ">
          <Image
            src="/Vector 1.png"
            alt="Vector1"
            fill
            className="object-contain"
            priority
          />    
        </div>

        <div className="relative max-w-xl text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50]">
          <h2 className={`text-[54px] font-bold text-center ${handron.className}`}>HI PAL!</h2>
          <p className={`mt-4 leading-relaxed text-sm `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt finibus risus in ullamcorper. Aliquam erat volutpat. Proin vitae nunc a nibh ullamcorper tempus. Praesent a iaculis felis, sed efficitur ipsum.
          </p>
        </div>
      </div>
    

      {/* Project Section */}
      <h2 className={`text-[48px] font-bold text-center mb-10 z-10 relative text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>PROJECTS</h2>

    
      <div className="relative px-10 z-10 py-3 items-center justify-center flex flex-row gap-10 w-full">
        <button 
        onClick={PrevPage}
        disabled={currentPage === 0}
        className={`bg-[#FFB142] p-4 rounded-full shadow-lg relative ${currentPage === 0 ? 'opacity-50' : 'active:scale-95'}`}>
          <span className={"text-2xl font-bold text-[#5C1A1B]"}>{'<'}</span>
        </button>

        {/* Card Project  Maping data*/}
        {displayedProjects.map((project, index) => (
          <div key={index} className="w-[424px] h-[550px] rounded-[32px] flex-col flex bg-[#FFC76E] mx-auto mt-10 shadow-lg justify-center items-center border-[#FF9955] border-4">
            <div className=" relative w-[327px] h-[206px] ">
              <Image
                src="/Rectangle 5873.png"
                alt="Vector2"
                fill
                className="object-contain p-2"
                priority
              />    
            </div>

            <div className="rounded-4xl bg-[#FFD88C] flex bg-linear-to-t from-[#FFB366] to-[#FFD88C] shadow-md mt-4 border-[#FFB366] border-4 text-[#87095A]">
              <h2 className={`text-[30px] font-bold text-center py-2 px-10  ${handron.className}`}>{project.title}</h2>
            </div>
            <h3 className={`text-[20px] text-[#590844] font-bold p-6 text-center mt-4  ${roboto.className}`}>{project.description}</h3>
            
          </div>
        ))}

        <button 
        onClick={NextPage}
        disabled={currentPage + 3 >= ProjectData.length}
        className={`bg-[#FFB142] p-4 rounded-full shadow-lg float-right ${currentPage + 3 >= ProjectData.length ? 'opacity-50' : 'active:scale-95'}`}>
          <span className="text-2xl font-bold text-[#5C1A1B]">{'>'}</span>
        </button>
      </div>

      <div className="z-20 flex flex-col items-center justify-center py-20 px-10 relative">
        <h2 className={`flex text-[48px] font-bold text-center mb-10  text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>Tools and Technologies</h2>
        <div className=" rounded-2xl bg-[#340F5C] z-10 w-full h-[527px] bg-linear-to-b from-[#6F20C2] to-[#471F72] shadow-lg flex flex-row flex-wrap justify-center items-center gap-10 p-2">
          <div className="p-4 bg-[#340F5C] w-full h-full rounded-2xl flex flex-row flex-wrap justify-center items-center gap-3">
            <h3 className={`text-[32px] font-bold text-left w-full text-[#FFD88C] ${roboto.className}`}>Frontend</h3>
            <div className="flex flex-row flex-wrap justify-center items-center rounded-4xl gap-10 bg-[#fff1d2] w-full h-15">
              {WebsiteToolsData.map((tool,index) => (
                <span key={index} className="text-[#590844] font-bold px-4 py-2 bg-[#FFD88C] rounded-full shadow-md flex items-center">
                  <img src={tool.imageUrl} alt={tool.name} className="inline-block ml-2 w-6 h-6"/>
                  <h3 className={`text-[20px] px-3 ${roboto.className}`}>{tool.name}</h3>
                </span>
              ))}
            </div>
            <h3 className={`text-[32px] font-bold text-left w-full text-[#FFD88C] ${roboto.className}`}>Backend</h3>
            <div className="flex flex-row flex-wrap justify-center items-center rounded-4xl gap-10 bg-[#fff1d2] w-full h-15">
              {BackendToolsData.map((tool,index) => (
                <span key={index} className="text-[#590844] font-bold px-4 py-2 bg-[#FFD88C] rounded-full shadow-md flex items-center">
                  <img src={tool.imageUrl} alt={tool.name} className="inline-block ml-2 w-6 h-6"/>
                  <h3 className={`text-[20px] px-3 ${roboto.className}`}>{tool.name}</h3>
                </span>
              ))}
            </div>
            <h3 className={`text-[32px] font-bold text-left w-full text-[#FFD88C] ${roboto.className}`}>Database</h3>
            <div className="flex flex-row flex-wrap justify-center items-center rounded-4xl gap-10 bg-[#fff1d2] w-full h-15">
              {DatabaseToolsData.map((tool,index) => (
                <span key={index} className="text-[#590844] font-bold px-4 py-2 bg-[#FFD88C] rounded-full shadow-md flex items-center">
                  <img src={tool.imageUrl} alt={tool.name} className="inline-block ml-2 w-6 h-6"/>
                  <h3 className={`text-[20px] px-3 ${roboto.className}`}>{tool.name}</h3>
                </span>
              ))}
            </div>

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
