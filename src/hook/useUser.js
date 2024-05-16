import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirects } from "../constants/redirects";
import { logoutUser } from "../functions/logoutUser";
import { loginUser } from "../functions/loginUser";
import { createUser } from "../functions/createUser";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setUser(await loginUser(email, password));
    navigate(redirects.toHome);
  };

  const logout = () => {
    setUser(logoutUser());
    navigate(redirects.toHome);
  };

  const createNewUser = async (email, password) => {
    setUser(await createUser(email, password));
    navigate(redirects.toHome);
  };

  return {
    user,
    login,
    logout,
    createNewUser,
  };
};
