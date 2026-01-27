"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
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

export default function AboutMe() { 
  const workExperience = [
    { date: "19 Mei 2025", title: "Tools and Technologies", desc: "Working as a team of bla", logo: "/company-logo.png" },
    { date: "19 Mei 2025", title: "Tools and Technologies", desc: "Working as a team of bla", logo: "/company-logo.png" },
     { date: "19 Mei 2025", title: "Tools and Technologies", desc: "Working as a team of bla", logo: "/company-logo.png" },
  ];

  const education = [
    { date: "Now", title: "Institut Teknologi Bandung", desc: "Sekolah Teknik Elektro dan Informatika - Komputasi", logo: "/ITB.png" },
    { date: "2022-2025", title: "SMA Negeri 1 Yogyakarta", desc: "Mathematical Sciences", logo: "/TLD.png" },
  ];

  return (
    <main className={`${eureka.variable} ${roboto.variable} relative min-h-screen w-full bg-[#17052A] pb-20`}>
        <Navbar />

        <div className="max-w-5xl mx-auto px-10 pt-20">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`text-[48px] pt-15 font-bold text-center mb-5 text-[#FFD88C] [text-shadow:0_3px_19px_#FFD88C50] ${handron.className}`}
                >
                About Me
            </motion.h2>



            {/* Section Wrapper */}
            <section className="space-y-16">
            
            {/* Working Experience Section */}
            <div>
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[#FFD88C] text-3xl mb-10 font-[family-name:var(--font-eureka)]"
                    >
                    Working experience
                </motion.h2>
            </div>


                <div className="relative border-l-4 border-[#6F20C2] ml-4 md:ml-32 space-y-12">
                    {workExperience.map((item, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: "easeOut",
                        }}
                        className="relative pl-10"
                        >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-[#BB83FF] border-4 border-[#17052A]" />

                        {/* Date */}
                        <div className="absolute -left-36 top-6 hidden md:block w-28 text-right text-[#FFD88C] font-[family-name:var(--font-roboto)]">
                            {item.date}
                        </div>

                        {/* Card */}
                        <div className="flex items-center p-6 rounded-2xl border-2 border-[#6F20C2] bg-gradient-to-r from-[#BB83FF] to-[#826F99] shadow-lg">
                            <div className="mr-6 flex-shrink-0">
                            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                                <Image src={item.logo} alt="Logo" width={50} height={50} className="object-contain" />
                            </div>
                            </div>
                            <div className="font-[family-name:var(--font-eureka)] text-[#17052A]">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-lg opacity-80">{item.desc}</p>
                            </div>
                        </div>
                        </motion.div>
                    ))}

                </div>


            {/* Education Section */}
            <div>
                <h2 className="text-[#FFD88C] text-3xl mb-10 font-[family-name:var(--font-eureka)]">
                Educations
                </h2>

                <div className="relative border-l-4 border-[#6F20C2] ml-4 md:ml-32 space-y-12">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: "easeOut",
                        }}
                        className="relative pl-10"
                        >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-[#BB83FF] border-4 border-[#17052A]" />

                        {/* Date */}
                        <div className="absolute -left-36 top-6 hidden md:block w-28 text-right text-[#FFD88C] font-[family-name:var(--font-roboto)]">
                            {item.date}
                        </div>

                        {/* Card */}
                        <div className="flex items-center p-6 rounded-2xl border-2 border-[#6F20C2] bg-gradient-to-r from-[#BB83FF] to-[#826F99] shadow-lg">
                            <div className="mr-6 flex-shrink-0">
                            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                                <Image src={item.logo} alt="Logo" width={50} height={50} className="object-contain" />
                            </div>
                            </div>
                            <div className="font-[family-name:var(--font-eureka)] text-[#17052A]">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-lg opacity-80">{item.desc}</p>
                            </div>
                        </div>
                        </motion.div>
                ))}
                </div>
            </div>

            </section>
        </div>
    </main>
  );
}