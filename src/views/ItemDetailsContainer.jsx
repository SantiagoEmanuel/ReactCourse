import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hook/useProducts";
import { ArrowLeft } from "../components/ui/icons/ArrowLeft";
import { ShowProduct } from "../components/ShowProduct";

export function ItemDetailsContainer() {
  const { id } = useParams();
  const { products } = useProducts(id);

  return (
    <section className="flex w-full flex-col gap-8">
      <Link to={"/"} className="flex items-center gap-2 text-xl font-bold">
        <ArrowLeft />
        Back
      </Link>
      <section>
        <ShowProduct products={products} />
      </section>
    </section>
  );
}
