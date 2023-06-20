import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import { Polygon } from "@/components/polygon/polygon";

export default function Faixa() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow max-w-screen-lg mx-8">
        <h1 className="text-5xl">Escolha seu Caminho</h1>
        <div className="flex gap-10">
          <Polygon
            color="yellow"
            className="text-[#ffff1a] text-lg"
            faixa="9 Kyu"
          />
          <Polygon
            color="white"
            className="text-[#fff] text-lg"
            faixa="10 Kyu"
          />
          <Polygon
            color="red"
            className="text-[#ff1a1a] text-lg"
            faixa="8 Kyu"
          />
        </div>
      </main>
    </div>
  );
}
