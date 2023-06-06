import React from "react";
import { BiTimeFive } from "react-icons/bi";
import KarateMini from "@/public/miniKarate.svg";
import Image from "next/image";
import Link from "next/link";
interface CardVideo {
  title: string;
  time?: string;
  url?: string;
  size: "full" | "half";
  isSelected: boolean;
}
export default function cardVideo(props: CardVideo) {
  return (
    <Link href={`/golpe/${props.url}`}>
      <button
        className={
          "rounded-2xl px-28 py-1 flex items-center gap-4 " +
          (props.size === "full" ? "w-full " : "w-1/2 ") +
          (props.isSelected ? "gradient-green" : "normal")
        }
      >
        <Image src={KarateMini} alt="karateMini"></Image>
        <div>
          <span className="font-semibold text-3xl">{props.title}</span>
          <div>
            <div className="tempo flex gap-2 font-bold text-[16px] opacity-60">
              <BiTimeFive className="self-center" />
              <span>{props.time}</span>
            </div>
          </div>
        </div>
      </button>
    </Link>
  );
}
