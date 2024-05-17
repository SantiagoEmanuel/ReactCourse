import { doc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export async function updateCart(id, cart) {
  const newCart = [];
  if (cart) {
    const cartArray = Object.entries(cart);
    cartArray.map(([id, count]) => {
      newCart.push({ id: id, count: count });
    });
  }

  const orderDoc = doc(db, "cart", id);
  updateDoc(orderDoc, { cart: newCart });
}
