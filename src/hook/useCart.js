import { useState } from "react";
import { updateCart as x } from "../functions/updateCart";
import { toastSuccessNotification } from "../functions/toastNotification";

export const useCart = () => {
  const getStorage = {
    cart: JSON.parse(localStorage.getItem("cart")),
    quantity: localStorage.getItem("quantity"),
  };
  const [quantity, setQuantity] = useState(getStorage.quantity || 0);
  const [cart, setCart] = useState(getStorage.cart || null);

  const addCart = (userCart) => {
    if (userCart.length > 0) {
      let newCart = cart || {};
      userCart.map(({ id, count }) => {
        newCart[id] = count;
      });
      let values = Object.values(newCart);
      values = values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );
      localStorage.setItem("quantity", values);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setQuantity(values);
      setCart(newCart);
      toastSuccessNotification("¡Producto agregado!");
    }
    return;
  };

  const deleteCart = () => {
    localStorage.clear();
    setQuantity(0);
    setCart(null);
    return;
  };

  const updateCart = (id) => {
    x(id, cart);
    if (cart != null) {
      toastSuccessNotification("Carrito guardado en la base de datos");
      deleteCart();
    }
  };

  const deleteItemCart = (id) => {
    const arrayCart = Object.entries(cart);
    if (arrayCart.length == 1) {
      toastSuccessNotification("¡Carrito eliminado!");
      deleteCart();
      return;
    }
    const newCart = {};
    arrayCart.map(([key, value]) => {
      if (id != key) {
        newCart[key] = value;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    localStorage.setItem("quantity", quantity - cart[id]);
    setQuantity(quantity - cart[id]);
    setCart(newCart);
    toastSuccessNotification("Producto eliminado del carrito");
    return;
  };

  return {
    cart,
    quantity,
    updateCart,
    addCart,
    deleteCart,
    deleteItemCart,
  };
};
