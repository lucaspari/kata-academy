"use client";
import SideBar from "@/components/sideBar/sideBar";
import Golpe from "@/types/Golpe";
import CardVideo from "@/components/cardVideo/cardVideo";
import React from "react";
import axios from "axios";
import Pagination from "@/components/pagination/pagination";

const fetchAllGolpes = async () => {
    const response = await axios.get("https://karate-api-application-95797bd1cc3f.herokuapp.com/api/v1/golpes/");
    return (await response.data) as Golpe[];
};
export default function Golpes() {
    const [golpes, setGolpes] = React.useState<Golpe[]>([]);
    const [golpesFiltrados, setGolpesFiltrados] = React.useState<Golpe[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1)
    const [golpesPerPage, setGolpesPerPage] = React.useState(5)
    React.useEffect(() => {
        fetchAllGolpes().then((golpes) => {
            setGolpes(golpes);
            setGolpesFiltrados(golpes);
        });
    }, []);

    const indexOfLastGolpe = currentPage * golpesPerPage;
    const indexOfFirstGolpe = indexOfLastGolpe - golpesPerPage;
    const currentGolpes = golpesFiltrados.slice(indexOfFirstGolpe, indexOfLastGolpe);
    const paginate = (number : number) => setCurrentPage(number)
    const handleChange = (value: string) => {
        const filteredGolpes = golpes.filter((golpe: Golpe) =>
            golpe.nome.includes(value),
        );
        setGolpesFiltrados(filteredGolpes);
    };
    return (
        <div className="flex">
            <SideBar/>
            <main className="flex-grow max-w-screen-lg mx-8">
                <div className="flex justify-center relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    <input
                        onChange={(e) => handleChange(e.target.value)}
                        type="search"
                        id="default-search"
                        className="block w-1/2 my-4  p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Procure por golpes..."
                    />
                </div>

                <p className="text-4xl py-2 my-2">Lista De golpes disponíveis </p>
                <div className="flex flex-wrap mb-[1em]">
                    {currentGolpes &&
                        currentGolpes.map((golpe: Golpe) => (
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
                <Pagination paginate={paginate} golpesPerPage={golpesPerPage} totalGolpes={golpesFiltrados.length}></Pagination>
            </main>
        </div>
    );
}
