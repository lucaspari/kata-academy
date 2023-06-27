import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import CardVideo from "@/components/cardVideo/cardVideo";
import Faixa from "@/types/Faixa";
import Golpe from "@/types/Golpe";
async function getFaixa(faixa: string) {
  const response = await fetch(
    `http://localhost:3000/faixas/findByFaixa/${faixa}`
  );
  const faixas = await response.json();
  return faixas;
}
async function getGolpes(faixa: string) {
  const response = await fetch(
    `http://localhost:3000/golpes/findGolpesByFaixa/${faixa}`
  );
  const golpes = await response.json();
  return golpes;
}
export default async function Trilha({ params }: any) {
  const faixa = (await getFaixa(params.trilha)) as Faixa;
  const golpes = (await getGolpes(faixa._id)) as Golpe[];
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow max-w-screen-lg mx-8">
        <div className="mb-[5.5em] mt-[3.93em]">
          <h1 className="text-[3em]">Trilha de aprendizagem</h1>
          <span
            className="text-[1.56em] text-[#868686]
"
          >
            Guia para quem está na {faixa.nome}
          </span>
        </div>
        <div className="kihon">
          <h2 className="text-[2.25em] mb-[1em]">Golpes exigidos no exame:</h2>
          <div className="flex flex-wrap mb-[1em]">
            {golpes.map((golpe: Golpe) => (
              <div className="basis-1/2 my-4" key={golpe.id}>
                <CardVideo
                  title={golpe.nome}
                  url={golpe.urlPath}
                  time={golpe.tempo}
                  size="half"
                  isSelected={false}
                ></CardVideo>
              </div>
            ))}
          </div>
        </div>
        <div className="Kata my-10">
          <p className="text-[2.25em] mb-[1em]">Kata principal:</p>
          <div className="flex items-start gap-4">
            <div className="basis-1/2">
              <iframe
                width="100%"
                height="315"
                src={"https://www.youtube.com/embed/9D2yOzDsW8k"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-[2.25em] text-[#868686] my-2">Descrição</p>
              <span className="text-[1.25em]">
                Jodan significa que será na cabeça, ou seja, o Jodan Age Uke
                serve para defender um golpe vindo na direção da Cabeça. Outro
                golpe semelhante a esses, que servem de defender com as mãos,
                são: Gendan Barai, Soto Uke, Uchi Uke, entre outros.
              </span>
            </div>
            <CardVideo
              title="Heian Shodan"
              time="15:51"
              size="full"
              isSelected={false}
            ></CardVideo>
          </div>
        </div>
        <div className="vejaMais">
          <p className="text-[2.25em] mb-[1em] text-[#868686]">Veja Mais:</p>
          <div className="videos flex gap-2 mb-12">
            <CardVideo
              title="Faixa Amarela"
              size="full"
              isSelected={false}
            ></CardVideo>
            <CardVideo
              title="Faixa Vermelha"
              size="full"
              isSelected={false}
            ></CardVideo>
          </div>
        </div>
      </main>
    </div>
  );
}
