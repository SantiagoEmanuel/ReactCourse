import { useState, useEffect } from "react";
import { useCartContext } from "../hook/useCartContext";
import { useCartToggleContext } from "../hook/useCartToggleContext";
import { useProductContext } from "../hook/useProductContext";

export function CartView() {
     const products = useProductContext();
     const { cart } = useCartContext();
     const { removeItem } = useCartToggleContext();
     const [newCart, setNewCart] = useState([]);

     useEffect(() => {
          const x = []
          for (const key in cart) {
               products.map(({ id, title, imageUrl }) => {
                    if (id == key) {
                         x.push({
                              id: key, title: title, imageUrl: imageUrl, count: cart[key]
                         })
                    }
               })
          }
          setNewCart(x)
     }, [cart]);

     return (
          <section className="flex flex-col gap-4">
               {
                    newCart?.map(({ id, imageUrl, title, count }) => (
                         count > 0 ?
                              <article className="flex items-center justify-between overflow-hidden border rounded-md" key={id}>
                                   <img
                                        src={imageUrl}
                                        className="h-[200px] rounded-l-sm aspect-square max-sm:h-[80px]"
                                   />
                                   <div className="flex justify-between flex-1 p-4">
                                        <h4 className="max-md:text-xs text-xl">{title}</h4>
                                        <div className="flex items-center gap-4">
                                             <p className="max-sm:text-xs text-xl font-normal">{count}</p>
                                             <button className="hover:bg-red-600 hover:text-white fond-bold max-sm:py-2 max-sm:text-xs px-4 py-1 text-red-600 transition-colors border border-red-600 rounded-md" onClick={() => removeItem(id)}>
                                                  Delete
                                             </button>
                                        </div>
                                   </div>
                              </article>
                              : ''
                    ))
               }
               {newCart.length == 0 && !cart && <h2 className="text-xl font-bold text-center">YOU DON'T HAVE NOTHING IN YOUR CART</h2>}
          </section>
     );
}
