import { Link } from "react-router-dom";
import { useUserToggleContext } from '../../hook/useUserToggleContext'
import { useUserContext } from "../../hook/useUserContext"
import { showMenu } from "../../functions/openAside"
import { CategoriesList } from "./CategoriesList"
import { CartWidget } from "../ui/CartWidget"
import { MenuIcon } from "../ui/icons/MenuIcon"
import { Brand } from "./Brand"

export function NavBar() {
     const user = useUserContext();
     const { loginUser } = useUserToggleContext();

     return (
          <header className="flex items-center justify-between">
               <Brand>E-Commerce {user && <p>Welcome {user.username}!</p>} </Brand>
               <nav className="flex items-center justify-around gap-6">
                    <div className="max-md:hidden flex items-center justify-around gap-6">
                         <CategoriesList />
                         {user?.status == 'admin' ? <Link to={'/create-product'} className="hover:scale-110 font-bold transition-transform">Create Product</Link> : ''}
                         <CartWidget />
                         {user == null ? <><Link to={'/login'} className="hover:scale-110 font-bold transition-transform">Login</Link><Link to={'/register'} className="hover:scale-110 font-bold transition-transform">Register</Link></> : <button className="hover:scale-110 font-bold transition-transform" onClick={loginUser}>Log out</button>}
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