import { useUserContext } from "../../hook/useUserContext";
import { CategoriesList } from "./CategoriesList";
import { CartWidget } from "../ui/CartWidget";
import { Brand } from "./Brand";
import { UserOptions } from "../ui/UserOptions";

export function NavBar() {
  const user = useUserContext();

  return (
    <header className="flex items-center justify-between p-4">
      <Brand>
        E-Commerce {user && <p className="text-sm">Welcome {user.username}!</p>}
      </Brand>
      <nav className="flex items-center justify-around gap-6">
        <div className="flex items-center justify-around gap-6 max-md:hidden">
          <CategoriesList />
          <CartWidget />
          <UserOptions />
        </div>
        <div className="hidden content-center items-center max-md:flex">
          <UserOptions />
        </div>
      </nav>
    </header>
  );
}
