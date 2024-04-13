import { CardWidget } from "./CardWidget";
import { CategoryList } from "./CategoryList";

export function NavBar({ url, categories, count }) {
  return (
    <>
      <nav className="max-[580px]:hidden flex items-center gap-5">
        {url.map(({ url, name, imageUrl }) => {
          return imageUrl != null ? (
            <a
              href={url}
              key={name}
              className="hover:scale-110 transition-transform"
            >
              <img src={imageUrl} alt={name} width={22} />
            </a>
          ) : (
            <a
              href={url}
              key={name}
              className="hover:scale-110 transition-transform"
            >
              {name}
            </a>
          );
        })}
        <CategoryList categories={categories} />
        <CardWidget cartCount={count} />
      </nav>
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
    </>
  );
}
