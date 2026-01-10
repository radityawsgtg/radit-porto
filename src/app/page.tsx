import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import {ProjectData} from '@/data/project.js';

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
  return (
    // Main menjadi kontainer utama yang memegang koordinat (relative)
    <main className="relative min-h-screen w-full">
      
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-[#FFD88C] [text-shadow:0_4px_8px_#1E368F]">
        <h1 className={`text-[64px] font-bold ${eureka.className}`}>
          Welcome To!
        </h1>
        <p className={`mt-4 text-lg ${handron.className} text-[96px] text-center leading-tight text-[#FFD88C] `}>
          Raditya Work <br/>Place!
        </p>
      </div>

      <div className="flex relativeflex-row items-center justify-center gap-20 px-20 py-20 z-20 mt-230">
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
    
      <div className="relative px-10 z-10 py-20 items-center justify-center flex flex-row gap-20">
        <button className="bg-[#FFB142] p-4 rounded-full shadow-lg relative">
          <span className="text-2xl font-bold text-[#5C1A1B]">{'<'}</span>
        </button>

        {/* Card Project  Maping data*/}
        {ProjectData.map((project, index) => (
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
              <h2 className={`text-[40px] font-bold text-center py-2 px-10  ${handron.className}`}>{project.title}</h2>
            </div>
            <h3 className={`text-[24px] text-[#590844] font-bold p-6 text-center mt-4  ${roboto.className}`}>{project.description}</h3>
            
          </div>
        ))}

        <button className="bg-[#FFB142] p-4 rounded-full shadow-lg float-right">
          <span className="text-2xl font-bold text-[#5C1A1B]">{'>'}</span>
        </button>

      </div>



    </main>
  );
}
