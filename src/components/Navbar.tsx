"use client";
import React, { useState } from 'react';
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
  {name: "Vision", href: '/vision', key: 'about', icon: '/vision-icon.svg'},
  {name: "Awards", href: '/awards', key: 'awards', icon: '/awards-icon.svg'},
  {name: "About Me", href: '/aboutme', key: 'aboutme', icon: '/aboutme-icon.svg'},
];

export default function Navbar() {
  const [activetab, setactivetab] = useState('home');
  const [isOpen, setIsOpen] = useState(false); // State untuk mobile menu

    return (
        <nav className='fixed top-0 left-0 w-full z-50 p-4 md:p-5'>
        {/* LAYER BACKGROUND */}
        <div className="absolute inset-0 -z-10">
            <img 
            src="/bgnav.png" 
            alt="Navbar Background" 
            className="w-full h-full object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* LOGO */}
            <div className='w-12 md:w-16 transition-all'>
            <img src="/nextjs.png" alt="Logo" className="w-full h-auto" />
            </div>

            {/* MOBILE HUMBURGER BUTTON */}
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            >
            <span className={`block w-6 h-0.5 bg-[#f6b5ff] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#f6b5ff] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#f6b5ff] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* MENU LINKS */}
            <div className={`
            absolute md:relative top-full left-0 w-full md:w-auto 
            flex flex-col md:flex-row 
            items-center justify-center 
            gap-4 md:gap-6 lg:gap-10 
            p-6 md:p-0
            transition-all duration-300 ease-in-out
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] md:translate-y-0 opacity-0 md:opacity-100'}
            bg-[#1B165E]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
            `}>
            {navLink.map((menu) => (
                <Link 
                key={menu.name} 
                href={menu.href}
                onClick={() => {
                    setactivetab(menu.name);
                    setIsOpen(false); // Tutup menu setelah klik di mobile
                }}
                className={`
                    flex flex-row items-center justify-center 
                    px-5 py-2 md:px-6 md:py-1
                    gap-3 rounded-3xl bg-[#1B165E] 
                    transition-all duration-300 w-full md:w-auto
                    ${activetab === menu.name 
                    ? 'text-[#ffffff] shadow-[0_0_15px_rgba(168,85,247,0.7),inset_0_0_10px_rgba(255,255,255,0.8)] border border-white/50 scale-105' 
                    : 'text-[#f6b5ff] hover:bg-white/10'
                    }
                `}
                >
                <img src={menu.icon} alt={menu.name} className="w-6 h-6 md:w-8 md:h-8" />
                <span className={`font-semibold text-[12px] md:text-[14px] ${roboto.className}`}>
                    {menu.name}
                </span>
                </Link>
            ))}
            </div>
        </div>
        </nav>
    );
}