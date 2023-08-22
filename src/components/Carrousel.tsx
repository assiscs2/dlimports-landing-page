import Image from "next/image";
import imageDior from "../assets/dior-img1.jpeg"
import imagePacoRabane from "../assets/paco-rabane-img1.jpeg"

export function Carrousel() {

    return (
        <div className="flex w-[340px] items-center bg-gray-500">
            <div className="bg-gray-100 flex gap-8 mt-2 overflow-scroll">
                <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imagePacoRabane} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imagePacoRabane} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imagePacoRabane} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
                <Image priority src={imagePacoRabane} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px] ml-6" />
            </div>
        </div>
    )
}