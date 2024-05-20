import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirects } from "../constants/redirects";
import { logoutUser } from "../functions/logoutUser";
import { loginUser } from "../functions/loginUser";
import { createUser } from "../functions/createUser";
import { useCartToggleContext } from "../hook/useCartToggleContext";
import { createCart } from "../functions/createCart";
import { generateOrder } from "../functions/generateOrder";
import {
  toastErrorNotification,
  toastSuccessNotification,
} from "../functions/toastNotification";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { addCart, updateCart, deleteCart } = useCartToggleContext();

  const login = async (email, password) => {
    const us = await loginUser(email, password);
    setUser(us);
    if (us.cart[0].cart.length > 0) {
      addCart(us.cart[0].cart);
    }
    navigate(redirects.toHome);
  };

  const logout = () => {
    updateCart(user.uid);
    setUser(logoutUser());
    navigate(redirects.toHome);
  };

  const createNewUser = async (email, password, info) => {
    const us = await createUser(email, password, info);
    createCart(us.uid);
    setUser(us);
    navigate(redirects.toHome);
  };

  const comprarCarrito = async (cart, total) => {
    if (user == null) {
      toastErrorNotification(
        "Error, necesitas iniciar sesion para realizar una compra.",
      );
      return;
    }

    const order = {
      products: cart,
      total: total,
    };
    toastSuccessNotification("¡Carrito Comprado!");
    const id = await generateOrder(order, user);
    deleteCart();
    const newOrder = {};

    newOrder[id] = [...order.products];
    const newUserInfo = {
      ...user,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: user.avatar,
      orders:
        user.orders != null ? [newOrder, ...user.orders.flat()] : [newOrder],
    };
    setUser(newUserInfo);
  };

  return {
    user,
    login,
    logout,
    createNewUser,
    comprarCarrito,
  };
};
