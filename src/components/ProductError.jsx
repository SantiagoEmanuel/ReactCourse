import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container } from "./containers/Container";

export function ProductError() {
  const { id } = useParams();

  return (
    <Container className="flex flex-col gap-10">
      <h2 className="text-balance">
        Producto con id: <span className="font-bold text-orange-500">{id}</span>{" "}
        no encontrado.
      </h2>
      <Link
        to={"/"}
        className="m-auto rounded-lg border border-orange-500 px-4 py-2 text-center hover:bg-orange-500 hover:bg-opacity-15"
      >
        Volver a inicio
      </Link>
    </Container>
  );
}
