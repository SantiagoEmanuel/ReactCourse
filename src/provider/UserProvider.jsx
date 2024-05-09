import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { UserToggleContext } from '../context/UserToggleContext'
import { useCartToggleContext } from '../hook/useCartToggleContext'

export function UserProvider({ children }) {

     const [user, setUser] = useState(null);
     const navigate = useNavigate();
     const [{ addCart, removeCart }] = useCartToggleContext();

     const loginUser = (username, password) => {
          if (user == null) {
               fetch(`https://e-commerce-db-65ce.onrender.com/user`, {
                    method: "GET",
                    headers: {
                         username: username,
                         password: password,
                         "Access-Control-Allow-Origin": "https://e-commerce-delta-livid-65.vercel.app/"
                    },
               })
                    .then(r => r.json())
                    .then(({ userInfo, token }) => {
                         if (userInfo != null) {
                              fetch("https://e-commerce-db-65ce.onrender.com/cart", {
                                   method: "GET",
                                   headers: {
                                        Authorization: token,
                                        "user_ID": userInfo.id,
                                        "Access-Control-Allow-Origin": "https://e-commerce-delta-livid-65.vercel.app/"
                                   }
                              }).then(r => r.json()).then(({ cart }) => {
                                   setUser({
                                        id: userInfo.id,
                                        username: userInfo.username,
                                        email: userInfo.email,
                                        first_name: userInfo.first_name,
                                        last_name: userInfo.last_name,
                                        status: userInfo.status,
                                        token: token,
                                        cart: cart
                                   })
                                   addCart(cart)
                                   return navigate('/')
                              })
                         }
                    })
          } else {
               setUser(null)
               removeCart()
               return
          }
     }

     return (
          <UserContext.Provider value={user}>
               <UserToggleContext.Provider value={loginUser}>
                    {children}
               </UserToggleContext.Provider>
          </UserContext.Provider>
     )
}