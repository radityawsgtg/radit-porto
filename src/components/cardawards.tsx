"use client";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface AwardProps {
  title: string;
  description: string;
  narasumber: string;
  image: string;
}

export default function CardAward({ title, description, narasumber, image }: AwardProps) {
    return (
        <div className="flex flex-col items-center w-full mb-16">
        {/* Container Kartu Utama */}
        <div className="relative w-full max-w-4xl p-6 md:p-10 rounded-[40px] border-[3px] border-[#6B4490] bg-gradient-to-br from-[#825AC3] to-[#6B4490] shadow-2xl overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
            
            {/* Sisi Kiri: Gambar & Badge */}
            <div className="flex flex-col items-center gap-6 w-full md:w-auto">
                <div className="bg-white/10 p-4 rounded-3xl w-64 h-64 md:w-72 md:h-72 relative border border-white/20 backdrop-blur-sm">
                <div className="w-full h-full relative">
                    <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain"
                    />
                </div>
                </div>
                
                {/* Label Pemberi Penghargaan */}
                <div className="bg-[#FFD88C] text-[#6F0E4E] font-bold py-2 px-6 rounded-full shadow-lg text-sm text-center">
                {narasumber}
                </div>
            </div>

            {/* Sisi Kanan: Konten Teks */}
            <div className="flex flex-col text-center md:text-left text-[#FFD88C] flex-1">
                <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-wider uppercase drop-shadow-md">
                {title}
                </h2>
                <p className={`text-sm md:text-base leading-relaxed opacity-90 ${roboto.className}`}>
                {description}
                </p>
            </div>
            </div>
        </div>

        {/* Tombol Lebih Lanjut (Melayang di Garis Tengah Bawah) */}
        <div className="mt-[-30px] z-20 transition-transform hover:scale-110 active:scale-95 cursor-pointer">
            <Image 
            src="/lbhlanjut.png" 
            alt="Lebih Lanjut" 
            width={220} 
            height={60} 
            className="drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
            />
        </div>
        </div>
    );
    }