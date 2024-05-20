import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../api/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (email, password, info) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  setDoc(doc(db, "userInfo", result.user.uid), info);

  return result.user;
};
