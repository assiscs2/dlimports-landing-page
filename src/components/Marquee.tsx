'use client'
import Image from "next/image";
import imageDior from "../assets/carousel-images/dior-img1.jpeg"
import imagePacoRabane from "../assets/carousel-images/paco-rabane-img1.jpeg"
import imageBvlgari from "../assets/carousel-images/Bvlgari-img1.jpg"
import imageCHerrera from "../assets/carousel-images/CHerrera-img1.jpg"
import imageCk from "../assets/carousel-images/Ck-img1.webp"
import imageHBoss from "../assets/carousel-images/HBoss-img1.jpg"



export function Marquee() {

    return (
        <div className="h-[580px] overflow-hidden">
        <div className="relative flex overflow-x-hidden">
            <div className="flex animate-carouselMobile sm:animate-carousel md:animate-carousel lg:animate-carousel whitespace-nowrap">
                <div className="flex-none">
                    <Image priority src={imageDior} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageBvlgari} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageCHerrera} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageCk} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageHBoss} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imageDior} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>
                <div className="flex-none">
                    <Image priority src={imagePacoRabane} height={580} width={580} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[580px] w-[580px]"/>
                </div>

            </div>
            </div> 
        </div>
    )
}
