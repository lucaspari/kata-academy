"use client";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { GiExitDoor } from "react-icons/gi";

export const Logout = () => {
  const router = useRouter();
  const user = useContext(UserContext);
  const handleClick = () => {
    user?.logout();
    window.localStorage.removeItem("user");
    router.push("/");
  };
  return (
    <button className="flex gap-2" onClick={handleClick}>
      <GiExitDoor className="text-4xl" />
      <span className="text-3xl">Sair</span>
    </button>
  );
};
