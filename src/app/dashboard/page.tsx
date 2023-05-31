"use client";
import SideBar from "@/components/sideBar/sideBar";
import { User, UserContext } from "@/context/userContext";
import { useContext } from "react";
import { redirect } from "next/navigation";
export default function Dashboard() {
  const userContext = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user") as string) || undefined;
  if (userContext?.user === undefined && !user) {
    redirect("/");
  } else {
    const userLogged = userContext?.user ?? (user as User);
    return (
      <div
        className="flex
      "
      >
        <SideBar />
        <main className="flex-grow max-w-screen-lg">
          <h1 className="text-5xl mb-10">Dashboard</h1>
          <p className="text-4xl">User: {userLogged.displayName}</p>
          <p className="text-4xl">Email: {userLogged.email}</p>
        </main>
      </div>
    );
  }
}
