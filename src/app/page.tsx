import Head from "next/head";
import Image from "next/image";
import karatephoto from "@/public/karateMan.jpeg";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import TypeAnimation from "@/components/typeAnimation";
const inter = Inter({ subsets: ["latin"], weight: "600" });
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto grid grid-cols-2 mt-8">
      <div className="left justify-between">
        <div className="flex flex-col gap-4 mb-4">
          <div className={`${inter.className} text-5xl`}>
            <TypeAnimation text="Entre no tatame digital e aprimore suas técnicas de karate."></TypeAnimation>
          </div>
          <p className={`${lato.className} text-[#868686] text-xl`}>
            Aqui, você poderá práticar de forma prática, segura e conveniente,
            tudo isso sem sair de casa.
          </p>
        </div>
        <button className=" rounded-md border border-solid border-black py-2 px-4 text-sm">
          Aprenda Mais
        </button>
      </div>
      <div className="right">
        <Image
          className="w-[565px] rounded-full"
          src={karatephoto}
          alt="karate"
        ></Image>
      </div>
    </main>
  );
}
