"use client";
import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Deco from "@/components/Deco";
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
    { date: "2026", title: "OSKM ITB 2026", desc: "Web Developer for the OSKM ITB 2026 platform, building the web experience for ITB's new student orientation.", logo: "/oskm.webp" },
    { date: "2026", title: "Wisuda April ITB 2026", desc: "Web developer for the April 2026 ITB graduation event.", logo: "/ITB.png" },
    { date: "2025 - 2026", title: "Aku Masuk ITB 2026", desc: "Frontend Developer focused on building e-commerce platforms and landing pages that support AMI’s mission in promoting access to higher education.", logo: "/ami.png" },
    { date: " 2025", title: " Wisokto ITB 2025", desc: "Backend developer for the graduation parade web application, facilitating event management and participant coordination.", logo: "/Wisok.png" },
    { date: "2024 - 2025", title: "SaTe App", desc: "Frontend developer for a mobile app to connect alumni and current students of SMAN 1 Teladan Yogyakarta.", logo: "/TLD.png" },
    { date: "2019 - 2020", title: "V-Tuber Graphic Designer", desc: "V-Tuber Graphic Designer specializing in livestream graphics for YouTube, designing visual assets for Eiko Yukashi and Suzumiya Aizu.", logo: "/kori.jpg" },
  ];

  const education = [
    { date: "Now", title: "Institut Teknologi Bandung", desc: "Sekolah Teknik Elektro dan Informatika - Komputasi", logo: "/ITB.png" },
    { date: "2022-2025", title: "SMA Negeri 1 Yogyakarta", desc: "Mathematical Sciences", logo: "/TLD.png" },
  ];

  return (
    <main className={`${eureka.variable} ${roboto.variable} relative isolate min-h-screen w-full pb-20`}>
        <Navbar />
        <Deco items={[
          { src: "crystal-tree", className: "top-[6%] -right-16 hidden md:block w-80", rotate: 4 },
          { src: "crystal-wings", className: "top-[44%] -left-8 w-28 md:w-48", rotate: -10 },
          { src: "crystal-flowers", className: "top-[74%] -right-8 w-32 md:w-56", rotate: 8 },
        ]} />


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
                        <div className={`flex flex-col md:flex-row items-center p-6 shadow-lg card-facet card-facet-round card-facet-violet rounded-2xl`}>
                            <div className="mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0">
                            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                                <Image src={item.logo} alt="Logo" width={50} height={50} className="object-contain" />
                            </div>
                            </div>
                            <div className="font-[family-name:var(--font-eureka)] text-[#17052A] text-center md:text-left">
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
                        <div className="flex flex-col md:flex-row items-center p-6 card-facet card-facet-round card-facet-violet rounded-2xl shadow-lg">
                            <div className="mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0">
                            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                                <Image src={item.logo} alt="Logo" width={50} height={50} className="object-contain" />
                            </div>
                            </div>
                            <div className="font-[family-name:var(--font-eureka)] text-[#17052A] text-center md:text-left">
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