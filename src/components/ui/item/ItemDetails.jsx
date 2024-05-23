import { useCartContext } from "../../../hook/useCartContext";
import { ItemCount } from "./ItemCount";

export function ItemDetails({ id, imgUrl, title, price, description, stock }) {
  const { cart } = useCartContext();

  return (
    <article
      className="flex flex-col items-center justify-center gap-[7rem] pb-10 pt-24"
      key={id}
    >
      <header className="relative flex items-center justify-center">
        <img
          src={imgUrl}
          alt={title}
          className="absolute -z-10 scale-125 rounded-sm blur-sm transition-transform max-sm:scale-110 max-[500px]:scale-100"
        />
        <img
          src={imgUrl}
          alt={title}
          className="aspect-auto w-[80%] max-w-[400px] rounded-full mix-blend-multiply"
        />
      </header>
      <footer className="flex flex-col items-center gap-8">
        <section className="flex w-full max-w-[400px] flex-col gap-4 px-2">
          <h3 className="text-2xl">{title}</h3>
          <span className="opacity-40">${price}</span>
          <ItemCount
            stock={stock}
            productID={id}
            initial={cart ? cart[id] : 0}
          />
          {stock > 0 && (
            <span className="text-center font-semibold text-orange-600">
              ¡Quedan{" "}
              {cart ? (isNaN(cart[id]) ? stock : stock - cart[id]) : stock}{" "}
              disponibles!
            </span>
          )}
          {stock == 0 && (
            <span className="text-center font-semibold text-orange-600">
              No hay stock disponible
            </span>
          )}
        </section>
        <section>
          <p className="text-balance text-center text-xl">{description}</p>
        </section>
      </footer>
    </article>
  );
}
