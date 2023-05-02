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
    <main className="max-w-screen-lg h-screen mx-auto flex">
      <div className="flex items-center w-full lg:h-1/2 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <div className="flex flex-col gap-4 mb-4">
          <div className={`${inter.className} text-5xl min-h-[200px]`}>
            <TypeAnimation text="Entre no <span class='text-[#FF2F2F]'>tatame</span> digital e aprimore suas técnicas de karate."></TypeAnimation>
          </div>
          <p className={`${lato.className} text-[#868686] text-xl`}>
            Aqui, você poderá práticar de forma prática, segura e conveniente,
            tudo isso sem sair de casa.
          </p>
          <button className="rounded-md border border-solid w-[288px] border-black py-2 px-4 text-sm dark:border-white">
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
          className="absolute left-[40%] bottom-[20%] opacity-[25%]"
          alt="karate_man_left"
        ></Image>
        <Image
          src={Karate_girl_right}
          className="absolute bottom-[20%] left-[55%] opacity-[25%]"
          alt="karate_girl_right"
        ></Image>
      </div>
    </main>
  );
}
