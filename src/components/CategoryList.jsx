export function CategoryList({ categories }) {
  return (
    <ul className="flex items-center gap-6">
      {categories.map(({ name, url }) => (
        <li key={name} className="hover:scale-110 transition-transform">
          <a href={`/${url}`}>{name}</a>
        </li>
      ))}
    </ul>
  );
}
