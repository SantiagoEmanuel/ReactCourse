import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hook/useProducts";
import { ArrowLeft } from "../components/ui/icons/ArrowLeft";
import { ShowProduct } from "../components/ShowProduct";
import { Container } from "../components/containers/Container";

export function ItemDetailsContainer() {
  const { id } = useParams();
  const { products } = useProducts(id);

  return (
    <Container className="flex w-full flex-col gap-8">
      <Link to={"/"} className="flex items-center gap-2 text-xl font-bold">
        <ArrowLeft />
        Back
      </Link>
      <Container>
        <ShowProduct products={products} />
      </Container>
    </Container>
  );
}
