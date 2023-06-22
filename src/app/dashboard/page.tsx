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
      <main className="half-screen mt-8">
        <h1 className="text-5xl mb-10">Dashboard</h1>
        <p className="text-4xl">User: {session?.data?.user?.name}</p>
        <p className="text-4xl">Email: {session?.data?.user?.email}</p>
      </main>
    </div>
  ) : (
    <div>Not Logged</div>
  );
}
