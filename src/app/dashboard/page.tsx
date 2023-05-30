"use client";
import SideBar from "@/components/sideBar/sideBar";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { redirect } from "next/navigation";
export default function Dashboard() {
  const userContext = useContext(UserContext);
  if (userContext?.user === undefined) {
    redirect("/");
  } else {
    return (
      <div
        className="flex
      "
      >
        <SideBar />
        <main className="flex-grow max-w-screen-lg">
          <h1 className="text-5xl mb-10">Dashboard</h1>
          <p className="text-4xl">User: {userContext.user.displayName}</p>
          <p className="text-4xl">Email: {userContext.user.email}</p>
        </main>
      </div>
    );
  }
}
