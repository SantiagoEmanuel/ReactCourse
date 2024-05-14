import { useState } from "react";
import { logoutUser } from "../functions/logoutUser";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
     const [user, setUser] = useState(null);
     const navigate = useNavigate();

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
                              if (cart.length != 0) {
                                   addCart(cart)
                              }
                         })
                    }
               })
               .finally(() => {
                    navigate('/')
               })
     }

     const closeUser = (cart, saveCart, deleteCart) => {
          saveCart(user.id, user.token, cart)
          deleteCart();
          setUser(logoutUser())
     }

     const createNewUser = async (username, first_name, last_name, email, password) => {
          fetch("https://e-commerce-db-65ce.onrender.com/user", {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    username: username,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password
               })
          }).then(r => r.json()).then(({ ok }) => {
               if (ok) {
                    logUser(username, password)
               }
          })
     }

     return {
          user,
          logUser,
          closeUser,
          createNewUser
     }
}