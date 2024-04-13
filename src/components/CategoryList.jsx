export function CategoryList({ categories }) {
  return (
    <ul className="flex items-center gap-6">
      {categories.map((category) => (
        <li key={category} className="hover:scale-110 transition-transform">
          <a href={`/${category}`}>{category}</a>
        </li>
      ))}
    </ul>
  );
}
