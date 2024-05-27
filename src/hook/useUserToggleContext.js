import { useContext } from "react";
import { UserToggleContext } from "../context/UserToggleContext";

export const useUserToggleContext = () => {
  return useContext(UserToggleContext);
};
