import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../api/firebaseConnection";
import { doc, setDoc } from "firebase/firestore";

export async function createUser(email, password, info) {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  if (info["avatar"].length == 0) {
    info["avatar"] = null;
  }

  setDoc(doc(db, "userInfo", result.user.uid), info);
  const user = [];
  user.push({ ...result.user, ...info });
  return user[0];
}
