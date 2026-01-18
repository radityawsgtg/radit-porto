import Image from "next/image";


export default function CardPhoto() {

    return(
            <div className="w-[424px] h-[550px] rounded-[32px] flex-col flex bg-[#FFC76E] mx-auto mt-10 shadow-lg justify-center items-center border-[#FF9955] border-4">
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
                    <h2 className={`text-[30px] font-bold text-center py-2 px-10  ${handron.className}`}>{project.title}</h2>
                </div>
                <h3 className={`text-[20px] text-[#590844] font-bold p-6 text-center mt-4  ${roboto.className}`}>{project.description}</h3>
            
            </div>
    );
}