export function CustomLink({ to, label, ...rest }) {
  return (
    <a href={`${to}`} {...rest}>
      {label}
    </a>
  );
}
