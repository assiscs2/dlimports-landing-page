import Image from "next/image";
import logoDLimports from "./../../assets/logo-dlimports.webp";
import logoInstagram from "./../../assets/instagram-logo.svg";
import { ContactButton } from "@/components/ContactButton";
import imageFerrariBlack from "./../../assets/ferrariblack-nobg.webp";
import imageBritneySpears from "./../../assets/fantasy-bs-nobg2.png";
import { Marquee } from "@/components/Marquee";

export default function Page() {
     return (
        <main className="flex items-center text-gray-700 text-sm leading-tight font-semibold flex-col justify-center min-w-full lg:text-base overflow-hidden antialiased">
          {/* <head>
          <meta name="facebook-domain-verification" content="1mg6s10ngu5mmjbhrnuvq9j3u4fijh" />
        </head> */}
          <div className="w-full">
    
            <header className="bg-[#7f11BB] h-[4rem] flex items-center justify-center text-yellow-200 lg:h-24">
              <a href="https://www.dlimport.com.br/"
                target="_blank"
              >
                <Image src={logoDLimports} height={120} width={240} alt="logo DLimports" className="h-12 w-auto" />
              </a>
            </header>
            <div
              className="bg-gray-50"
            >
    
              <div className="flex flex-col items-center justify-center w-full mx-auto max-w-[820px]">
                <div className="text-center pt-2 px-6 w-full text-base font-semibold text-gray-700 leading-tight">
                  <h1 className="text-[#7f11BB] font-extrabold text-xl underline underline-offset-2 block mt-1">Aproveitem!!</h1>
                  <p className="text-[#7f11BB] font-extrabold text-base underline-offset-2 inline">As melhores marcas, com os menores preços!</p>
                  <p className="mt-1">Na compra de um perfume Ferrari Black ou Fantasy Britney Spears, receba em sua casa com </p> <strong className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline"> frete grátis</strong><p className="inline"> para São Paulo!</p>
                  <p></p>
                  <p className="mt-1 inline">Mas não deixe para depois!! A promoção válida apenas para às</p> <strong className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">100 primeiras unidades!</strong>
                </div>
                <div className="flex flex-col w-full h-auto justify-center items-center mt-2">
                  <div className="flex gap-2">
                    <div className=" w-full h-auto flex flex-col px-4 py-2 gap-4 ">
                      <div className="w-auto bg-[url('../assets/ferrari-car-image.jpg')] bg-cover bg-center mt-2 -mb-6">
                        <div className=" w-[100vw] h-[340px] md:h-[488px] lg:h-[500px] flex items-center justify-center my-4">
                          <Image priority src={imageFerrariBlack} height={480} width={480} alt="Imagem de um Perfume Ferrari Black Eau de Toilette" className="h-64 w-64 md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[472px]" />
                        </div>
                        <div className="text-center flex flex-col gap-1 -mt-4 p-6 bg-gray-50 translate-y-1">
                          {/* <p className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">
                            Ferrari Black Eau de Toilette - Perfume Masculino 125ml
                          </p> */}
                          <div>
                          <span className="text-[#7f11BB] font-extrabold inline">- </span>
                          <strong className="text-[#7f11BB] font-extrabold text-lg">
                              Ferrari Black Eau de Toilette
                          </strong>
                          <span className="text-[#7f11BB] font-extrabold"> -</span>
                          </div>
                          <p>Perfume masculino amadeirado e cítrico. Da linha Scuderia Ferrari, sua fragrância é esportiva e sofisticada.</p>
                          <p className="text-[#7f11BB] font-extrabold text-xl underline underline-offset-2 mb-2">
                            Por apenas R$159,99!!
                          </p>
                        </div>
                      </div>
                      <div className="w-auto bg-[url('../assets/fantasy-bs-bg1.jpg')] bg-cover bg-center">
                        <div className="w-[100vw] h-[340px] md:h-[488px] lg:h-[500px] flex items-center justify-center mt-3 overflow-hidden">
                          <Image priority src={imageBritneySpears} height={480} width={480} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[348px] w-[348px] overflow-hidden md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px]" />
                        </div>
                        <div className="bg-gray-50 p-6 text-center flex flex-col gap-1 translate-y-1">
                          {/* <p className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">
                            Fantasy Britney Spears Eau de Parfum - Perfume Feminino 100ml
                          </p> */}
                          <div>
                          <span className="text-[#7f11BB] font-extrabold inline">- </span>
                            <strong className="text-[#7f11BB] font-extrabold text-lg inline">
                              Fantasy Britney Spears Eau de Parfum
                            </strong>
                            <span className="text-[#7f11BB] font-extrabold"> -</span>
                          </div>
                          <p>Perfume feminino sexy e descolado. Com frutas, perfeito para a mulher romântica, mas que adora provocar.</p>
                          <p className="text-[#7f11BB] font-extrabold text-xl underline underline-offset-2">
                            Por apenas R$189,99!!
                          </p>
                        </div>
                      </div>
    
                    </div>
                  </div>
                  <div>
                    <div className="px-4 flex items-center justify-center">
                      < ContactButton />
                    </div>
                    <div className="text-center pt-4 px-4 w-full mx-auto max-w-[820px]">
                      <div>
                        <div className="px-6 mt-4">
                          <p className="inline">A </p><a href="https://www.dlimport.com.br/"><strong className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">DL IMPORTS</strong></a> <p className="inline"> foi fundada em 2015, buscando trazer o melhor custo e benefício, com preços justos em produtos das melhores e mais queridas marcas do mercado!</p>
                          <p>Oferecendo ampla variedade, qualidade e excelência, confira nossas opções e com os melhores preços!!</p>
                        </div>
                      </div>
                      <div>
                        <p className="mt-4 px-6"> Trabalhamos apenas com <strong className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">produtos originais</strong> de diversas marcas renomadas, como <strong className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">Dior e Paco Rabane</strong> , entre outras! Com garantia de satisfação em qualidade e atendimento!</p>
                      </div>
                      <div className="flex items-center justify-center h-auto py-6">
                        {/* <Carousel /> */}
                        <Marquee />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-700 translate-y-2 mt-2">Redes sociais:</p>
              <div className="flex gap-2 justify-center items-center p-2">
    
                <a href="https://www.instagram.com/dl.imports.oficial/" target="_blank">
                  <Image src={logoInstagram} height={48} width={48} alt="Logo do instagram" className="max-h-[3rem] max-w-[3rem]" />
                </a>
                {/* <a href="" target="_blank">
                  <Image src={logoFacebook} height={48} width={48} alt="Logo do facebook" className="max-h-[2.8rem] max-w-[2.8rem]" />
                </a> */}
              </div>
    
            </div>
          </div>
          <footer className="bg-[#952cce] p-4 flex items-center justify-center w-full">
            <a href="https://www.dlimport.com.br/"
              target="_blank"
            >
              <p className="font-bold text-gray-100">
                DLImports
              </p>
            </a>
          </footer>
        </main>
      )
}
