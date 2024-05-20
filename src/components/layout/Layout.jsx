import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "./NavBar";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
      <MobileMenu />
      <ToastContainer
        limit={6}
        position="bottom-right"
        theme="dark"
        draggableDirection="x"
        closeOnClick={true}
        pauseOnHover={false}
        autoClose={1500}
      />
      <Analytics />
    </>
  );
}
