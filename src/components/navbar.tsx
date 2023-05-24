import Link from "next/link";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Jolly_Lodger } from "next/font/google";
import { Poppins } from "next/font/google";
import { Lato } from "next/font/google";
import ThemeChanger from "./themechanger";
import Login from "./login";

const jolly_lodger = Jolly_Lodger({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Navbar() {
  return (
    <div className="borderBottom">
      <nav className="max-w-screen-lg  mx-auto flex justify-between items-center mt-4">
        <div>
          <div className={jolly_lodger.className}>
            <div className="tracking-[0.09em] text-[58px] leading-[50px]">
              <span>Ka</span>
              <span className=" text-[#FF2F2F]">ta</span>
            </div>
            <div className={poppins.className}>
              <span className="tracking-[0.12em] leading-[24px] text-[1.6em]">
                academy
              </span>
            </div>
          </div>
        </div>
        <ul className={`${lato.className} flex gap-16`}>
          <li className="flex items-center">
            <ThemeChanger />
          </li>
          <li className="flex  gap-2">
            <RiErrorWarningLine size={20} className="self-center" />
            <p className="self-center text-[1.6em] ">Sobre</p>
          </li>
          <li>
            <Login></Login>
          </li>
        </ul>
      </nav>
      <div className="bar mt-4 dark:bg-[#030713]"></div>
    </div>
  );
}
