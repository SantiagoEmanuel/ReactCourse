import { itemFilter } from "../../functions/filterItems";
import { Item } from "../ui/item/Item";

export function ItemList({
  items,
  categoryFilter = null,
  priceFilter = null,
  searchFilter = null,
}) {
  const productFiltered = itemFilter({
    items,
    categoryFilter,
    priceFilter,
    searchFilter,
  });

  return (
    <section className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
      {productFiltered.map(({ id, title, price, imageUrl }) => (
        <Item key={id} id={id} img={imageUrl} title={title} price={price} />
      ))}
    </section>
  );
}
