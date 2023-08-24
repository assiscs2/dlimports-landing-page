'use client'
import Image from "next/image";
import imageDior from "../assets/dior-img1.jpeg"
import imagePacoRabane from "../assets/paco-rabane-img1.jpeg"

export function Carousel() {

    return (
        <div>
        <div className="m-0 p-0 box-border flex items-center w-[100vw]">
            <div className="flex items-center overflow-x-scroll overflow-y-hidden max-h-[580px] gap-2 transform-gpu">
                <div className="flex-none">
                    <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" />
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none ">
                    <Image priority src={imageDior} height={600} width={480} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none ">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
            </div>
        </div>
        </div>
    )
}
