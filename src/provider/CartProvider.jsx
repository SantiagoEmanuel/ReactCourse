import { CartContext } from '../context/CartContext';
import { CartToggleContext } from '../context/CartToggleContext';
import { useCart } from '../hook/useCart';

export function CartProvider({ children }) {
     const { cart, quantity, addCart, deleteCart, deleteItemCart } = useCart();

     return (
          <CartContext.Provider value={{ quantity, cart }}>
               <CartToggleContext.Provider value={{ addCart, deleteCart, deleteItemCart }}>
                    {children}
               </CartToggleContext.Provider>
          </CartContext.Provider>
     )
}