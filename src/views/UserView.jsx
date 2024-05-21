import { Link } from "react-router-dom";
import { useUserContext } from "../hook/useUserContext";
import { useState } from "react";
import { useEffect } from "react";
import { UserInfo } from "../components/UserInfo";
import { Orders } from "../components/Orders";

export function UserView() {
  const user = useUserContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user != null) {
      const data = [];
      for (const key in user.orders) {
        for (const anotherKey in user.orders[key]) {
          data.push({
            order: anotherKey,
            products: Array.isArray(user.orders[key][anotherKey])
              ? [...user.orders[key][anotherKey].flat()]
              : [user.orders[key][anotherKey]],
          });
        }
      }
      setOrders(data);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col gap-4">
        <h2>You are not log in.</h2>
        <Link
          to={"/login"}
          className="rounded-xl border-2 border-orange-600 px-4 py-1 text-center font-semibold text-orange-600 hover:bg-orange-600 hover:bg-opacity-15"
        >
          Log in
        </Link>
      </div>
    );
  }

  return (
    <section className="flex w-full flex-col gap-20">
      <UserInfo user={user} />
      <section className="w-full">
        <Orders orders={orders} />
      </section>
    </section>
  );
}
