import { Link } from "react-router-dom";

export function Item({ id, img, title, price }) {
  return (
    <article className="card flex flex-col justify-between gap-4 rounded-xl bg-white text-black transition-transform hover:scale-[1.03] max-sm:transition-none max-sm:hover:scale-100">
      <header className="">
        <img src={img} alt={title} className="aspect-square rounded-lg" />
      </header>
      <footer className="flex flex-col gap-4">
        <section className="px-4">
          <h3 className="max-sm:text-sm max-[400px]:text-xs">{title}</h3>
          <span className="opacity-70 max-sm:text-sm max-[400px]:text-xs">
            ${price}
          </span>
        </section>
        <Link
          to={`/item/${id}`}
          className="rounded-b-lg py-4 text-center text-xl font-bold transition-colors hover:bg-[#212121] hover:text-white max-sm:text-sm "
        >
          {" "}
          View More{" "}
        </Link>
      </footer>
    </article>
  );
}
