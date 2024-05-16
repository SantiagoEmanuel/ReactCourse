import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export async function getItems() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error getting items:", error);
    return [];
  }
}
