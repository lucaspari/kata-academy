"use client";
import { auth } from "@/firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { User, UserContext } from "@/context/userContext";
import { useContext } from "react";
export default function Login() {
  const userContext = useContext(UserContext)
  if (!userContext) {
    throw new Error('User context is null or undefined');
  }
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const user : User ={
        displayName : result.user.displayName ?? "",
        email : result.user.email ?? "",
        photoURL:result.user.photoURL ?? "",
      }
      userContext.updateUser(user)     
    });
  };
  return (
    <button
      onClick={() => signIn()}
      className="text-[1.6em]  text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md py-2 px-3"
    >
      Entrar
    </button>
  );
}
