"use client";
import { Lato } from "next/font/google";
import {
  AiOutlineHome,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import {  CiMap } from "react-icons/ci";
import { GiPunch } from "react-icons/gi";
import Link from "next/link";
import axios from "axios";
import Golpe from "@/types/Golpe";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
import { useRouter } from "next/navigation";

export default function SideBar() {
    async function getRandomGolpes() {
        try {
            const golpes = await axios.get(
                `https://karate-api-application-95797bd1cc3f.herokuapp.com/api/v1/golpes/random`
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
  const handleTreinoRapido = async () => {
    const golpes = await getRandomGolpes();
    router.push(`golpe/${golpes[0].urlPath}`);
  }
  const router = useRouter();
  return (
    <div className={"relative h-screen borderRight " + lato.className}>
      <div className="ml-20 text-xl text-b font-normal text-gray-500 uppercase mb-4 mt-8">
        Menu
      </div>
      <nav>
        <ul className="mx-20 flex flex-col gap-8">
          <li className="flex gap-2">
            <AiOutlineHome className="text-4xl" />
            <Link href={"/dashboard"}>
              <span className="text-3xl">Dashboard</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-20 text-xl text-b font-normal text-gray-500 uppercase mb-4 mt-8">
        Treinamento
      </div>
      <nav className="text-3xl">
        <ul className="mx-20 flex flex-col gap-8">
          <li className="flex gap-2">
            <AiOutlineTrophy className="text-4xl" />
            <Link href={"/faixas"}>
              <span className="text-3xl">Faixas</span>
            </Link>
          </li>
          <button

              onClick={() => {handleTreinoRapido()}}
          >
            <li className="flex gap-2">
              <AiOutlineThunderbolt className="text-4xl" />
              <span className="text-3xl whitespace-nowrap">Treino rápido</span>
            </li>
          </button>
          <li className="flex gap-2">
            <GiPunch className="text-4xl" />
            <Link href={"/golpes"}>
              <span className="text-3xl">Golpes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
