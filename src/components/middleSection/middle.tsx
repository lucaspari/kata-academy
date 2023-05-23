"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import KarateMini from "@/public/miniKarate.svg";
import { BiTimeFive } from "react-icons/bi";
import "./style.css";
const inter = Inter({ subsets: ["latin"], weight: ["600", "300"] });
export const Middle = () => {
  const kataList = [
    {
      name: "Heian Shodan",
      url: "https://www.youtube.com/embed/9D2yOzDsW8k",
    },
    {
      name: "Heian Nidan",
      url: "https://www.youtube.com/embed/6Hc1NMdjU9U",
    },
    {
      name: "Heian Sandan",
      url: "https://www.youtube.com/embed/8OI-FTV3-4o",
    },
    {
      name: "Heian Yondan",
      url: "https://www.youtube.com/embed/HrAiTCcatbY",
    },
    {
      name: "Heian Godan",
      url: "https://www.youtube.com/embed/dBFe54glhTs",
    },
  ];
  const [iframeSrc, setIframeSrc] = useState(kataList[0]);
  const handleClick = (kata: string) => {
    const kataIndex = kataList.filter((k) => k.name === kata);
    setIframeSrc(kataIndex[0]);
  };
  return (
    <section
      className={
        inter.className + " h-[800px] mx-2 lg:max-w-screen-lg lg:mx-auto"
      }
    >
      <div>
        <p className="text-[4em] text-center lg:text-left dark:text-white mb-10 font-semibold">
          Aperfeiçoe suas técnicas
        </p>
        <div className="text-center lg:text-left dark:text-[#EBEBEB] opacity-70 font-light text-[15px]">
          <p>É possível aprender como executar cada técnica</p>
          <p>vista da sua aula, na sua casa.</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-2 justify-center md:grid md:grid-cols-2 md:place-items-center">
        <div className="left rounded-md w-[500px] h-[300px]">
          <iframe
            height={"100%"}
            width={"100%"}
            src={iframeSrc.url}
            title="Heians"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right text-[26px] flex flex-col gap-8">
          <button
            onClick={() => handleClick("Heian Shodan")}
            className={`rounded-2xl px-28 py-1 flex items-center gap-4 ${
              iframeSrc.name === "Heian Shodan" ? "gradient-green" : "normal"
            }`}
          >
            <Image src={KarateMini} alt="karateMini"></Image>
            <div>
              <span className="font-semibold">Heian Shodan</span>
              <div>
                <div className="tempo flex gap-2 font-bold text-[16px] opacity-60">
                  <BiTimeFive className="self-center" />
                  <span>2 Minutos</span>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={() => handleClick("Heian Nidan")}
            className={`rounded-2xl px-28 py-1 flex items-center gap-4 ${
              iframeSrc.name === "Heian Nidan" ? "gradient-green" : "normal"
            }`}
          >
            <Image src={KarateMini} alt="karateMini"></Image>
            <div>
              <span className="font-semibold">Heian Nidan</span>
              <div>
                <div className="tempo flex gap-2 font-bold text-[16px] opacity-60">
                  <BiTimeFive className="self-center" />
                  <span>2 Minutos</span>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={() => handleClick("Heian Sandan")}
            className={`rounded-2xl px-28 py-1 flex items-center gap-4 ${
              iframeSrc.name === "Heian Sandan" ? "gradient-green" : "normal"
            }`}
          >
            <Image src={KarateMini} alt="karateMini"></Image>
            <div>
              <span className="font-semibold">Heian Sandan</span>
              <div>
                <div className="tempo flex gap-2 font-bold text-[16px] opacity-60">
                  <BiTimeFive className="self-center" />
                  <span>2 Minutos</span>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={() => handleClick("Heian Yondan")}
            className={`rounded-2xl px-28 py-1 flex items-center gap-4 ${
              iframeSrc.name === "Heian Yondan" ? "gradient-green" : "normal"
            }`}
          >
            <Image src={KarateMini} alt="karateMini"></Image>
            <div>
              <span className="font-semibold">Heian Yondan</span>
              <div>
                <div className="tempo flex gap-2 font-bold text-[16px] opacity-60">
                  <BiTimeFive className="self-center" />
                  <span>2 Minutos</span>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={() => handleClick("Heian Godan")}
            className={`rounded-2xl px-28 py-1 flex items-center gap-4 ${
              iframeSrc.name === "Heian Godan" ? "gradient-green" : "normal"
            }`}
          >
            <Image src={KarateMini} alt="karateMini"></Image>
            <div>
              <span className="font-semibold">Heian Godan</span>
              <div>
                <div className="tempo flex gap-2 font-bold text-[16px] opacity-60">
                  <BiTimeFive className="self-center" />
                  <span>2 Minutos</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
