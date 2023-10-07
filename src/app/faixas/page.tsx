import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import { Polygon } from "@/components/polygon/polygon";
import { Lato } from "next/font/google";
import Link from "next/link";
import CardFaixa from "@/components/cardFaixa/cardFaixa";
const lato = Lato({ subsets: ["latin"], weight: "400" });
import branca from "@/public/branca.svg";
import amarelo from "@/public/amarelo.svg";
import laranja from "@/public/laranja.svg";
import verde from "@/public/verde.svg";
import roxo from "@/public/roxo.svg";
import vermelha from "@/public/vermelha.svg";
export default function Faixa() {
  return (
    <div className="flex">
      <SideBar />
      <main className="half-screen mt-8">
        <h1 className={"text-5xl text-center mb-9 " + lato.className}>
          Escolha seu Caminho
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <CardFaixa
            title="9º Kyu"
            subtitle="Faixa Branca"
            href="/trilha/Faixa-branca"
            image={branca}
          />
          <CardFaixa
            title="8º Kyu"
            subtitle="Faixa Amarela"
            href="/trilha/Faixa-amarela"
            image={amarelo}
          />
          <CardFaixa
            title="7º Kyu"
            subtitle="Faixa vermelha"
            href="/trilha/Faixa-vermelha"
            image={vermelha}
          />
          <CardFaixa
            title="6º Kyu"
            subtitle="Faixa Laranja"
            href="/trilha/Faixa-laranja"
            image={laranja}
          />
          <CardFaixa
            title="5º Kyu"
            subtitle="Faixa Verde"
            href="/trilha/Faixa-verde"
            image={verde}
          />
          <CardFaixa
            title="4º Kyu"
            subtitle="Faixa Roxa"
            href="/trilha/Faixa-roxa"
            image={roxo}
          />
        </div>
      </main>
    </div>
  );
}
