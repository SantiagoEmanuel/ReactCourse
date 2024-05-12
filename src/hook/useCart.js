import { useState } from "react"

export const useCart = () => {
     const [quantity, setQuantity] = useState(0)
     const [cart, setCart] = useState(null)

     const createCart = (userCart) => {
          let newCart = cart || {}
          userCart?.map(({ id, COUNT }) => {
               newCart[id] = COUNT
          })
          let values = Object.values(newCart)
          setCart(newCart);
          setQuantity(values.reduce(
               (accumulator, currentValue) => accumulator + currentValue,
               0,
          ))
          return
     }

     const upgradeCart = (id, token, cart) => {
          fetch("https://e-commerce-db-65ce.onrender.com/cart", {
               method: "POST",
               headers: {
                    Authorization: token,
                    "Access-Control-Allow-Origin": origin,
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    id_user: id,
                    cart: cart
               })
          })
               .then(r => r.json())
               .then(data => {
                    return data.cart
               })
     }

     const deleteCart = () => {
          setQuantity(0)
          setCart(null)
          return
     }

     const deleteItemCart = (id) => {
          const arrayCart = Object.entries(cart)
          if (arrayCart.length == 1) {
               setCart(null)
               setQuantity(0)
               return
          }
          const newCart = {}
          arrayCart.map(([key, value]) => {
               if (id != key) {
                    newCart[key] = value
               }
          })
          setQuantity(quantity - cart[id])
          setCart(newCart)
          return
     }

     return {
          cart,
          quantity,
          createCart,
          deleteCart,
          upgradeCart,
          deleteItemCart
     }
}