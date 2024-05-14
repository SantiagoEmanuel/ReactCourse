import { UserContext } from '../context/UserContext'
import { UserToggleContext } from '../context/UserToggleContext'
import { useCartToggleContext } from '../hook/useCartToggleContext'
import { useUser } from "../hook/useUser";
import { useCart } from "../hook/useCart";
import { useCartContext } from "../hook/useCartContext";

export function UserProvider({ children }) {

     const { user, logUser, closeUser, createNewUser } = useUser()
     const { upgradeCart } = useCart();
     const { addCart, deleteCart } = useCartToggleContext();
     const { cart } = useCartContext();

     const loginUser = (username, password) => {
          if (user == null) {
               logUser(username, password, addCart)
               return
          } else {
               closeUser(cart, upgradeCart, deleteCart)
               return
          }
     }

     return (
          <UserContext.Provider value={user}>
               <UserToggleContext.Provider value={{ loginUser, upgradeCart, createNewUser }}>
                    {children}
               </UserToggleContext.Provider>
          </UserContext.Provider>
     )
}