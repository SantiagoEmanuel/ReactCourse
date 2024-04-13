export function CardWidget({ cartCount = 0 }) {
  return (
    <div className="relative cursor-pointer">
      <img
        src="/icons/shoppingCart/shoppingCart-black.png"
        alt="ShoppingCart icon"
        className="dark:hidden"
      />
      <img
        src="/icons/shoppingCart/shoppingCart.png"
        alt="ShoppingCart icon"
        className="dark:block hidden"
      />
      {cartCount != 0 ? (
        <span className="-bottom-1 -right-1 absolute rounded-full bg-[#f14c26] z-10 px-1 text-xs">
          {cartCount}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
