import { ItemDetails } from "./ui/item/ItemDetails";
import { ProductError } from "./ProductError";

export function ShowProduct({ products }) {
  if (products.length == 0) {
    return <ProductError />;
  } else {
    return products.map(
      ({ imageUrl, title, description, stock, price, id }) => (
        <ItemDetails
          key={id}
          imgUrl={imageUrl}
          title={title}
          description={description}
          stock={stock}
          price={price}
          id={id}
        />
      ),
    );
  }
}
