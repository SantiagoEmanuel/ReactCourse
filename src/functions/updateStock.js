import { doc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export function updateStock({ product, newStock }) {
  const newProduct = {
    ...product,
    stock: newStock,
  };
  updateDoc(doc(db, "products", product.id), newProduct);
}
