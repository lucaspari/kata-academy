import React from "react";
import Image from "next/image";
interface userIconProps {
  src: string;
}
export const UserIcon = (props: userIconProps) => {
  return (
    <div>
      <Image
        width={64}
        height={64}
        className="object-contain rounded-full h-16 w-16"
        src={props.src}
        alt="userIcon"
      ></Image>
    </div>
  );
};
