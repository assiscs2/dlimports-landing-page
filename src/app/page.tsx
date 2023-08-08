import Image from "next/image";
import logoDLimports from "../assets/logo-dlimports.webp"
import logoInstagram from '../assets/instagram-logo.svg'
// import logoFacebook from '../assets/facebook-logo.svg'
import { ContactButton } from "@/components/ContactButton";
import imageFerrariBlack from "../assets/FerrariBlack.webp"
import imageBritneySpears from "../assets/BritneySpears.jpg"


export default function Home() {
  return (
    <main className="flex items-center text-gray-950 flex-col justify-center text-sm min-w-full lg:text-base overflow-hidden antialiased">
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
          className="bg-gray-200"
        >

          <div className="flex flex-col items-center justify-center w-full mx-auto max-w-[820px]">
            <div className="text-center pt-4 px-4 w-full">
              <h1 className="text-[#7f11BB] font-extrabold text-xl underline underline-offset-2 block">Aproveitem!!</h1>
              <p className="text-[#7f11BB] font-extrabold text-base underline-offset-2 inline">As melhores marcas, com os menores preços!</p>
              <p className="mt-2">Na compra de um perfume Ferrari Black ou Fantasy Britney Spears, receba em sua casa com <p className="text-[#7f11BB] font-extrabold underline underline-offset-2 inline"> frete grátis</p> para São Paulo!</p>
              <p>Mas não deixe para depois!! A promoção válida apenas para às 100 primeiras unidades!</p>
            </div>
            <div className="flex flex-col w-full h-auto justify-center items-center ">
              <div className="flex gap-2">
                <div className=" w-full h-auto flex flex-col px-4 py-2 gap-4 ">
                  <div className="w-auto">
                    <div className="bg-white w-[100vw] h-[340px] md:h-[488px] lg:h-[500px] flex items-center justify-center mt-2 p-1 overflow-hidden">
                      <Image src={imageFerrariBlack} height={400} width={400} alt="Imagem de um Perfume Ferrari Black Eau de Toilette" className="h-80 w-80 md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[500px]"/>
                    </div>
                    <div className="text-center flex flex-col gap-1 mt-3 px-4">
                      <p>
                        Ferrari Black Eau de Toilette - Perfume Masculino 125ml
                      </p>
                      <p>Perfume masculino amadeirado e cítrico. Da linha Scuderia Ferrari, sua fragrância é esportiva e sofisticada.</p>
                      <p className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2">
                        Por apenas R$159,99!!
                      </p>
                    </div>
                  </div>
                  <div className="w-auto">
                  <div className="bg-white w-[100vw] h-[340px] md:h-[488px] lg:h-[500px] flex items-center justify-center mt-2 p-1 overflow-hidden">
                      <Image src={imageBritneySpears} height={400} width={400} alt="Imagem de um Perfume Spears Eau de Parfum" className="h-[400px] h-[400px] overflow-hidden md:h-fit md:w-fit lg:h-fit lg:w-fit max-h-[640px]"/>
                    </div>
                    <div className="text-center flex flex-col gap-1 mt-3 px-4">
                      <p>
                        Fantasy Britney Spears Eau de Parfum - Perfume Feminino 100ml
                      </p>
                      <p>Perfume feminino sexy e descolado. Com frutas, perfeito para a mulher romântica, mas que adora provocar.</p>
                      <p className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2">
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
                <div className="text-center pt-4 px-4 w-full mx-auto max-w-[820px] p">
                <div className="bg-gray-100 w-auto flex items-center justify-center mt-2 p-1">
                        Imagem
                    </div>
                  <div>
                    <p className="mt-4">
                      A <a href="https://www.dlimport.com.br/"><p className="text-[#7f11BB] font-extrabold text-base underline underline-offset-2 inline">DL IMPORTS</p></a> foi fundada em 2015, buscando trazer o melhor custo e benefício, com preços justos em produtos das melhores e mais queridas marcas do mercado!
                      <p>Oferecendo ampla variedade, qualidade e excelência, confira nossas opções e com os melhores preços!!</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-700 translate-y-2">Redes sociais:</p>
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
