import { useState, useEffect } from "react";
import { useCartContext } from "../hook/useCartContext";
import { useProducts } from "../hook/useProducts";
import { ItemCart } from "../components/ui/item/ItemCart";
import { generateCartArray } from "../functions/generateCartArray";
import { BuyCart } from "../components/ui/BuyCart";

export function CartView() {
  const { cart } = useCartContext();
  const [newCart, setNewCart] = useState([]);
  const [total, setTotal] = useState(0);

  const { products } = useProducts();

  useEffect(() => {
    const { newCart, newTotal } = generateCartArray(products, cart);
    setTotal(newTotal);
    setNewCart(newCart);
  }, [cart, products]);

  if (newCart.length == 0 && !cart) {
    return (
      <h2 className="text-center text-xl font-bold">
        YOU DON'T HAVE NOTHING IN YOUR CART
      </h2>
    );
  }

  return (
    <section className="flex w-full flex-col gap-4">
      {newCart?.map(({ id, imageUrl, title, count }) => (
        <ItemCart
          key={id}
          id={id}
          imageUrl={imageUrl}
          title={title}
          count={count}
        />
      ))}
      {total != 0 && (
        <>
          <p className="text-right text-xl font-bold">TOTAL: ${total}</p>
          <BuyCart cart={newCart} total={total} />
        </>
      )}
    </section>
  );
}
