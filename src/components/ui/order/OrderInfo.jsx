export const OrderInfo = ({ imageUrl, title, price, count }) => {
  return (
    <article className="flex w-full items-center justify-between overflow-hidden">
      <header>
        <img
          src={imageUrl}
          alt={title}
          width={100}
          className="aspect-square h-auto"
        />
      </header>
      <section className="flex w-full flex-col gap-2 pl-4 pr-2">
        <h5 className="text-balance">{title}</h5>
        <p className="text-sm">
          ${price} * {count} = ${price * count}
        </p>
      </section>
    </article>
  );
};
