import { useState } from "react";

export const useCart = () => {
  const [quantity, setQuantity] = useState(
    localStorage.getItem("quantity") || 0
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || null
  );

  const addCart = (userCart) => {
    let newCart = cart || {};
    userCart?.map(({ id, COUNT }) => {
      newCart[id] = COUNT;
    });
    let values = Object.values(newCart);
    localStorage.setItem(
      "quantity",
      values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setQuantity(
      values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
    setCart(newCart);
    return;
  };

  const upgradeCart = (id, token, cart) => {
    fetch("https://e-commerce-db-65ce.onrender.com/cart", {
      method: "POST",
      headers: {
        Authorization: token,
        "Access-Control-Allow-Origin": origin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: id,
        cart: cart,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        return data.cart;
      });
  };

  const deleteCart = () => {
    setQuantity(0);
    setCart(null);
    return;
  };

  const deleteItemCart = (id) => {
    const arrayCart = Object.entries(cart);
    if (arrayCart.length == 1) {
      localStorage.clear();
      setQuantity(0);
      setCart(null);
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
    return;
  };

  return {
    cart,
    quantity,
    addCart,
    deleteCart,
    upgradeCart,
    deleteItemCart,
  };
};
