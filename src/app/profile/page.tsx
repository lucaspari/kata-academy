"use client"
import React from 'react'
import SideBar from '@/components/sideBar/sideBar';
import { useSession } from 'next-auth/react';
import Image from "next/image";
export default function Profile() {
  const session = useSession();
  return session ? (
    <div className="flex">
      <SideBar />
      <main className="half-screen mt-8 flex flex-col items-center ">
        {session.data && (
          <Image
            width={120}
            height={120}
            className="rounded-full my-4"
            src={session.data.user?.image as string}
            alt="userIcon"
          ></Image>
        )}
        <p className="text-4xl">User: {session?.data?.user?.name}</p>
        <p className="text-4xl">Email: {session?.data?.user?.email}</p>
      </main>
    </div>
  ) : (
    <div>Not Logged</div>
  );
}
