import { Analytics } from "@vercel/analytics/react";
import { Link } from "react-router-dom";
import { useUserToggleContext } from "../../hook/useUserToggleContext";
import { useUserContext } from "../../hook/useUserContext";
import { closeAside } from "../../functions/closeAside";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { CartWidget } from "../ui/CartWidget";
import { NavBar } from "./NavBar";
import { CategoriesList } from "./CategoriesList";

export function Layout({ children }) {
  const user = useUserContext();
  const { logout } = useUserToggleContext();

  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer>
        <p className="text-balance text-center text-sm">
          Frontend and Backend created by{" "}
          <span className="text-xl font-bold text-orange-600">
            Santiago Emanuel
          </span>
        </p>
        <p className="text-balance text-center text-sm">Using Back-end V2.</p>
      </footer>
      <aside
        id="aside-menu"
        className="absolute right-0 top-0 z-10  hidden h-full w-full items-center justify-center bg-[#212121] max-2xl:hidden"
      >
        <button onClick={closeAside} className="absolute right-4 top-4">
          <CloseIcon />
        </button>
        <div className="flex flex-col items-center justify-center gap-4 text-center text-2xl">
          <CategoriesList css="flex flex-col gap-4 justify-center items-center text-center text-2xl" />
          {user?.status == "admin" ? (
            <Link
              to={"/create-product"}
              className="transition-transform hover:scale-110"
              onClick={closeAside}
            >
              Create Product
            </Link>
          ) : (
            ""
          )}
          {user == null ? (
            <>
              <Link
                to={"/login"}
                className="transition-transform hover:scale-110"
                onClick={closeAside}
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="transition-transform hover:scale-110"
                onClick={closeAside}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              className="transition-transform hover:scale-110"
              onClick={() => {
                logout();
                closeAside();
              }}
            >
              Log out
            </button>
          )}
          <CartWidget />
        </div>
      </aside>
      <Analytics />
    </>
  );
}
