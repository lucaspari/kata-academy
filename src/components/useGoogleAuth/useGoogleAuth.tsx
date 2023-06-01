import { useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
const useGoogleAuth = (): boolean => {
  const userContext = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem("user") as string) || undefined;
    if (userContext) {
      if (userContext.user || user) {
        if (user && userContext.user == undefined) userContext.updateUser(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, [userContext]);
  return isLoggedIn as boolean;
};
export default useGoogleAuth;
