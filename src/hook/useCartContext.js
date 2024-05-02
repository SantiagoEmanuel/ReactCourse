import { useContext } from "react"
import { cartContext } from "../context/cartContext"

export const useCartContext = () => {
     return useContext(cartContext)
}