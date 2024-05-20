import { Link } from "react-router-dom";
import { useUserContext } from "../hook/useUserContext";
import { useState } from "react";
import { useEffect } from "react";

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
            products: user.orders[key][anotherKey],
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
    <section className="flex w-full flex-col gap-20 rounded-xl border p-8">
      <header className="m-auto max-w-[600px] ">
        <div className="content-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name} avatar`}
              title={`${user.first_name} ${user.last_name} avatar`}
              className="m-auto h-auto w-[100px] rounded-full"
            />
          ) : (
            <img
              src="/user-no-avatar.png"
              alt="User avatar is not available"
              className="m-auto w-[100px] rounded-full"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h2 className=" text-center font-normal">
            {user.first_name} {user.last_name}
          </h2>
          <div className="flex flex-col items-center justify-center">
            <p className="opacity-40">@{user.username}</p>
            <p className="opacity-40">{user.email}</p>
          </div>
        </div>
      </header>
      <section>
        {orders.length == 0 ? (
          <h3 className="text-center text-xl">You don't have any order</h3>
        ) : (
          <>
            <h3 className="text-center text-5xl">orders</h3>
            <section className="m-auto flex max-w-[500px] flex-col gap-8">
              {orders.map(({ order, products }) => (
                <article
                  key={order}
                  className="flex flex-col gap-8 rounded-lg border p-4"
                >
                  <header>
                    <h4 className="text-center text-2xl">Order: {order}</h4>
                  </header>
                  <section className=" flex items-center justify-center gap-8">
                    {products.map(({ id, imageUrl, title, price, count }) => (
                      <article
                        key={id}
                        className="flex w-[200px] flex-col items-center"
                      >
                        <header>
                          <img
                            src={imageUrl}
                            alt={title}
                            width={100}
                            className="aspect-square rounded-full"
                          />
                        </header>
                        <section>
                          <h5>{title}</h5>
                          <p>
                            {price} * {count} = {price * count}
                          </p>
                        </section>
                      </article>
                    ))}
                  </section>
                </article>
              ))}
            </section>
          </>
        )}
      </section>
    </section>
  );
}
