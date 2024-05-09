import { Layout } from "./components/layout/Layout"
import { Outlet } from "react-router-dom"
import { UserProvider } from "./provider/UserProvider"
import { CartProvider } from "./provider/CartProvider"

export function App() {
  return (
    <CartProvider>
      <UserProvider>
        <Layout>
          <Outlet />
        </Layout>
      </UserProvider>
    </CartProvider>
  )
}