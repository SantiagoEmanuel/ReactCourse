import { CartContext } from '../context/CartContext';
import { CartToggleContext } from '../context/CartToggleContext';
import { useCart } from '../hook/useCart';

export function CartProvider({ children }) {
     const { cart, quantity, createCart, deleteCart, deleteItemCart } = useCart();
     const addCart = (userCart) => {
          createCart(userCart)
     }
     const removeCart = () => {
          deleteCart()
     }

     const removeItem = (id) => {
          deleteItemCart(id)
     }

     return (
          <CartContext.Provider value={{ quantity, cart }}>
               <CartToggleContext.Provider value={{ addCart, removeCart, removeItem }}>
                    {children}
               </CartToggleContext.Provider>
          </CartContext.Provider>
     )
}