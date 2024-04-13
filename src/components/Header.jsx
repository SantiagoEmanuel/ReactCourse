import { Brand } from "./Brand";
import { NavBar } from "./NavBar";

export function Header({ children, urls, categories, count }) {
  return (
    <header className=" flex items-center justify-between w-full px-5 py-4">
      <Brand url="/"> {children} </Brand>
      <NavBar url={urls} categories={categories} count={count} />
    </header>
  );
}
