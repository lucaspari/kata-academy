import Link from "next/link";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Jolly_Lodger } from "next/font/google";
import { Poppins } from "next/font/google";
import { Lato } from "next/font/google";
import ThemeChanger from "./themechanger";
interface INavBar {
  children: React.ReactNode;
}
const jolly_lodger = Jolly_Lodger({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Navbar({ children }: INavBar) {
  return (
    <div>
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center mt-4">
        <div>
          <div className={jolly_lodger.className}>
            <div className="tracking-[0.09em] text-[58px] leading-[50px]">
              <span>Ka</span>
              <span className=" text-[#FF2F2F]">ta</span>
            </div>
            <div className={poppins.className}>
              <span className="tracking-[0.12em] leading-[24px] text-base">
                academy
              </span>
            </div>
          </div>
        </div>
        <ul className={`${lato.className} text-[1.6em] flex gap-16`}>
          <li className="flex items-center">
            <ThemeChanger />
          </li>
          <Link href={"#"}>
            <li className="flex gap-2">
              <RiErrorWarningLine className="self-center" />
              <p>Sobre</p>
            </li>
          </Link>
          <li>
            <Link
              className="text-white bg-gradient-to-r from-black to-purple-900 rounded-md py-2 px-4"
              href={"#"}
            >
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bar mt-4"></div>
    </div>
  );
}
