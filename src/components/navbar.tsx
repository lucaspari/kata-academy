import Link from "next/link";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Lato } from "next/font/google";
import ThemeChanger from "./themechanger";
import Login from "./login";
import Logo from "./logo/logo";

const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Navbar() {
  return (
    <div className="borderBottom">
      <nav className="max-w-screen-lg  mx-auto flex justify-between items-center mt-4">
        <Logo />
        <ul className={`${lato.className} flex gap-16`}>
          <li className="flex items-center">
            <ThemeChanger />
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
