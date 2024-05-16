import { useContext } from "react";
import { UserToggleContext } from "../context/UserToggleContext";
export function useUserToggleContext() {
  return useContext(UserToggleContext);
}
