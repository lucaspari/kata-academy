import SideBar from "@/components/sideBar/sideBar";
import Golpe from "@/types/Golpe";
import CardVideo from "@/components/cardVideo/cardVideo";
import React from "react";
import axios from "axios";

const fetchAllGolpes = async () => {
    const response = await axios.get("http://java-api:8080/api/v1/golpes/");
    return await response.data as Golpe[]
}
export default async function Golpes() {
    const golpes = await fetchAllGolpes()
    return (
        <div className="flex">
            <SideBar/>
            <main className="flex-grow max-w-screen-lg mx-8">
                <p className="text-4xl py-2 my-2">Lista De golpes disponíveis </p>
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
                <nav className="flex justify-center">
                    <ul className="inline-flex -space-x-px text-[2em]">
                        <li>
                            <a
                                className="flex items-center justify-center px-3 h-12 ml-0 leading-tight
                text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700
                dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Anterior</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-12 leading-tight
                text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
                dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a className="flex items-center justify-center px-3 h-12 leading-tight
                text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700
                dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Próximo</a>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    );
}  
