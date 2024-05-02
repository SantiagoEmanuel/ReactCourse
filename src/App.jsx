import { Layout } from "./components/Layout"
import { Outlet } from "react-router-dom"
import { UserProvider } from "./provider/UserProvider"

export function App() {
  return (
    <UserProvider>
      <Layout>
        <Outlet />
      </Layout>
    </UserProvider>
  )
}