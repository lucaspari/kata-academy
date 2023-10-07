import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardFaixaProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}
export default function CardFaixa({
  image,
  title,
  subtitle,
  href,
}: CardFaixaProps) {
  return (
    <Link
      href={href}
      className="flex basis-1/3 gap-11 border border-white rounded-lg p-4"
    >
      <div>
        <Image
          className="rounded-[20px]"
          src={image}
          width="100"
          alt="belt"
        ></Image>
      </div>
      <div>
        <h2 className="font-bold text-4xl my-2">{title}</h2>
        <span className="text-gray-500 my-2">{subtitle}</span>
      </div>
    </Link>
  );
}
