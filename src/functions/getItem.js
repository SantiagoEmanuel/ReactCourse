import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export async function getItem(id) {
  try {
    const querySnapshot = await getDoc(doc(db, "products", id));
    if (querySnapshot.data()) {
      const product = [
        {
          id: querySnapshot.id,
          ...querySnapshot.data(),
        },
      ];
      return product;
    }
    return [];
  } catch (err) {
    console.error("Error getting item:", err);
  }
}
