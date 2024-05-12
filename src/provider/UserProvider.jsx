import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { UserToggleContext } from '../context/UserToggleContext'
import { useCartToggleContext } from '../hook/useCartToggleContext'
import { useUser } from "../hook/useUser";
import { useCart } from "../hook/useCart";

export function UserProvider({ children }) {

     const { user, logUser, closeUser, createNewUser } = useUser()
     const { upgradeCart } = useCart();
     const { addCart, removeCart } = useCartToggleContext();
     const navigate = useNavigate();

     const loginUser = (username, password) => {
          if (user == null) {
               logUser(username, password, addCart)
               navigate('/')
               return
          } else {
               closeUser(upgCart, removeCart)
               return
          }
     }

     const createUser = (username, first_name, last_name, email, password) => {
          createNewUser(username, first_name, last_name, email, password)
     }

     const upgCart = (id, token) => {
          upgradeCart(id, token)
     }

     return (
          <UserContext.Provider value={user}>
               <UserToggleContext.Provider value={{ loginUser, upgCart, createUser }}>
                    {children}
               </UserToggleContext.Provider>
          </UserContext.Provider>
     )
}