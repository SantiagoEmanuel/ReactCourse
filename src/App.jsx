import { Outlet } from "react-router-dom"
import { UserProvider } from "./provider/UserProvider"
import { CartProvider } from "./provider/CartProvider"
import { ProductsProvider } from './provider/ProductProvider'
import { Layout } from "./components/layout/Layout"

export function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <UserProvider>
          <Layout>
            <Outlet />
          </Layout>
        </UserProvider>
      </CartProvider>
    </ProductsProvider>
  )
}