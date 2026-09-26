import Image from "next/image";
import Handron from "next/font/local";
import Eureka from "next/font/local";
import { Roboto } from "next/font/google";

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


export default function CardPhoto() {

    return(
            <div className="w-auto relative h-137 card-facet card-facet-round card-facet-amber rounded-4xl flex-col flex mx-auto mt-10 shadow-lg justify-center items-center">
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
                    <h2 className={`text-[30px] font-bold text-center py-2 px-10  ${handron.className}`}>Judul projek</h2>
                </div>
                <h3 className={`text-[20px] text-[#590844] font-bold p-6 text-center mt-4  ${roboto.className}`}>Deskripsi project </h3>
            </div>
    );
}