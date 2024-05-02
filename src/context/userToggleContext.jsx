import { useContext, createContext } from "react";
export const userToggleContext = createContext();
export function useUserToggleContext() {
     return useContext(userToggleContext);
}