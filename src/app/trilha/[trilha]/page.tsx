import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import CardVideo from "@/components/cardVideo/cardVideo";
import Faixa from "@/types/Faixa";
import Golpe from "@/types/Golpe";
import Kata from "@/types/Kata";
import axios from "axios";
async function getFaixa(faixa: string): Promise<Faixa> {
  try {
    const response = await axios.get<Faixa[]>(
      ` http://localhost:8080/api/v1/faixas/?urlPath=${faixa}`
    );
    if (response.data && response.data.length > 0) {
      const data: Faixa = response.data[0];
      return data;
    } else {
      throw new Error("No data found for the given 'faixa'.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
async function getKata(faixaId: string): Promise<Kata> {
  try {
    const response = await axios.get<Kata>(
      ` http://localhost:8080/api/v1/katas/${faixaId}`
    );
    if (response.data) {
      const data: Kata = response.data;
      return data;
    } else {
      throw new Error("No kata found for the given 'faixa'.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
async function getGolpes(faixaId: string): Promise<Golpe[]> {
  try {
    const response = await axios.get<Golpe[]>(
      ` http://localhost:8080/api/v1/golpes/${faixaId}`
    );

    if (response.data && response.data.length > 0) {
      const data: Golpe[] = response.data;
      return data;
    } else {
      throw new Error("No golpes found for the given 'faixa'.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export default async function Trilha({ params }: any) {
  const faixa = await getFaixa(params.trilha);

  const [kata, golpes] = await Promise.all([
    getKata(faixa.id),
    getGolpes(faixa.id),
  ]);
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
            {golpes &&
              golpes.map((golpe: Golpe) => (
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
