export function BtnMenu() {
  return (
    <button className="hidden max-[580px]:block cursor-pointer">
      <img
        src="/icons/menu/menu.png"
        alt="Menu icon"
        width={32}
        className="dark:block hidden"
      />
      <img
        src="/icons/menu/menu-black.png"
        alt="Menu icon"
        width={32}
        className="dark:hidden"
      />
    </button>
  );
}
