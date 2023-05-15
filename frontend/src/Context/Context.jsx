import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const Context = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs
    );
    console.log("response from context = ", res)
    setCurrentUser(res.data);
  };

  const logout = async () => {
    const res = await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <authContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const authContextState = () => {
    return useContext(authContext)
}
