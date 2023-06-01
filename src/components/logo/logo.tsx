import logo_black from "@/public/logo_black.svg";
import logo_white from "@/public/logo_white.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="hidden dark:inline-block"
        src={logo_black}
        alt="logo"
      ></Image>
      <Image
        className="inline-block dark:hidden"
        src={logo_white}
        alt="logo"
      ></Image>
    </div>
  );
}
