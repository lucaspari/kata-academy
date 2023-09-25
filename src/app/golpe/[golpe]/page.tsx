import SideBar from "@/components/sideBar/sideBar";
import CardVideo from "@/components/cardVideo/cardVideo";
import Golpe from "@/types/Golpe";
import axios from 'axios';
async function getGolpe(urlPath: string) {
  const nome = urlPath.charAt(0).toUpperCase() + urlPath.slice(1);
  try {
    const golpe = await axios.get(
      ` http://java-api:8080/api/v1/golpes/?urlPath=${nome}`
    );
    if (golpe.status === 200) {
      return golpe.data[0];
    } else {
      console.log(Error(`Golpe not found with urlPath ${urlPath}`));
    }
  } catch (error) {
    console.error(error);

  }
}
async function getRandomGolpes() {
  try {
    const golpes = await axios.get(
      ` http://java-api:8080/api/v1/golpes/random`
    );
    if (golpes.status === 200) {
      return golpes.data;
    } else {
      throw new Error(`An error occurred while fetching random golpes`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default async function Golpe({ params }: any) {
  let golpe = (await getGolpe(params.golpe)) as Golpe;
  const vejaMais = (await getRandomGolpes()) as Golpe[];
  if (golpe == null) {
    golpe = vejaMais[0];
  }

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
              {vejaMais.map(({ nome, urlPath }) => {
                return (
                  <CardVideo
                    key={nome}
                    isSelected={false}
                    size="full"
                    title={nome}
                    url={urlPath}
                  ></CardVideo>
                );
              })}
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
