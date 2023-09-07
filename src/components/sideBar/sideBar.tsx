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
async function getRandomGolpes() {
  try {
    const response = await axios.get(
      `http://localhost:3000/golpes/randomGolpe`
    );
    const golpe = response.data as Golpe;
    return golpe.urlPath;
  } catch (error) {
    console.error("Error in getGolpes:", error);
  }
}
export default function SideBar() {
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
            <CiMap className="text-4xl" />
            <span className="text-3xl">Roadmap</span>
          </li>
          <li className="flex gap-2">
            <AiOutlineTrophy className="text-4xl" />
            <Link href={"/faixas"}>
              <span className="text-3xl">Faixas</span>
            </Link>
          </li>
          <button
            onClick={async () =>
              router.push(`/golpe/${await getRandomGolpes()}`)
            }
          >
            <li className="flex gap-2">
              <AiOutlineThunderbolt className="text-4xl" />
              <span className="text-3xl">Treino rápido</span>
            </li>
          </button>
          <li className="flex gap-2">
            <GiPunch className="text-4xl" />
            <Link href={"/golpe"}>
              <span className="text-3xl">Golpes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
