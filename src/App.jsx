import { Outlet } from "react-router-dom";
import { UserProvider } from "./provider/UserProvider";
import { CartProvider } from "./provider/CartProvider";
import { Layout } from "./components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(location.pathname);
  }, []);

  return (
    <CartProvider>
      <UserProvider>
        <Layout>
          <Outlet />
        </Layout>
      </UserProvider>
    </CartProvider>
  );
}
