"use client";
import Image from "next/image";
import karate_people from "@/public/karate-people.svg";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { Middle } from "@/components/middleSection/middle";
import Link from "next/link";
import Commentaries from "@/components/commentaries/commentaries";
import { useSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"], weight: "600" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const session = useSession();

  return (
    <main>
      <div className="flex justify-center max-w-screen-lg mx-auto  lg:justify-between h-screen">
        <div className="flex flex-col gap-4  z-10 my-10">
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
            className="border border-solid border-black dark:border-white text-[16px] lg:w-1/3 h-20 lg:text-[2em] flex justify-center items-center"
          >
            <span className="text-center">Aprenda Mais</span>
          </Link>
        </div>
        <div className="hidden lg:inline-block">
          <Image
            width={700}
            className="absolute right-[20%]"
            src={karate_people}
            alt="karate-people"
          ></Image>
        </div>
      </div>
      <Commentaries />
      <Middle />
    </main>
  );
}
