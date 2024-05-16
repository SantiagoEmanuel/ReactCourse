import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hook/useProducts";
import { ItemDetails } from "../components/ui/item/ItemDetails";
import { ArrowLeft } from "../components/ui/icons/ArrowLeft";

export function ItemDetailsContainer() {
  const { id } = useParams();
  const { products } = useProducts(id);

  return (
    <section>
      <Link to={"/"} className="flex items-center gap-2 text-xl font-bold">
        <ArrowLeft />
        Back
      </Link>
      {products?.map((product) => (
        <ItemDetails
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          stock={product.stock}
          imgUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </section>
  );
}
