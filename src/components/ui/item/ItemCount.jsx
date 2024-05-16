import { useCount } from "../../../hook/useCount";
import { useCartToggleContext } from "../../../hook/useCartToggleContext";

export function ItemCount({ stock, initial, productID = null }) {
  const { count, add, remove } = useCount(initial, stock);
  const { addCart } = useCartToggleContext();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button
          onClick={remove}
          disabled={count < 1}
          className="rounded-sm px-4 py-2 text-xl font-bold transition-colors hover:bg-[#333333] hover:text-white disabled:text-[#808080] disabled:hover:bg-[#212121] disabled:hover:text-[#ccc]"
        >
          -
        </button>
        {count}
        <button
          onClick={add}
          disabled={count == stock}
          className="rounded-sm px-4 py-2 text-xl font-bold transition-colors hover:bg-[#333333] hover:text-white disabled:text-[#808080] disabled:hover:bg-[#212121] disabled:hover:text-[#ccc]"
        >
          +
        </button>
      </div>
      <button
        disabled={count < 1}
        className="rounded-sm py-4 text-xl font-bold transition-colors hover:bg-[#333333] hover:text-white disabled:text-[#808080] disabled:hover:bg-[#212121] disabled:hover:text-[#ccc]"
        onClick={() => addCart([{ id: productID, COUNT: count }])}
      >
        Add to cart
      </button>
    </div>
  );
}
