// import Head from "next/head";
import Image from "next/image";
import Karate_man_left from "@/public/karate-left.png";
import Karate_girl_right from "@/public/karate-right.png";
import Karate_girl_middle from "@/public/karate-middle.png";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { Middle } from "@/components/middleSection/middle";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"], weight: "600" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <div className="flex justify-center  lg:justify-between h-screen">
        <div className="flex flex-col gap-4 w-1/2 z-10 my-10">
          <div className={`${inter.className} text-[4.5em]`}>
            <p>
              Entre no <span className="text-[#FF2F2F]">tatame</span> digital
            </p>
            <p>e aprimore as suas</p>
            <p>técnicas de karate.</p>
          </div>
          <div
            className={`${lato.className} text-[#868686] lg:w-[514px] leading-[30px] text-[2em]`}
          >
            <p>Aqui, você poderá praticar de forma segura e</p>
            <p>conveniente, tudo isso sem sair de casa.</p>
          </div>
          <Link
            href={"/golpe"}
            className="text-[2em] rounded-md border border-solid w-1/3 h-20 text-center border-black py-2 px-4 text-sm dark:border-white"
          >
            Aprenda Mais
          </Link>
        </div>
        <div className="hidden lg:block">
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
      </div>
      <Middle />
    </main>
  );
}
