import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import CardVideo from "@/components/cardVideo/cardVideo";
import Faixa from "@/types/Faixa";
import Golpe from "@/types/Golpe";
import Kata from "@/types/Kata";
import axios from "axios";
async function getFaixa(faixa: string) {
  try {
    const nome = faixa.charAt(0).toUpperCase() + faixa.slice(1);
    const response = await axios.get(
      `http://localhost:3000/faixas/findByFaixa/${nome}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getFaixa:", error);
    throw error;
  }
}

async function getGolpes(faixa: string) {
  try {
    const response = await axios.get(
      `http://localhost:3000/golpes/findGolpesByFaixa/${faixa}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in getGolpes:", error);
    throw error;
  }
}

async function getKata(faixa: string) {
  try {
    const response = await axios.get(`http://localhost:3000/katas/${faixa}`);
    return response.data;
  } catch (error) {
    console.error("Error in getKata:", error);
    throw error;
  }
}

export default async function Trilha({ params }: any) {
  const faixa = (await getFaixa(params.trilha)) as Faixa;
  const golpes = (await getGolpes(faixa._id)) as Golpe[];
  const kata = (await getKata(faixa._id)) as Kata;
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
                src={kata.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-[2.25em] text-[#868686] my-2">Descrição</p>
              <span className="text-[1.25em]">{kata.descricao}</span>
            </div>
            <CardVideo
              title={kata.nome}
              size="full"
              isSelected={true}
            ></CardVideo>
          </div>
        </div>
      </main>
    </div>
  );
}
