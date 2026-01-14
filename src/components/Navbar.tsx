"use client";
import React from 'react';
import { useState } from 'react';
import { Roboto } from "next/font/google";
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const navLink = [
    {name: "Home", href: '/', key: 'home', icon: '/home-icon.svg'},
    {name: "Project", href: '/project', key: 'project', icon: '/project-icon.svg'},
    {name: "Vision", href: '/about', key: 'about', icon: '/vision-icon.svg'},
    {name: "Awards", href: '/awards', key: 'awards', icon: '/awards-icon.svg'},
    {name: "About Me", href: '/aboutme', key: 'aboutme', icon: '/aboutme-icon.svg'},
];

export default function Navbar(){
    const [activetab, setactivetab] = useState('home');

    return(
        <nav className='fixed top-0 left-0 w-full h-auto flex items-center z-50 overflow-hidden p-5'>
            {/* LAYER BACKGROUND GAMBAR */}
            <div className="absolute inset-0 -z-10">
                <img 
                src="/bgnav.png" 
                alt="Navbar Background" 
                className="w-full h-full object-cover opacity-80" // object-cover agar gambar tidak penyet
                />
                {/* Opsional: Tambahkan overlay blur jika gambar terlalu ramai */}
                <div className="absolute inset-0 bg-black/20 "></div>
            </div>
            <div className='mr-auto ml-auto w-16 '>
                <img src="/nextjs.png" alt="" />
            </div>
            <div className='flex space-x-30 px-10'>
                {navLink.map((menu) => (
                    <Link key={menu.name} href={menu.href}
                    onClick={() => setactivetab(menu.name)}
                    className={`flex flex-row pl-6 pr-6 gap-3 rounded-3xl bg-[#1B165E] items-center justify-center transition-all duration-300
                    ${activetab === menu.name 
                        ? 'text-[#ffffff] shadow-[0_0_15px_rgba(168,85,247,0.7),inset_0_0_10px_rgba(255,255,255,0.8)] border border-white/50' 
                        : 'text-[#f6b5ff] hover:bg-white/5'
                    }`}>
                        <img src={menu.icon} alt={menu.name} className="w-10 h-10" />
                        <span className={`mt-2 font-semibold text-[12px] ${roboto.className}`}>{menu.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    )

}
