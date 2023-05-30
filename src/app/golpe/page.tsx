import React from "react";
import SideBar from "@/components/sideBar/sideBar";
import CardVideo from "@/components/cardVideo/cardVideo";
export default function Golpe() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow max-w-screen-lg mx-8">
        <div className="title my-4  py-4">
          <h1 className="text-5xl">Age Uke</h1>
        </div>
        <div className="grid grid-rows-3 grid-cols-2 gap-10">
          <div className="video col-start-1 col-end-1">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dhl6byuvuxQ"
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
              title="Age Uke"
              time="13:00"
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
            <span>
              é uma técnica de bloqueio executada na faixa alta.
              &quot;Jodan&quot; se refere à faixa alta ou área da cabeça,
              enquanto &quot;Age Uke&quot; significa &quot;bloqueio
              ascendente&quot; em japonês. Ao realizar o Jodan Age Uke, o
              praticante levanta o antebraço verticalmente para bloquear ataques
              dirigidos à região da cabeça. O objetivo é proteger-se de golpes
              como socos, chutes ou golpes de cima para baixo que possam atingir
              essa área.
            </span>
          </div>
          <div className="detalhes row-start-3 row-end-4 col-start-1 col-end-3 text-3xl">
            <p className="text-4xl font-bold my-2 text-center">Detalhes</p>
            <p className="text-center">
              Preste bastante atenção no movimento ascendente, mantenha o
              cotovelo para baixo.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
