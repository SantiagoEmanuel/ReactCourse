import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../api/firebaseConnection";
import { doc, getDoc } from "firebase/firestore";

export const loginUser = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
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
};
