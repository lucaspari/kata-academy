"use client";
import SideBar from "@/components/sideBar/sideBar";
import { useSession } from "next-auth/react";
export default function Dashboard() {
  const session = useSession();
  return session ? (
    <div
      className="flex">
      <SideBar />
      <main className="half-screen mt-8">
        <h1 className="flex justify-center text-3xl">Insert a inspiring text here</h1>
      </main>
    </div>
  ) : (
    <div>Not Logged</div>
  );
}
