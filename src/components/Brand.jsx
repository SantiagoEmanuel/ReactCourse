export function Brand({ url, children }) {
  return (
    <h1>
      <a href={url}>{children}</a>
    </h1>
  );
}
