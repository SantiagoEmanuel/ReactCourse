import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export async function getCategories() {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return categories;
  } catch (err) {
    console.error("Error getting categories:", err);
  }
}
