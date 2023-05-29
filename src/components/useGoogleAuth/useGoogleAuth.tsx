import { useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
const useGoogleAuth = (): boolean => {
  const userContext = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (userContext) {
      if (userContext.user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, [userContext]);
  return isLoggedIn;
};
export default useGoogleAuth;
