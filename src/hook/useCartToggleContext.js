import { useContext } from "react"
import { cartToggleContext } from "../context/cartToggleContext"

export const useCartToggleContext = () => {
     return useContext(cartToggleContext)
}