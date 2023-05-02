// import Head from "next/head";
import Image from "next/image";
import Karate_man_left from "@/public/karate-left.png";
import Karate_girl_right from "@/public/karate-right.png";
import Karate_girl_middle from "@/public/karate-middle.png";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import TypeAnimation from "@/components/typeAnimation";
const inter = Inter({ subsets: ["latin"], weight: "600" });
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <main className="max-w-screen-lg  mx-auto flex">
      <div className="flex items-center w-full lg:h-1/2 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <div className="flex flex-col gap-4 mb-4 m-[70px]">
          <div
            className={`${inter.className} text-[5.2em] w-[596px] leading-[62.93px] `}
          >
            <TypeAnimation
              text="Entre no <span class='text-[#FF2F2F]'>tatame</span> digital e
            aprimore as suas técnicas de karate."
            />
          </div>
          <p
            className={`${lato.className} text-[#868686] w-[514px] leading-[30px] text-[25px] text-xl`}
          >
            Aqui, você poderá práticar de forma prática, segura e conveniente,
            tudo isso sem sair de casa.
          </p>
          <button className="text-[23px] rounded-md border border-solid w-[208px] h-[60px] border-black py-2 px-4 text-sm dark:border-white">
            Aprenda Mais
          </button>
        </div>
      </div>
      <div className="w-1/2 h-auto hidden lg:block">
        <Image
          className="absolute left-[55%] z-10"
          src={Karate_girl_middle}
          alt="karate_girl_middle"
        ></Image>
        <Image
          src={Karate_man_left}
          className="absolute left-[40%] bottom-[25%] opacity-[25%]"
          alt="karate_man_left"
        ></Image>
        <Image
          src={Karate_girl_right}
          className="absolute bottom-[25%] left-[55%] opacity-[25%]"
          alt="karate_girl_right"
        ></Image>
      </div>
    </main>
  );
}
