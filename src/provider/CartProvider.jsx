import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { CartToggleContext } from '../context/CartToggleContext';

export function CartProvider({ children }) {
     const [quantity, setQuantity] = useState(0);
     const [cart, setCart] = useState(null);

     const addCart = (userCart) => {
          let newCart = cart || {}
          userCart.map(({ id, COUNT }) => {
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

     const removeCart = () => {
          setQuantity(0)
          setCart(null)
          return
     }

     return (
          <CartContext.Provider value={{ quantity, cart }}>
               <CartToggleContext.Provider value={{ addCart, removeCart }}>
                    {children}
               </CartToggleContext.Provider>
          </CartContext.Provider>
     )
}