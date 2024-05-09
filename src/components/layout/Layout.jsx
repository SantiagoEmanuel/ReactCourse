import { closeAside } from "../../functions/closeAside";
import { CategoriesList } from "./CategoriesList";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { NavBar } from "./NavBar";

export function Layout({ children }) {
     return (
          <>
               <NavBar />
               <main>
                    {children}
               </main>
               <footer>
                    <p className="text-balance text-sm text-center">The backend is under development now, it works, but needs more optimization and bug fixes.
                         You are using V1 of backend, V2 in development. If you want to help me with the development of the backend, do not hesitate to contact me, let's work as a team.</p>
                    {/* <p className="text-sm text-center">Frontend and Backend created by <span className="text-xl font-bold text-orange-600">Santiago Emanuel</span></p> */}
               </footer>
               <aside className="absolute top-0 right-0 z-10  w-full h-full bg-[#212121] items-center justify-center max-2xl:hidden hidden">
                    <button onClick={closeAside} className="top-4 right-4 absolute">
                         <CloseIcon />
                    </button>
                    <CategoriesList css="flex flex-col gap-4 justify-center items-center text-center text-2xl" />
               </aside>
          </>
     )
}