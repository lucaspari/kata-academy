"use client";
import React, { useContext } from "react";
import { Lato } from "next/font/google";
import ThemeChanger from "./themechanger";
import Login from "./login";
import Logo from "./logo/logo";
import { UserIcon } from "./userIcon/userIcon";
import { UserContext } from "@/context/userContext";
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Navbar() {
  const user = useContext(UserContext);
  return (
    <div className="borderBottom">
      <nav className="max-w-screen-lg  mx-auto flex justify-between items-center mt-4">
        <Logo />
        <ul className={`${lato.className} flex gap-16`}>
          {user && typeof user.user?.photoURL === "string" && (
            <UserIcon src={user.user.photoURL}></UserIcon>
          )}
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
