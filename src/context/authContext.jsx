import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [token, setToken] = useState(

    localStorage.getItem("token") || null
  );

  const signIn = async ({ name, email, password }) => {

      const res = await axios.post("http://localhost:3600/api/auth/login", { email, password });
      setCurrentUser(res.data.user);
      setToken(res.data.accessToken);
      localStorage.setItem("token", res.data.accessToken);
      navigate("/")
  };

  const signUp = async ({ name, email, password }) => {
    const res = await axios.post("http://localhost:3600/api/auth/register", { name, password, email });
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    setCurrentUser(res.data.user);
    setToken(res.data.accessToken);
    signIn({name,email,password})

  };
  const logout = () => {

    setCurrentUser(null);
    setToken(null);
    navigate('/')

  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (

    <AuthContext.Provider value={{ currentUser, token, signIn,signUp, logout }}>
      {children}
    </AuthContext.Provider>

  )
};
