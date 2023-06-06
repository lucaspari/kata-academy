import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import Golpe from "@/types/Golpe";
import path from "path";
import fsPromises from "fs/promises";
import CardVideo from "@/components/cardVideo/cardVideo";
interface TrilhaProps {
  faixa: string;
  golpes: Golpe[];
}
async function getFaixa() {
  const folder = path.join(process.cwd(), "src", "karate.json");
  const jsonData = await fsPromises.readFile(folder);
  const objectData = JSON.parse(jsonData.toString()) as any;
  return objectData.faixas;
}
export default function Trilha(props: TrilhaProps) {
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
            Guia para quem está na {props.faixa}Faixa Branca
          </span>
        </div>
        <div className="kihon">
          <h2 className="text-[2.25em] mb-[1em]">Golpes exigidos no exame:</h2>
          <div className="flex flex-wrap mb-[1em]">
            <div className="basis-1/2 my-4">
              <CardVideo
                title="Gedan Barai"
                url="Gedan-barai"
                time="15:51"
                size="half"
                isSelected={false}
              ></CardVideo>
            </div>
            <div className="basis-1/2 my-4">
              <CardVideo
                title="Gedan Barai"
                url="Gedan-barai"
                time="15:51"
                size="half"
                isSelected={false}
              ></CardVideo>
            </div>
            <div className="basis-1/2 my-4">
              <CardVideo
                title="Gedan Barai"
                url="Gedan-barai"
                time="15:51"
                size="half"
                isSelected={false}
              ></CardVideo>
            </div>
            <div className="basis-1/2 my-4">
              <CardVideo
                title="Gedan Barai"
                url="Gedan-barai"
                time="15:51"
                size="half"
                isSelected={false}
              ></CardVideo>
            </div>
            <div className="basis-1/2 my-4">
              <CardVideo
                title="Gedan Barai"
                url="Gedan-barai"
                time="15:51"
                size="half"
                isSelected={false}
              ></CardVideo>
            </div>
            <div className="basis-1/2 my-4">
              <CardVideo
                title="Gedan Barai"
                url="Gedan-barai"
                time="15:51"
                size="half"
                isSelected={false}
              ></CardVideo>
            </div>
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
