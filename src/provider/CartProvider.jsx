import { useState } from 'react';
import { cartContext } from '../context/cartContext';
import { useUserContext } from '../context/userContext';
import { cartToggleContext } from '../context/cartToggleContext';

export function CartProvider({ children }) {

     const [cart, setCart] = useState(null)
     const user = useUserContext();

     const addCart = (product, count) => {

          fetch(`http://localhost:5000/cart`, {
               method: "GET",
               headers: {
                    "user_ID": user.id,
                    "Authorization": user.token
               }
          }).then(r => r.json()).then(data => {
               console.log(data)
          })

          setCart({
               product: product,
               user_id: user.id,
               count: count
          })
     }

     return (
          <cartContext.Provider value={cart}>
               <cartToggleContext.Provider value={addCart}>
                    {children}
               </cartToggleContext.Provider>
          </cartContext.Provider>
     )
}