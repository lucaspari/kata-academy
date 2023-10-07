import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import { Polygon } from "@/components/polygon/polygon";
import { Lato } from "next/font/google";
import Link from "next/link";
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Faixa() {
  return (
    <div className="flex">
      <SideBar />
      <main className="half-screen mt-8">
        <h1 className={"text-5xl text-center mb-9 " + lato.className}>
          Escolha seu Caminho
        </h1>
        <div className="flex gap-10 justify-center">
          <Link href={"/trilha/Faixa-branca"}>
            <Polygon
              color="white"
              className="text-[#fff] text-lg"
              faixa="9 Kyu"
            />
          </Link>
          <Link href={"/trilha/Faixa-amarela"}>
            <Polygon
              color="yellow"
              className="text-[#ffff1a] text-lg"
              faixa="8 Kyu"
            />
          </Link>
          <Link href={"/trilha/Faixa-vermelha"}>
            <Polygon
              color="red"
              className="text-[#FF3333] text-lg"
              faixa="7 Kyu"
            />
          </Link>
          <Link href={"/trilha/Faixa-laranja"}>
            <Polygon
              color="orange"
              className="text-[#F0751A] text-lg"
              faixa="6 Kyu"
            />
          </Link>
          <Link href={"/trilha/Faixa-verde"}>
            <Polygon
              color="green"
              className="text-[#19ED0B] text-lg"
              faixa="5 Kyu"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
