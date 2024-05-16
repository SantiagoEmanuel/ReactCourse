import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export async function getCategories() {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (err) {
    console.error("Error getting categories:", err);
  }
}
