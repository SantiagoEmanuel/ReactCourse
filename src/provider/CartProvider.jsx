import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { CartToggleContext } from '../context/CartToggleContext';

export function CartProvider({ children }) {
     const [cart, setCart] = useState(null);
     const [productsIds, setProductsIds] = useState([]);

     const addCart = (userCart) => {
          if (cart == null) {
               const ids = []
               let x = 0
               userCart?.map(({ id, COUNT }, index) => {
                    ids.push(id)
                    x += COUNT
                    if (index == userCart.length - 1) {
                         setProductsIds(ids);
                         setCart(x)
                         return
                    }
               })
          } else {
               const ids = productsIds.filter(id => id != userCart[0].id)
               let x = cart
               userCart?.map(({ id, COUNT }, index) => {
                    if (!ids.some(i => i === id)) {
                         ids.push(id)
                    }
                    x += COUNT
                    if (index == userCart.length - 1) {
                         setProductsIds(ids);
                         setCart(x)
                         return
                    }
               })
               return
          }
     }

     const removeCart = () => {
          setCart(null)
          setProductsIds([])
     }

     return (
          <CartContext.Provider value={[{ cart, productsIds }]}>
               <CartToggleContext.Provider value={[{ addCart, removeCart }]}>
                    {children}
               </CartToggleContext.Provider>
          </CartContext.Provider>
     )
}