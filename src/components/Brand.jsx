import { CustomLink } from "./CustomLink";

export function Brand({ url, children }) {
  return (
    <h1>
      <CustomLink to={url} label={children} />
    </h1>
  );
}
