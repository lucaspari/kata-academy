"use client";

import { createContext, useContext, useState } from "react";
import React from "react";

interface UserProviderProps {
  children: React.ReactNode;
}
export interface User {
  displayName: string;
  email: string;
  photoURL: string;
}

type UserContextType = {
  user: User | undefined;
  saveUser: (user: User) => void;
  updateUser: (user: User) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
  const saveUser = (user: User) => {
    setUser(user);
  };

  const updateUser = (updatedUser: User) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedUser,
    }));
  };
  const logout = () => {
    setUser(undefined);
  };
  return (
    <UserContext.Provider value={{ user, saveUser, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
