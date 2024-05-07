import { Brand } from "./Brand"
import { CategoriesList } from "./CategoriesList"
import { CartWidget } from "./CartWidget"
import { useUserContext } from "../context/userContext"
import { useUserToggleContext } from '../context/userToggleContext'
import { Link } from "react-router-dom";
import { MenuIcon } from "./MenuIcon"
import { showMenu } from "../functions/openAside"

export function NavBar() {
     const user = useUserContext();
     const logOut = useUserToggleContext();
     const countProduct = []
     let x = 0
     user?.cart.map(({ COUNT }, index) => {
          x += COUNT;
          if (index == user.cart.length - 1) {
               countProduct.push(x)
          }
     })

     return (
          <header className="flex items-center justify-between">
               <Brand>E-Commerce {user && <p>Welcome {user.username}!</p>} </Brand>
               <nav className="flex items-center justify-around gap-6">
                    <div className="max-md:hidden flex items-center justify-around gap-6">
                         <CategoriesList />
                         {user?.status == 'admin' ? <Link to={'/create-product'} className="hover:scale-110 font-bold transition-transform">Create Product</Link> : ''}
                         <CartWidget count={countProduct.toString()} />
                         {user == null ? <><Link to={'/login'} className="hover:scale-110 font-bold transition-transform">Login</Link><Link to={'/register'} className="hover:scale-110 font-bold transition-transform">Register</Link></> : <button to={'/logout'} className="hover:scale-110 font-bold transition-transform" onClick={logOut}>Log out</button>}
                    </div>
                    <div className="max-md:flex items-center content-center hidden">
                         <button onClick={showMenu}>
                              <MenuIcon />
                         </button>
                    </div>
               </nav>
          </header>
     )
}