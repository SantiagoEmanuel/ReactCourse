import { Analytics } from '@vercel/analytics/react';
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
     const { loginUser } = useUserToggleContext();

     return (
          <>
               <NavBar />
               <main className="flex flex-col items-center justify-center flex-1">
                    {children}
               </main>
               <footer>
                    <p className="text-balance text-sm text-center">Frontend and Backend created by <span className="text-xl font-bold text-orange-600">Santiago Emanuel</span></p>
                    <p className="text-balance text-sm text-center">Using Back-end V2.</p>
               </footer>
               <aside id="aside-menu" className="absolute top-0 right-0 z-10  w-full h-full bg-[#212121] items-center justify-center max-2xl:hidden hidden">
                    <button onClick={closeAside} className="top-4 right-4 absolute">
                         <CloseIcon />
                    </button>
                    <div className="flex flex-col items-center justify-center gap-4 text-2xl text-center">
                         <CategoriesList css="flex flex-col gap-4 justify-center items-center text-center text-2xl" />
                         {user?.status == 'admin' ? <Link to={'/create-product'} className="hover:scale-110 transition-transform" onClick={closeAside}>Create Product</Link> : ''}
                         {user == null ? <><Link to={'/login'} className="hover:scale-110 transition-transform" onClick={closeAside}>Login</Link><Link to={'/register'} className="hover:scale-110 transition-transform" onClick={closeAside}>Register</Link></> : <button className="hover:scale-110 transition-transform" onClick={() => { loginUser(); closeAside() }}>Log out</button>}
                         <CartWidget />
                    </div>
               </aside>
               <Analytics />
          </>
     )
}