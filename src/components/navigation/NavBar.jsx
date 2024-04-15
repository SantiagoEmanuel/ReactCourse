import { CardWidget } from "../ui/CardWidget";
import { CategoryList } from "../CategoryList";
import { BtnMenu } from "../ui/BtnMenu";

export function NavBar({ categories, count }) {
  return (
    <>
      <nav className="max-[580px]:hidden flex items-center gap-5">
        <CategoryList categories={categories} />
        <CardWidget cartCount={count} />
      </nav>
      <BtnMenu />
    </>
  );
}
