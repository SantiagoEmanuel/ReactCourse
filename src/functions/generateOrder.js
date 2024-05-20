import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import { db } from "../api/firebaseConnection";

export const generateOrder = async (order, user) => {
  const data = await addDoc(collection(db, "orders"), order);
  const newOrder = {};
  newOrder[data.id] = [...order.products];
  const newUserInfo = {
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    avatar: user.avatar,
    orders:
      user.orders != null
        ? [newOrder, ...(Array.isArray(user.orders) && user.orders.flat())]
        : [newOrder],
  };
  setDoc(doc(db, "userInfo", user.uid), newUserInfo);
  return data.id;
};
