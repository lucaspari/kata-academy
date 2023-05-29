"use client";
import { auth } from "@/firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { User, UserContext } from "@/context/userContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/toastMessage/toast";
import useGoogleAuth from "./useGoogleAuth/useGoogleAuth";
export default function Login() {
  const [showToast, setShowToast] = useState(false);
  const isLoggedIn = useGoogleAuth();
  const userContext = useContext(UserContext);
  const router = useRouter();
  if (!userContext) {
    throw new Error("User context is null or undefined");
  }
  console.log(isLoggedIn);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user: User = {
          displayName: result.user.displayName ?? "",
          email: result.user.email ?? "",
          photoURL: result.user.photoURL ?? "",
        };
        userContext.updateUser(user);
        router.push("/dashboard");
      })
      .catch((error) => {
        {
          console.log(error);
          setShowToast(true);
        }
      });
  };
  return (
    <div>
      {!isLoggedIn && (
        <button
          onClick={() => signIn()}
          className="text-[1.6em]  text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md py-2 px-3"
        >
          Entrar
        </button>
      )}
      <Toast
        show={showToast}
        setShow={setShowToast}
        message="Please Log-in"
        status="warning"
      ></Toast>
    </div>
  );
}
