import { useUserToggleContext } from "../../hook/useUserToggleContext";

export function BuyCart({ cart, total }) {
  const { comprarCarrito } = useUserToggleContext();

  return (
    <button
      className=" rounded-sm border-white bg-green-600 py-2 text-base font-bold"
      title="Generate Order"
      onClick={() => {
        comprarCarrito(cart, total);
      }}
    >
      Generate Order
    </button>
  );
}
