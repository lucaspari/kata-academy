"use client";
import SideBar from "@/components/sideBar/sideBar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import chibi from "@/public/karate-chibi.jpg";
import "./style.css"
export default function Dashboard() {
  const session = useSession();
  return session ? (
    <div
      className="flex">
      <SideBar />
      <main className="half-screen mt-8">
        <div className="flex flex-col items-center">
        <Image alt="chibi" width={400} className="rounded-[4.5rem] m-2 p-2" src={chibi}></Image>
        <h1 className="flex justify-center text-3xl m-2 p-2 text-align-last-center">
          Obrigado por se juntar a nossa plataforma de karate,
          aqui você ira aprender técnicas disseminadas pelo karatedô shotokan,
          este sendo considerado um karate moderno
          onde sua filosofia é baseada no respeito, disciplina e humildade.
        </h1>
        </div>
      </main>
    </div>
  ) : (
    <div>Not Logged</div>
  );
}
