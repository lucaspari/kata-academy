import React from "react";
import SideBar from "@/components/sideBar/sideBar";

export default function Faixa() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-grow max-w-screen-lg mx-8">
        <h1>Faixa</h1>
      </main>
    </div>
  );
}
