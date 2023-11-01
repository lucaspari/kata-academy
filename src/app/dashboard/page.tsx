"use client";
import SideBar from "@/components/sideBar/sideBar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import chibi from "@/public/karate-chibi.jpg";
import "./style.css";
export default function Dashboard() {
  const session = useSession();
  return session ? (
    <div className="flex">
      <SideBar />
      <main className="max-w-screen-md mt-8">
        <div className="flex items-center">
          <div>
            <h1 className="text-[40px] px-4 py-4 font-bold">Bem-vindo!</h1>
            <p className="text-[20px] px-4 py-4 ">
              Obrigado por se juntar a nossa plataforma de karate, aqui você irá
              aprender técnicas disseminadas pelo karatedô shotokan.
            </p>
          </div>
          <Image
            alt="chibi"
            width={400}
            className="rounded-[4.5rem] m-2 p-2"
            src={chibi}
          ></Image>
        </div>
      </main>
    </div>
  ) : (
    <div>Not Logged</div>
  );
}
