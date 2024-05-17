import { doc, setDoc } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export function createCart(id) {
  const newCart = {
    cart: [],
  };
  setDoc(doc(db, "cart", id), newCart);
}
