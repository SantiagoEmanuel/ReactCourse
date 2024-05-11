import { useState, useEffect } from "react";
import { useCartContext } from "../hook/useCartContext";
import { useProducts } from '../hook/useProducts';

export function CartView() {
     const { products } = useProducts();
     const { cart } = useCartContext();
     const [newCart, setNewCart] = useState([])

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
     }, [products, cart]);

     return (
          <section className="flex flex-col gap-4">
               {
                    newCart?.map(({ id, imageUrl, title, count }) => (
                         <article className="flex items-center justify-between overflow-hidden border rounded-md" key={id}>
                              <img
                                   src={imageUrl}
                                   className="h-[200px] rounded-l-sm aspect-square"
                              />
                              <div className="flex justify-between flex-1 p-4">
                                   <h4>{title}</h4>
                                   <div className="flex items-center gap-4">
                                        <p className="text-xl font-normal">{count}</p>
                                        <button className="hover:bg-red-600 hover:text-white fond-bold px-4 py-1 text-red-600 transition-colors border border-red-600 rounded-md">
                                             Delete
                                        </button>
                                   </div>
                              </div>
                         </article>
                    ))
               }
               {cart && newCart.length == 0 && <h2 className="text-xl font-bold text-center">Loading</h2>}
               {newCart.length == 0 && !cart && <h2 className="text-xl font-bold text-center">YOU DON'T HAVE NOTHING IN YOUR CART</h2>}
          </section>
     );
}
