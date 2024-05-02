import { Link } from "react-router-dom";
import { useCategories } from "../hook/useCategories";

export function CategoriesList() {

     const { categories } = useCategories();

     return (
          <ul className="flex items-center gap-4">
               {
                    categories.map(({ name, url }, index) => (
                         <li key={index} className="hover:scale-110 transition-transform"><Link to={url}>{name}</Link></li>
                    ))
               }
          </ul>
     )
}