"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Login() {
  const session = useSession();
  return (
    <div>
      {!session.data ? (
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="text-[1.6em]  text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md py-2 px-3"
        >
          Entrar
        </button>
      ) : (
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-[1.6em]  text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md py-2 px-3"
        >
          Sair
        </button>
      )}
    </div>
  );
}
