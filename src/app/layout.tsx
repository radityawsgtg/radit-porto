import type { Metadata } from "next";
import "./globals.css";
import Backdrop from "@/components/Backdrop";

export const metadata: Metadata = {
  title: "Raditya Workplace",
  description: "Raditya Porto Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden bg-[#17052A]`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "addEventListener('load',function(){setTimeout(function(){document.documentElement.classList.add('anim-ready')},300)})",
          }}
        />
        <Backdrop />
        {children}
      </body>
    </html>
  );
}
