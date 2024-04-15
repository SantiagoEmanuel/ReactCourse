import { Brand } from "./Brand";
import { NavBar } from "../navigation/NavBar";

export function Header({ children, categories, count }) {
  return (
    <header className=" flex items-center justify-between w-full px-5 py-4">
      <Brand url="/">{children}</Brand>
      <NavBar categories={categories} count={count} />
    </header>
  );
}
