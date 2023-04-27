"use client";
interface ITypeAnimation {
  text: string;
}
import { Inter } from "next/font/google";
import Typewriter from "typewriter-effect";
const inter = Inter({ subsets: ["latin"], weight: "600" });
export default function TypeAnimation({ text }: ITypeAnimation) {
  return (
    <Typewriter
      onInit={(typewritter) => {
        typewritter.typeString(text).start();
      }}
    ></Typewriter>
  );
}
