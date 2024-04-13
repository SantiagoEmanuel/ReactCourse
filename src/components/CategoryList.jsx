export function CategoryList({ categories }) {
  return (
    <ul className="flex items-center gap-4">
      {categories.map((category) => (
        <li key={category} className="hover:scale-105 transition-transform">
          <a href={`/${category}`}>{category}</a>
        </li>
      ))}
    </ul>
  );
}
