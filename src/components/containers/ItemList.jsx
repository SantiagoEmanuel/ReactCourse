import { Item } from "../ui/item/Item";

export function ItemList({ items, filter = null }) {
     return (
          <section className="max-md:grid-cols-2 grid grid-cols-3 gap-4">
               {
                    filter ?
                         items.map(({ id, title, imageUrl, price, stock, category }) => (
                              filter == category &&
                              <Item key={id} id={id} img={imageUrl} title={title} price={price} stock={stock} />
                         ))
                         : items.map(({ id, title, imageUrl, price, stock }) => (
                              <Item key={id} id={id} img={imageUrl} title={title} price={price} stock={stock} />
                         ))
               }
          </section>
     )
}