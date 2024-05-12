import { UserContext } from '../context/UserContext'
import { UserToggleContext } from '../context/UserToggleContext'
import { useCartToggleContext } from '../hook/useCartToggleContext'
import { useUser } from "../hook/useUser";
import { useCart } from "../hook/useCart";
import { useCartContext } from "../hook/useCartContext";

export function UserProvider({ children }) {

     const { user, logUser, closeUser, createNewUser } = useUser()
     const { upgradeCart } = useCart();
     const { addCart, removeCart } = useCartToggleContext();
     const { cart } = useCartContext();

     const loginUser = (username, password) => {
          if (user == null) {
               logUser(username, password, addCart)
               return
          } else {
               closeUser(cart, saveCart, removeCart)
               return
          }
     }

     const createUser = (username, first_name, last_name, email, password) => {
          createNewUser(username, first_name, last_name, email, password)
     }

     const saveCart = (id, token, cart) => {
          upgradeCart(id, token, cart)
     }

     return (
          <UserContext.Provider value={user}>
               <UserToggleContext.Provider value={{ loginUser, saveCart, createUser }}>
                    {children}
               </UserToggleContext.Provider>
          </UserContext.Provider>
     )
}