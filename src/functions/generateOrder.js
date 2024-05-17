import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export const generateOrder = (order) => {
  setDoc(doc(collection(db, "orders")), order);
  return;
};
