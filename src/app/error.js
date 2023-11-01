"use client";
import SideBar from "@/components/sideBar/sideBar";
import Image from "next/image";
import Chibi_crying from "@/public/chibi_crying.jpg";
export default function NotFound() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow max-w-screen-lg mx-8">
        <div className="w-1/2 flex flex-col items-center gap-8">
          <div className="text-5xl text-center my-4">
            Infelizmente essa página não pode ser carregada, por gentileza.
            Contate o administrador
          </div>
          <Image
            src={Chibi_crying}
            className="rounded-lg"
            alt="Chibi_crying"
            width={400}
            height={400}
          />
          <a
            className="text-center text-2xl underline"
            href="mailto:lucaspariii@gmail.com?Subject=Something wrong with application"
            target="_blank"
          >
            Envie um email
          </a>
        </div>
      </main>
    </div>
  );
}
