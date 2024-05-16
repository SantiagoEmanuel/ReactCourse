import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebaseConnection";

export const createUser = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};
