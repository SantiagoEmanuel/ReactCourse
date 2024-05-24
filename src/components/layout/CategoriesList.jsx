import { Link } from "react-router-dom";
import { useCategories } from "../../hook/useCategories";
import { Button } from "@mui/material";

export function CategoriesList({
  css = "flex items-center gap-4 max-md:hidden ",
}) {
  const { categories } = useCategories();
  return (
    <div className={css}>
      {categories.map(({ name, url }, index) => (
        <Button
          className="hover:scale-110 hover:transition-transform"
          key={index}
        >
          <Link className="font-code text-white" to={url}>
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
