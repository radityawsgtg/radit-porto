"use client";
import React, { useState, useEffect } from 'react'; // Tambahkan useEffect
import { Roboto } from "next/font/google";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Eye, Trophy, User } from 'lucide-react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const navLink = [
  {name: "Home", href: '/', key: 'home', icon: Home},
  {name: "Project", href: '/project', key: 'project', icon: LayoutGrid},
  {name: "Vision", href: '/vision', key: 'about', icon: Eye},
  {name: "Awards", href: '/awards', key: 'awards', icon: Trophy},
  {name: "About Me", href: '/aboutme', key: 'aboutme', icon: User},
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State untuk deteksi scroll

  // Logic untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
      ${scrolled 
        ? 'top-4 w-[90%] md:w-[80%] max-w-5xl rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl p-3' 
        : 'top-0 w-full p-4 md:p-5'
      }
    `}>
      {/* LAYER BACKGROUND (Hanya muncul kalau belum discroll/masih di top) */}
      {!scrolled && (
        <div className="absolute inset-0 -z-10 transition-opacity duration-500">
          <img 
            src="/bgnav.png" 
            alt="Navbar Background" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <div className={`transition-all duration-500 ${scrolled ? 'w-10 md:w-12' : 'w-12 md:w-16'}`}>
          <img src="/logordait.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* MOBILE HAMBURGER */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 p-2 text-[#f6b5ff]">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* MENU LINKS */}
        <div className={`
          absolute md:relative top-full left-0 w-full md:w-auto 
          flex flex-col md:flex-row items-center justify-center 
          gap-3 md:gap-4 lg:gap-6 p-6 md:p-0
          transition-all duration-300
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] md:translate-y-0 opacity-0 md:opacity-100'}
          ${scrolled ? 'bg-transparent' : 'bg-[#1B165E]/90 md:bg-transparent'}
          backdrop-blur-md md:backdrop-blur-none
        `}>
          {navLink.map((menu) => {
            const isActive = pathname === menu.href;

            return (
              <Link 
                key={menu.name} 
                href={menu.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex flex-row items-center justify-center 
                  px-4 py-2 md:px-5 md:py-1.5
                  gap-2 rounded-full transition-all duration-300 w-full md:w-auto
                  ${isActive 
                    ? 'text-white bg-[#1B165E] shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-white/30 scale-105' 
                    : 'text-[#f6b5ff] hover:bg-white/5'
                  }
                `}
              >
                <menu.icon size={scrolled ? 18 : 22} strokeWidth={2} />
                <span className={`font-semibold text-[12px] md:text-[13px] ${roboto.className}`}>
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}