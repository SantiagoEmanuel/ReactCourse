import { Link } from "react-router-dom";
import { useUserContext } from "../hook/useUserContext";
import { useState } from "react";
import { useEffect } from "react";
import { UserInfo } from "../components/UserInfo";
import { Orders } from "../components/Orders";
import { Container } from "../components/containers/Container";

export function UserView() {
  const user = useUserContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user != null) {
      const newData = [];
      user.orders?.map((order) => {
        const keys = Object.keys(order);
        const details = [];
        keys.map((key) => {
          if (key !== "total") {
            details.push({
              order: key,
              products: order[key],
              total: order["total"],
            });
            newData.push(...details);
            return;
          }
        });
      });
      setOrders(newData);
    }
  }, [user]);

  if (!user) {
    return (
      <Container className="flex flex-col gap-4">
        <h2>You are not log in.</h2>
        <Link
          to={"/login"}
          className="rounded-xl border-2 border-orange-600 px-4 py-1 text-center font-semibold text-orange-600 hover:bg-orange-600 hover:bg-opacity-15"
        >
          Log in
        </Link>
      </Container>
    );
  }

  return (
    <Container className="flex w-full flex-col gap-20">
      <UserInfo user={user} />
      <Container className="w-full">
        <Orders orders={orders} />
      </Container>
    </Container>
  );
}
