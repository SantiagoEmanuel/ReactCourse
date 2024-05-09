import { useContext } from "react"
import { CartToggleContext } from "../context/CartToggleContext"

export const useCartToggleContext = () => {
     return useContext(CartToggleContext)
}