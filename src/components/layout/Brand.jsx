import { CustomLink } from "../ui/CustomLink";
import { Typography } from "../ui/Typography";

export function Brand({ url, children }) {
  return (
    <Typography As="h1">
      <CustomLink to={url} label={children} />
    </Typography>
  );
}
