import { Link } from "react-router-dom";
import { useCategories } from "../../hook/useCategories";

export function CategoriesList({ css = "flex items-center gap-4" }) {
  const { categories } = useCategories();
  return (
    <ul className={css}>
      {categories.map(({ name, url }, index) => (
        <li key={index} className="transition-transform hover:scale-110">
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
