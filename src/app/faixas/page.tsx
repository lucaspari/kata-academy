import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import { Polygon } from "@/components/polygon/polygon";
import { Lato } from "next/font/google";
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
          <Polygon
            color="white"
            className="text-[#fff] text-lg"
            faixa="9 Kyu"
          />
          <Polygon
            color="yellow"
            className="text-[#ffff1a] text-lg"
            faixa="8 Kyu"
          />
          <Polygon
            color="red"
            className="text-[#ff1a1a] text-lg"
            faixa="7 Kyu"
          />
        </div>
      </main>
    </div>
  );
}
