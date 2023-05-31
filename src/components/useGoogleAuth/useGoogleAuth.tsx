import { useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
const useGoogleAuth = (): boolean => {
  const userContext = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user") as string) || undefined;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (userContext) {
      if (userContext.user || user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, [userContext, user]);
  return isLoggedIn;
};
export default useGoogleAuth;
