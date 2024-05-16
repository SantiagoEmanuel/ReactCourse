import { signOut } from "firebase/auth";
import { auth } from "../api/firebaseConnection";

export const logoutUser = () => {
  signOut(auth)
    .then(() => {
      return null;
    })
    .catch((error) => {
      console.log(error);
    });
};
