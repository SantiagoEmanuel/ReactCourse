import { Link } from "react-router-dom";
import { useCartContext } from "../../hook/useCartContext";
import { closeAside } from "../../functions/closeAside";
import { CartIcon } from "./icons/CartIcon";

export function CartWidget() {
  const { quantity } = useCartContext();
  return (
    <Link to={"/cart"} className="relative cursor-pointer" onClick={closeAside}>
      <CartIcon width={24} height={24} />
      {quantity != 0 ? (
        <span className="absolute -bottom-1 -right-2 h-4 w-4 content-center rounded-full bg-red-600 text-center text-[10px]">
          {quantity}
        </span>
      ) : (
        ""
      )}
    </Link>
  );
}
