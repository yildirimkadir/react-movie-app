import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { userObserver } from "../authent/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
