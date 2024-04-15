import { CustomLink } from "./ui/CustomLink";

export function CategoryList({ categories, addCss }) {
  return (
    <ul className={`flex items-center gap-6 ${addCss}`}>
      {categories.map(({ name, url }, index) => (
        <li key={index} className="hover:scale-110 transition-transform">
          <CustomLink to={url} label={name} />
        </li>
      ))}
    </ul>
  );
}
