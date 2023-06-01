"use client";
import SideBar from "@/components/sideBar/sideBar";
import { User, UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import useGoogleAuth from "@/components/useGoogleAuth/useGoogleAuth";
export default function Dashboard() {
  const isLogged = useGoogleAuth();
  return isLogged ? (
    <div
      className="flex
    "
    >
      <SideBar />
      <main className="flex-grow max-w-screen-lg">
        <h1 className="text-5xl mb-10">Dashboard</h1>
        <p>Logado</p>
        {/* <p className="text-4xl">User: {userLogged.displayName}</p>
        <p className="text-4xl">Email: {userLogged.email}</p> */}
      </main>
    </div>
  ) : (
    <div>Not Logged</div>
  );
}
