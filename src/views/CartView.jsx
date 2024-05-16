import { useState, useEffect } from "react";
import { useCartContext } from "../hook/useCartContext";
import { useCartToggleContext } from "../hook/useCartToggleContext";
import { useProducts } from "../hook/useProducts";

export function CartView() {
  const { cart } = useCartContext();
  const { deleteItemCart } = useCartToggleContext();
  const [newCart, setNewCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { products } = useProducts();

  useEffect(() => {
    const x = [];
    let newTotal = 0;
    for (const key in cart) {
      products.map(({ id, title, imageUrl, price }) => {
        if (id == key) {
          x.push({
            id: key,
            title: title,
            imageUrl: imageUrl,
            count: cart[key],
          });
          newTotal += price * cart[key];
        }
      });
    }
    setTotal(newTotal);
    setNewCart(x);
  }, [cart, products]);

  return (
    <section className="flex w-full flex-col gap-4">
      {newCart?.map(({ id, imageUrl, title, count }) =>
        count > 0 ? (
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
        ) : (
          ""
        ),
      )}
      {newCart.length == 0 && !cart && (
        <h2 className="text-center text-xl font-bold">
          YOU DON'T HAVE NOTHING IN YOUR CART
        </h2>
      )}
      {total != 0 && (
        <p className="text-right text-xl font-bold">TOTAL: ${total}</p>
      )}
    </section>
  );
}
