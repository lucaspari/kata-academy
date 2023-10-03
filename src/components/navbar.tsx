"use client";
import React from "react";
import { Lato } from "next/font/google";
import ThemeChanger from "./themechanger";
import Login from "./login";
import Logo from "./logo/logo";
import { UserIcon } from "./userIcon/userIcon";
import { useSession } from "next-auth/react";
import Link from "next/link";
const lato = Lato({ subsets: ["latin"], weight: "400" });
export default function Navbar() {
  const session = useSession();
  return (
    <div className="borderBottom flex">
      <div className="mx-20 my-4">
        <Logo />
      </div>
      <nav className="max-w-screen-lg  mx-auto flex justify-between items-center mt-4">
        <ul className={`${lato.className} flex gap-16`}>
          <Link href={'/profile'}>
            {session.data && (
              <UserIcon src={session.data.user?.image as string}></UserIcon>
            )}
          </Link>
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
