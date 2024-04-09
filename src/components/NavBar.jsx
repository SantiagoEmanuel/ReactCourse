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
        className="hover:scale-110 transition-transform"
        title="Go to your Shopping Cart"
      >
        Shopping Cart
      </a>
    </nav>
  );
}
