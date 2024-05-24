import { Container } from "../containers/Container";
import { ButtonNavigation } from "../ui/buttons/ButtonNavigation";
import { useCategories } from "../../hook/useCategories";
import { CartWidget } from "../ui/CartWidget";

export function BottomNavigation() {
  const { categories } = useCategories();

  return (
    <Container className="fixed bottom-0 hidden w-full items-center justify-evenly gap-4 rounded-t-lg border bg-white pb-4 pl-1 pr-1 pt-2 text-black max-md:flex">
      <ButtonNavigation url={"/"}>INICIO</ButtonNavigation>
      {categories.map(({ name, url }) => (
        <ButtonNavigation url={url} key={name}>
          {name}
        </ButtonNavigation>
      ))}
      <ButtonNavigation Component={CartWidget} url={"/cart"} />
    </Container>
  );
}
