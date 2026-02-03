"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";


// Inisialisasi font (Pastikan path benar)
const handron = Handron({ 
  src: '../../public/fonts/Handron-Solid.otf',
  variable: '--font-handron'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const visiData = [
    {id:1, title: "Terbentur", description: "I welcome the initial \"impact\" of complex problems. Every technical hurdle or societal challenge is a starting point that demands curiosity and action.",   src: "/Terb1.jpeg" },
    {id:2, title: "Terbentur", description: "Character is built in the \"uncertainty\" Through the trial and error, I refine my skills and test my integrity, ensuring that the solutions I build are not just functional, but responsible.",src: "/Terb2.jpeg"  },
    {id:3, title: "Terbentuk", description: "True impact is \"formed\" over time. By surviving the pressure of the process, I emerge as a developer ready to contribute to Indonesia’s 2045 vision creating technology that truly serves humanity.",src: "/Terb3.jpeg"  },
];

export default function Cardvision() {
    return (
        <div className="flex flex-wrap justify-center gap-8 px-4 py-10">
            {visiData.map((item) => (
                <div 
                    key={item.id} 
                    className="w-full max-w-[350px] md:max-w-[424px] min-h-[500px] md:h-[550px] rounded-[32px] flex-col flex bg-[#FFC76E] shadow-lg justify-center items-center border-[#FF9955] border-4 p-4 md:p-6 transition-transform hover:scale-105"
                >
                    {/* Container Gambar Responsif */}
                    <div className="relative w-full aspect-video md:w-[327px] md:h-[206px]">
                        <Image
                            src={item.src}
                            alt="Vision Illustration"
                            fill
                            className="object-contain p-2"
                            priority
                        />    
                    </div>

                    {/* Judul dengan Background Gradient */}
                    <div className="rounded-full bg-[#FFD88C] flex bg-gradient-to-t from-[#FFB366] to-[#FFD88C] shadow-md mt-6 border-[#FFB366] border-4 text-[#87095A] w-full md:w-auto">
                        <h2 className={`text-[24px] md:text-[30px] font-bold text-center py-2 px-6 md:px-10 truncate ${handron.className}`}>
                            {item.title}
                        </h2>
                    </div>

                    {/* Deskripsi (Mapping data deskripsi visi) */}
                    <h3 className={`text-[16px] md:text-[20px] text-[#590844] font-bold p-4 md:p-6 text-center mt-4 leading-relaxed ${roboto.className}`}>
                        {item.description}
                    </h3>
                </div>
            ))}
        </div>
    );
}