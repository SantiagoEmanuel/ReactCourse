import { useCartToggleContext } from "../../../hook/useCartToggleContext";

export function ItemCart({ id, imageUrl, title, count }) {
  const { deleteItemCart } = useCartToggleContext();

  return (
    <article
      className="flex items-center justify-between overflow-hidden rounded-md border"
      key={id}
    >
      <img
        src={imageUrl}
        className="aspect-square h-[200px] rounded-l-sm transition-transform max-md:h-[150px] max-sm:h-[80px]"
      />
      <div className="flex flex-1 items-center justify-between p-4">
        <h4 className="max-md: text-balance text-xl transition-transform max-sm:text-xs">
          {title}
        </h4>
        <div className="flex items-center gap-4">
          <p className="max-md: text-xl font-normal transition-transform max-sm:text-xs">
            {count}
          </p>
          <button
            className="fond-bold rounded-sm border border-red-600 px-4 py-1 text-red-600 transition-colors hover:bg-red-600 hover:text-white max-sm:px-2 max-sm:py-1 max-sm:text-xs"
            onClick={() => deleteItemCart(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
