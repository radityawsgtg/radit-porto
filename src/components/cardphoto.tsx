import { handron, roboto } from "@/app/fonts";
import Image from "next/image";




export default function CardPhoto() {

    return(
            <div className="w-auto relative h-137 card-facet card-facet-round card-facet-amber rounded-4xl flex-col flex mx-auto mt-10 shadow-lg justify-center items-center">
                <div className=" relative w-[327px] h-[206px] ">
                    <Image
                        src="/Rectangle 5873.png"
                        alt="Vector2"
                        fill
                    sizes="(max-width: 768px) 90vw, 420px"
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