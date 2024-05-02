import { Brand } from "./Brand"
import { CategoriesList } from "./CategoriesList"
import { CartWidget } from "./CartWidget"
import { useUserContext } from "../context/userContext"
import { useUserToggleContext } from '../context/userToggleContext'
import { Link } from "react-router-dom";

export function NavBar() {
     const user = useUserContext();
     const logOut = useUserToggleContext();
     const countProduct = []
     user?.cart.map(({ count }) => {
          countProduct.push(count)
     })
     return (
          <header className="flex items-center justify-between">
               <Brand>E-Commerce {user && <p>Welcome {user.username}!</p>} </Brand>
               <nav className="flex items-center justify-around gap-6">
                    <CategoriesList />
                    {user?.status == 'admin' ? <Link to={'/create-product'} className="hover:scale-110 font-bold transition-transform">Create Product</Link> : ''}
                    {user && <button className="hover:scale-110 font-bold transition-transform" onClick={logOut}>Log out</button>}
                    <CartWidget count={countProduct} />
               </nav>
          </header>
     )
}