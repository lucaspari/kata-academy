"use client";
import { auth } from "@/firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <button
      onClick={() => signIn()}
      className="text-white bg-gradient-to-r from-black to-purple-900 rounded-md py-2 px-4"
    >
      Entrar
    </button>
  );
}
