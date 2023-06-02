import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import CardVideo from "@/components/cardVideo/cardVideo";
import path from "path";
import fsPromises from "fs/promises";
async function getGolpes() {
  const folder = path.join(process.cwd(), "src", "karate.json");
  const jsonData = await fsPromises.readFile(folder);
  const objectData = JSON.parse(jsonData.toString()) as any;
  return objectData.golpes;
}
function prepareStringToFind(string: string) {
  return (
    string.charAt(0).toUpperCase() +
    string.slice(1).toLowerCase().replace(" ", "-")
  );
}
interface Golpe {
  id: number;
  nome: string;
  tempo: string;
  faixa: number;
  descricao: string;
  url: string;
  detalhes: string;
}
export default async function Golpe({ params }: any) {
  const golpes = (await getGolpes()) as Golpe[];
  const golpe = golpes.find(
    (golpe: Golpe) => prepareStringToFind(golpe.nome) === params.golpe
  );
  if (golpe) {
    return (
      <div className="flex">
        <SideBar />
        <main className="flex-grow max-w-screen-lg mx-8">
          <div className="title my-4  py-4">
            <h1 className="text-5xl">{golpe.nome}</h1>
          </div>
          <div className="grid grid-rows-3 grid-cols-2 gap-10">
            <div className="video col-start-1 col-end-1">
              <iframe
                width="100%"
                height="315"
                src={golpe.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoSelec col-start-2 col-end-3">
              <p className="text-4xl mb-4">Você está assistindo:</p>
              <CardVideo
                isSelected={true}
                size="full"
                title={golpe.nome}
                time={golpe.tempo}
              ></CardVideo>
            </div>
            <div className="vejaMais col-start-2 col-end-3 row-start-2 row-end-4 flex flex-col gap-4">
              <p className="text-4xl mb-4 ">Veja mais:</p>
              <CardVideo
                isSelected={false}
                size="full"
                title="Gedan Barai"
                time="15:00"
              ></CardVideo>
              <CardVideo
                isSelected={false}
                size="full"
                title="Soto Uke"
                time="22:00"
              ></CardVideo>
              <CardVideo
                isSelected={false}
                size="full"
                title="Uchi Uke"
                time="30:00"
              ></CardVideo>
            </div>
            <div className="descricao row-start-2 row-end-3 text-3xl">
              <p className="text-4xl font-bold my-2">Descrição</p>
              <span className="block text-justify">{golpe.descricao}</span>
            </div>
            <div className="detalhes row-start-3 row-end-4 col-start-1 col-end-3 text-3xl">
              <p className="text-4xl font-bold my-2 text-center">Detalhes</p>
              <p className="text-center">{golpe.detalhes}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
