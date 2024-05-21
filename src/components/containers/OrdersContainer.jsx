import { OrderItem } from "../ui/order/OrderIem";

export const OrdersContainer = ({ orders }) => {
  return (
    <>
      <h3 className="text-center text-2xl">You orders</h3>
      <section className="m-auto flex w-full max-w-[500px] flex-col gap-8 max-[370px]:m-0">
        {orders.map(({ order, products }) => (
          <OrderItem order={order} products={products} key={order} />
        ))}
      </section>
    </>
  );
};
