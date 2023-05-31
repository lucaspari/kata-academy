"use client";
import React from "react";
import { GiExitDoor } from "react-icons/gi";

export const Logout = () => {
  return (
    <button className="flex gap-2">
      <GiExitDoor className="text-4xl" />
      <span className="text-3xl">Sair</span>
    </button>
  );
};
