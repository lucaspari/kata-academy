"use client";
import SideBar from "@/components/sideBar/sideBar";
import { useSession } from "next-auth/react";
export default function Dashboard() {
  const session = useSession();
  return session ? (
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
