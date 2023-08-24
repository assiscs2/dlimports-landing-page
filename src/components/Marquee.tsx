'use client'
import Image from "next/image";
import imageDior from "../assets/dior-img1.jpeg"
import imagePacoRabane from "../assets/paco-rabane-img1.jpeg"
import { disconnect } from "process";


export function Marquee() {

    return (
        <div className="h-[580px] overflow-hidden">
        <div className="relative flex overflow-x-hidden">
            <div className="lg:animate-marquee md:animate-marquee whitespace-nowrap flex animate-marquee2">
                <div className="flex-none">
                    <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" />
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" />
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" />
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" />
                </div>


            </div>
            </div>
            {/* <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                <div className="flex-none">
                    <Image priority src={imageDior} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" />
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={600} width={600} alt="Imagem de um Perfume Spears Eau de Parfum"/>
                </div>

            </div> */}
        </div>
    )
}
