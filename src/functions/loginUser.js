import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../api/firebaseConnection";
import { doc, getDoc } from "firebase/firestore";
import { toastErrorNotification } from "./toastNotification";

export async function loginUser(email, password) {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  ).catch(() => {
    return toastErrorNotification(
      "Error al iniciar sesion, ¡cedenciales erroneas!",
    );
  });
  const queryUserInfo = await getDoc(
    doc(db, "userInfo", userCredentials.user.uid),
  );
  const userInfo = {
    ...queryUserInfo.data(),
  };
  const querySnapshot = await getDoc(doc(db, "cart", userCredentials.user.uid));
  const cart = [
    {
      ...querySnapshot.data(),
    },
  ];
  return { ...userCredentials.user, ...userInfo, cart: cart };
}
