import Image from "next/image";
import whatsappLogo from "../assets/icons8-whatsapp.svg";

export function ContactButton() {

return(
   <a
            href={`https://api.whatsapp.com/send?phone=+5511970866878&text=Quero garantir meus perfumes Ferarri Black e/ou Britney Spears!`}   
            target="_blank"     
        >
            <button

                className="flex h-7 bg-[#7f11BB] border-2 border-gray-700 py-9 px-1 items-center w text-black font-bold rounded-2xl hover:bg-[#642e81] transition-colors w-[92vw] max-w-[42rem] md:px-4 lg:px-6"
                
                type="button"

            >
                <Image
                    src={whatsappLogo}
                    alt="logo do whatsapp"
                    width={68}
                    height={68}
                    className="max-h-[3rem] max-w-[3rem] translate-x-2"
                />

                <div className="flex flex-col text-center w-full -translate-x-[0.6rem]">
                <p className="font-extrabold text-lg text-gray-200">Não quero perder essas oportunidades!</p>
                </div>
            </button>
        </a>
)
}