import localFont from "next/font/local";
import { Roboto } from "next/font/google";

// Declared once: each next/font call is its own font instance, so per-file declarations multiplied the preloads.
export const handron = localFont({ src: "../../public/fonts/Handron-Solid.woff2", variable: "--font-handron", display: "swap" });
export const eureka = localFont({ src: "../../public/fonts/Euskadi-Regular.woff2", variable: "--font-eureka", display: "swap" });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto", display: "swap" });
