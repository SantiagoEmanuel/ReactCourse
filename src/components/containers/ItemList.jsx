import { Item } from "../ui/item/Item";

export function ItemList({ items, filter = null }) {
     return (
          <section className="max-sm:grid-cols-2 max-[424px]:grid-cols-1 grid grid-cols-3 gap-4">
               {
                    items.map(({ id, title, imageUrl, price, stock, category }) => (
                         filter != null && filter == category ?
                              <Item key={id} id={id} img={imageUrl} title={title} price={price} stock={stock} />
                              : filter == null && <Item key={id} id={id} img={imageUrl} title={title} price={price} stock={stock} />
                    ))
               }
          </section>
     )
}