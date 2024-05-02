import { useState } from "react";
import { userContext } from '../context/userContext'
import { userToggleContext } from '../context/userToggleContext'

export function UserProvider({ children }) {

     const [user, setUser] = useState(null);

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
                         if (userInfo != null && userInfo.status == "admin") {
                              fetch("https://e-commerce-db-65ce.onrender.com/cart", {
                                   method: "GET",
                                   headers: {
                                        Authorization: token,
                                        "user_ID": userInfo.id,
                                        "Access-Control-Allow-Origin": "https://e-commerce-delta-livid-65.vercel.app/"
                                   }
                              }).then(r => r.json()).then(({ carrito }) => {
                                   const cart = [];
                                   carrito.map(([{ id, title, description, price, stock, imageUrl }, { count }], index) => {

                                        cart.push({
                                             id: id,
                                             title: title,
                                             description: description,
                                             imageUrl: imageUrl,
                                             price: price,
                                             stock: stock,
                                             count: count
                                        })

                                        if (index == carrito.length - 1) {
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
                                        }
                                   })
                              })
                         }
                    })
          } else {
               setUser(null)
          }
     }

     return (
          <userContext.Provider value={user}>
               <userToggleContext.Provider value={loginUser}>
                    {children}
               </userToggleContext.Provider>
          </userContext.Provider>
     )
}