import shoppingCart from "/icons/shoppingCart.png";
import shoppingCartBlack from "/icons/shoppingCart-black.png";

export function NavBar() {
  return (
    <nav className="flex items-center gap-5">
      <a
        href="#"
        className="hover:scale-110 transition-transform"
        title="Go to Home Page"
      >
        Home
      </a>
      <a
        href="#"
        className="hover:scale-110 transition-transform"
        title="Go to products"
      >
        Products
      </a>
      <a
        href="#"
        className="hover:scale-110 dark:block hidden transition-transform"
        title="Go to your Shopping Cart"
      >
        <img src={shoppingCart} alt="Shopping Cart icon" />
      </a>
      <a
        href="#"
        className="hover:scale-110 dark:hidden transition-transform"
        title="Go to your Shopping Cart"
      >
        <img src={shoppingCartBlack} alt="Shopping Cart icon" />
      </a>
    </nav>
  );
}
