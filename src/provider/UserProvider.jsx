import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { UserToggleContext } from '../context/UserToggleContext'
import { useCartToggleContext } from '../hook/useCartToggleContext'
import { useCartContext } from "../hook/useCartContext";

export function UserProvider({ children }) {

     const [user, setUser] = useState(null);
     const { addCart, removeCart } = useCartToggleContext();
     const { cart } = useCartContext()
     const navigate = useNavigate();

     const loginUser = (username, password) => {
          if (user == null) {
               fetch(`https://e-commerce-db-65ce.onrender.com/user`, {
                    method: "GET",
                    headers: {
                         username: username.toLowerCase(),
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
               upgradeCart()
               removeCart()
               return setUser(null)
          }
     }

     const upgradeCart = () => {
          fetch("https://e-commerce-db-65ce.onrender.com/cart", {
               method: "POST",
               headers: {
                    Authorization: user.token,
                    "Access-Control-Allow-Origin": "http://localhost:5173",
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    id_user: user.id,
                    cart: cart
               })
          })
               .then(r => r.json())
               .then(data => {
                    console.log(data.cart)
               })
     }

     return (
          <UserContext.Provider value={user}>
               <UserToggleContext.Provider value={{ loginUser, upgradeCart }}>
                    {children}
               </UserToggleContext.Provider>
          </UserContext.Provider>
     )
}