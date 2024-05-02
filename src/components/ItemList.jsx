import { Item } from "./Item";

export function ItemList({ items }) {
     return (
          <section className="max-md:grid-cols-2 max-sm:grid-cols-1 grid grid-cols-3 gap-4">
               {
                    items.map(({ id, title, imageUrl, price, stock }) => (
                         <Item key={id} id={id} img={imageUrl} title={title} price={price} stock={stock} />
                    ))
               }
          </section>
     )
}