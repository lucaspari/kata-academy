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
      className="text-base text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md py-2 px-3"
    >
      Entrar
    </button>
  );
}
