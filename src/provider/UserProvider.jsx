import { UserContext } from "../context/UserContext";
import { UserToggleContext } from "../context/UserToggleContext";
import { useUser } from "../hook/useUser";
import { useCart } from "../hook/useCart";

export function UserProvider({ children }) {
  const { user, login, logout, createNewUser, comprarCarrito } = useUser();
  const { upgradeCart } = useCart();

  return (
    <UserContext.Provider value={user}>
      <UserToggleContext.Provider
        value={{ login, logout, upgradeCart, createNewUser, comprarCarrito }}
      >
        {children}
      </UserToggleContext.Provider>
    </UserContext.Provider>
  );
}
