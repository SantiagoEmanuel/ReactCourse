import { OrderInfo } from "./OrderInfo";

export const OrderItem = ({ order, products }) => {
  return (
    <details className="flex flex-col gap-8 p-4">
      <summary className="cursor-pointer list-none rounded-md border px-1 py-2 text-center text-2xl hover:bg-[#ccc] hover:bg-opacity-15 max-sm:text-xl max-[370px]:text-base">
        Order: {order}
      </summary>
      <section className=" flex flex-col items-center justify-center gap-4 rounded-md">
        <span className=" text-3xl font-bold">↓</span>
        {products?.map(({ id, imageUrl, title, price, count }) => (
          <OrderInfo
            key={order + id}
            imageUrl={imageUrl}
            title={title}
            price={price}
            count={count}
          />
        ))}
      </section>
    </details>
  );
};
