import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebaseConnection";

export const loginUser = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredentials.user;
};
