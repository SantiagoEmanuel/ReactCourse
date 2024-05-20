import { Link } from "react-router-dom";
import { useUserToggleContext } from "../../hook/useUserToggleContext";
import { useUserContext } from "../../hook/useUserContext";
import { showMenu } from "../../functions/openAside";
import { CategoriesList } from "./CategoriesList";
import { CartWidget } from "../ui/CartWidget";
import { MenuIcon } from "../ui/icons/MenuIcon";
import { Brand } from "./Brand";

export function NavBar() {
  const user = useUserContext();
  const { logout } = useUserToggleContext();

  return (
    <header className="flex items-center justify-between">
      <Brand>E-Commerce {user && <p>Welcome {user.first_name}!</p>} </Brand>
      <nav className="flex items-center justify-around gap-6">
        <div className="flex items-center justify-around gap-6 max-md:hidden">
          <CategoriesList />
          <CartWidget />
          {user == null ? (
            <>
              <Link
                to={"/login"}
                className="font-bold transition-transform hover:scale-110"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="font-bold  transition-transform hover:scale-110"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/user"}
                className="font-bold transition-transform hover:scale-110"
              >
                Profile
              </Link>
              <button
                className="font-bold transition-transform hover:scale-110"
                onClick={logout}
              >
                Log out
              </button>
            </>
          )}
        </div>
        <div className="hidden content-center items-center max-md:flex">
          <button onClick={showMenu}>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}
