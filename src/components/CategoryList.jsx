import { CustomLink } from "./CustomLink";

export function CategoryList({ categories }) {
  return (
    <ul className="flex items-center gap-6">
      {categories.map(({ name, url }, index) => (
        <li key={index} className="hover:scale-110 transition-transform">
          <CustomLink to={url} label={name} />
        </li>
      ))}
    </ul>
  );
}
