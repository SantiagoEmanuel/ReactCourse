import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirects } from "../constants/redirects";
import { logoutUser } from "../functions/logoutUser";
import { loginUser } from "../functions/loginUser";
import { createUser } from "../functions/createUser";
import { useCartToggleContext } from "../hook/useCartToggleContext";
import { createCart } from "../functions/createCart";
import { generateOrder } from "../functions/generateOrder";
import { toastNotification } from "../functions/toastNotification";

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

  const createNewUser = async (email, password) => {
    const us = await createUser(email, password);
    createCart(us.uid);
    setUser(us);
    navigate(redirects.toHome);
  };

  const comprarCarrito = (cart, total) => {
    if (user == null) {
      toastNotification(
        "Error, necesitas iniciar sesion para realizar una compra.",
      );
      return;
    }

    const order = {
      buyer: user?.email,
      cart: cart,
      total: total,
    };
    toastNotification("¡Carrito Comprado!");
    generateOrder(order);
    deleteCart();
  };

  return {
    user,
    login,
    logout,
    createNewUser,
    comprarCarrito,
  };
};
