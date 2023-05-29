import { Lato } from "next/font/google";
import {
  AiOutlineHome,
  AiOutlineSave,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CiMedal, CiMap } from "react-icons/ci";
import { GiPunch } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import Link from "next/link";
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });
export default function SideBar() {
  return (
    <div className={"fixed h-screen borderRight " + lato.className}>
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
          <li className="flex gap-2">
            <AiOutlineSave className="text-4xl" />
            <span className="text-3xl">Salvos</span>
          </li>
          <li className="flex gap-2">
            <CiMedal className="text-4xl" />
            <span className="text-3xl">Certificados</span>
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
            <Link href={"/trilha"}>
              <span className="text-3xl">Faixas</span>
            </Link>
          </li>
          <li className="flex gap-2">
            <AiOutlineThunderbolt className="text-4xl" />
            <span className="text-3xl">Treino rápido</span>
          </li>
          <li className="flex gap-2">
            <GiPunch className="text-4xl" />
            <Link href={"/golpe"}>
              <span className="text-3xl">Golpes</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-20 text-xl text-b font-normal text-gray-500 uppercase mb-4 mt-8">
        Conta
      </div>
      <nav className="text-3xl">
        <ul className="mx-20 flex flex-col gap-8">
          <li className="flex gap-2">
            <GoGear className="text-4xl" />
            <span className="text-3xl">Configurações</span>
          </li>
          <li className="flex gap-2">
            <AiOutlineQuestionCircle className="text-4xl" />
            <span className="text-3xl">Ajuda</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
