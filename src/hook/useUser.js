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
import { useProducts } from "./useProducts";
import { updateStock } from "../functions/updateStock";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { addCart, updateCart, deleteCart } = useCartToggleContext();
  const { products } = useProducts();

  const login = async (email, password) => {
    const us = await loginUser(email, password);
    setUser(us);
    if (us.cart[0].cart.length > 0) {
      addCart(us.cart[0].cart);
    }
    toastSuccessNotification("¡Has iniciado sesión!");
    navigate(redirects.toHome);
  };

  const logout = () => {
    updateCart(user.uid);
    setUser(logoutUser());
    navigate(redirects.toHome);
  };

  const createNewUser = async (email, password, info) => {
    const us = await createUser(email, password, info);
    toastSuccessNotification("¡Usuario creado!");
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

    cart.map(({ id, count }) => {
      products.map((product) => {
        if (id == product.id) {
          updateStock({ product: product, newStock: product.stock - count });
        }
      });
    });

    toastSuccessNotification("¡Orden generada!");
    const id = await generateOrder(order, user);
    deleteCart();
    const newOrder = {};

    newOrder[id] = [...order.products];
    newOrder["total"] = order.total;
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
    navigate("/user");
    return;
  };

  return {
    user,
    login,
    logout,
    createNewUser,
    comprarCarrito,
  };
};
