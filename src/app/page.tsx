"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import { BackendToolsData, DatabaseToolsData, ProjectData, WebsiteToolsData, GraphicDesignToolsData } from '@/data/news.js';
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";

// --- Font Configurations ---
const handron = Handron({ src: '../../public/fonts/Handron-Solid.otf', variable: '--font-handron' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });
const eureka = Eureka({ src: '../../public/fonts/Euskadi-Regular.otf', variable: '--font-eureka' });

// --- Reusable WavyText Component ---
const WavyText = ({ text, className, delayOffset = 0 }: { text: string, className: string, delayOffset?: number }) => {
  const letters = text.split("");

  return (
    <motion.span 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5, delay: delayOffset }}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span 
          key={index} 
          animate={{ y: [0, -15, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: delayOffset + index * 0.1 
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Home() {
  const [currentPage, setcurrentPage] = useState(0);
  const [itemsToDisplay, setItemsToDisplay] = useState(3);
  const [direction, setDirection] = useState(0);

  // Menangani perubahan jumlah item project secara responsive
  useEffect(() => {
    const handleResize = () => {
      setItemsToDisplay(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = ProjectData.slice(currentPage, currentPage + itemsToDisplay);

  const NextPage = () => { 
    if (currentPage + itemsToDisplay < ProjectData.length) {
      setDirection(1);
      setcurrentPage(currentPage + 1); 
    }
  };
  const PrevPage = () => { 
    if (currentPage > 0) {
      setDirection(-1);
      setcurrentPage(currentPage - 1); 
    }
  };

  return (
    <main className={`relative min-h-screen w-full overflow-x-hidden bg-[#17052A] ${roboto.variable}`}>
      <Navbar />
          
          {/* WRAPPER HERO: Ini adalah area gambar langitmu */}
      <section className="relative w-full h-[800px] md:h-[180vh] flex flex-col items-center">
        
        {/* 1. BACKGROUND IMAGE: Tanpa Zoom (Full Width) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bg.png" 
            alt="Background" 
            fill 
            // object-cover memastikan lebar penuh, object-top memastikan gambar menempel ke atas
            className="object-cover object-top" 
            priority 
          />
          {/* Overlay gradasi agar bagian bawah gambar menyatu halus dengan warna bg body */}
          
        </div>

        {/* 2. TEKS HERO: Diletakkan di area atas agar pas di posisi langit */}
        <div className="relative z-10 flex flex-col items-center pt-32 md:pt-48 text-[#FFD88C] [text-shadow:0_4px_8px_#1E368F70] px-4">
          <WavyText text="Welcome To!" className={`text-[32px] md:text-[64px] font-bold ${eureka.className}`} />
          <div className="mt-2 flex flex-col items-center">
            <WavyText text="RADITYA WORK" delayOffset={0.5} className={`text-[48px] md:text-[96px] ${handron.className} text-center leading-tight`} />
            <WavyText text="PLACE!" delayOffset={1.0} className={`text-[48px] md:text-[96px] ${handron.className} text-center leading-tight`} />
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION: Sekarang berada di bawah area gambar langit (area ungu gelap) */}
      <motion.section 
        className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 px-6 md:px-20 py-20 max-w-7xl mx-auto -mt-100 md:-mt-32"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Frame Foto seperti di gambar (Polygon/Hexagon) */}
        <div className="relative w-full max-w-[300px] md:w-[524px] aspect-[3/4] md:h-[710px]">
          {/* WRAPPER UTAMA: 
            Gunakan clip-path yang sesuai dengan bentuk Vector 1 kamu 
            agar cahaya tidak bocor ke area transparan.
          */}
          
   
            {/* 1. GAMBAR VECTOR KAMU */}
            <Image 
              src="/Vector 1.png" 
              alt="Profile Vector" 
              fill 
              className="object-contain" 
              priority 
            />

          
        </div>
        

        <div className="relative max-w-xl text-[#FFD88C] text-center md:text-left">
          <h2 className={`text-[36px] md:text-[54px] font-bold ${handron.className} [text-shadow:0_3px_19px_#FFD88C50]`}>
            <Typewriter
              options={{
                strings: [ 'WELCOME TO MY SITE!', 'Failure Enthusiast', 'Web Developer', 'Inteterst in AI & ML'],
                autoStart: true, loop: true, delay: 75,
                wrapperClassName: "inline-block",
              }}
            />
          </h2>
          <p className="mt-6 leading-relaxed text-sm md:text-lg opacity-90 text-justify md:text-left">
            I believe that choosing to always feel “not smart enough” and maintaining a constant desire to learn from every experience is the beginning of wisdom. Radit is a Frontend Developer specializing in TypeScript, React Native, and Next.js. He focuses on building scalable, high-performance applications with clean code and intuitive user experiences.
          </p>
        </div>
      </motion.section>
      {/* 4. PROJECT SECTION */}
      <section className="relative z-10 py-20">
        <h2 className={`text-[36px] md:text-[48px] font-bold text-center mb-16 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>Where Passion Meets Progres</h2>
        
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4 max-w-7xl mx-auto">
          <button onClick={PrevPage} disabled={currentPage === 0} className="bg-[#FFB142] p-3 md:p-4 rounded-full shadow-xl disabled:opacity-30 transition-transform active:scale-90 z-30">
            <span className="text-xl font-bold text-[#5C1A1B]">{'<'}</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            <AnimatePresence custom={direction} mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div 
                  key={`${currentPage}-${index}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      delay: index * 0.1,
                      type: "spring",
                      visualDuration: 0.3,
                      bounce: 0.4,
                    }
                  }}
                  exit={{ opacity: 0, x: direction * -50 }}
                  className="w-full max-w-[350px] rounded-[32px] bg-[#FFC76E] shadow-2xl border-[#FF9955] border-4 p-6 flex flex-col items-center"
                >
                  <div className="relative w-full aspect-video mb-6">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-contain" />
                  </div>
                  <div className="bg-gradient-to-t from-[#FFB366] to-[#FFD88C] rounded-full py-2 px-6 border-2 border-[#FFB366] w-full mb-4">
                    <h3 className={`text-lg md:text-xl font-bold text-[#87095A] text-center truncate ${handron.className}`}>{project.title}</h3>
                  </div>
                  <p className={`text-sm md:text-base text-[#590844] text-center  font-medium ${roboto.className}`}>{project.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button onClick={NextPage} disabled={currentPage + itemsToDisplay >= ProjectData.length} className="bg-[#FFB142] p-3 md:p-4 rounded-full shadow-xl disabled:opacity-30 transition-transform active:scale-90 z-30">
            <span className="text-xl font-bold text-[#5C1A1B]">{'>'}</span>
          </button>
        </div>
      </section>

      {/* 5. TOOLS SECTION */}
      <section className="relative z-20 py-24 px-4 max-w-6xl mx-auto ">
        <h2 className={`text-[36px] md:text-[48px] font-bold text-center mb-12 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}>Tools and Technologies</h2>
        <div className="rounded-[40px] bg-[#340F5C] border-4 border-[#58199c]/30 p-8 md:p-12 shadow-2xl flex flex-col gap-10 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:border-[#c9a0ff] transition-all duration-300">
          {[
            { title: "Frontend", data: WebsiteToolsData },
            { title: "Backend", data: BackendToolsData },
            { title: "Graphic Design", data: GraphicDesignToolsData }
          ].map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-bold text-[#FFD88C] ${roboto.className}`}>{cat.title}</h3>
              <div className="flex flex-wrap gap-3 p-4 bg-white/5 rounded-3xl">
                {cat.data.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#441379] px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform cursor-default ">
                    <img src={tool.imageUrl} alt={tool.name} className="w-5 h-5 object-contain"/>
                    <span className={`text-sm md:text-base font-bold text-[#ffffff] ${roboto.className}`}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FOOTER DECOR */}
      <div className="relative w-full h-[120px] md:h-[250px] z-10 mt-[-50px]">
        <Image src="/btm.png" alt="Footer" fill className="object-cover" />
      </div>
    </main>
  );
}