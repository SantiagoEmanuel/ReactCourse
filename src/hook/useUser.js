import { useState } from "react";
import { logoutUser } from "../functions/logoutUser";
import { createUser } from "../functions/createUser";

export const useUser = () => {
     const [user, setUser] = useState(null);

     const logUser = async (username, password, addCart) => {
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
                         })
                    }
               })
     }

     const closeUser = (cart, saveCart, removeCart) => {
          saveCart(user.id, user.token, cart)
          removeCart();
          setUser(logoutUser())
     }

     const createNewUser = async (username, first_name, last_name, email, password) => {
          const result = await createUser(username, first_name, last_name, email, password);
          if (result) {
               logUser(username, password)
          }
     }

     return {
          user,
          logUser,
          closeUser,
          createNewUser
     }
}