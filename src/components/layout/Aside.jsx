import { CategoryList } from "../CategoryList";
import { CardWidget } from "../ui/CardWidget";
import { Typography } from "../ui/Typography";

export function Aside({ categories, count }) {
  return (
    <aside className="absolute top-0 right-0 gap-4 bg-[#212121] items-end px-6 h-full w-[300px] flex-col hidden min-[580px]:hidden">
      <Typography
        As="span"
        className="mt-6 border-2 rounded-full cursor-pointer"
        onClick={() => {
          const aside = document.querySelector("aside");
          aside.classList.replace("flex", "hidden");
        }}
      >
        <img
          src="icons/close/close.png"
          alt="close icon"
          className="dark:block hidden"
          width={18}
        />
        <img
          src="icons/close/close-black.png"
          alt="close icon"
          className="dark:hidden"
          width={18}
        />
      </Typography>
      <CategoryList categories={categories} addCss={"flex-col pt-5"} />
      <CardWidget cartCount={count} />
    </aside>
  );
}
