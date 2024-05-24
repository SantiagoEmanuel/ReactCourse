import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function ButtonNavigation({ url, Icon, children, Component, label }) {
  if (Component) {
    return (
      <Button className="flex flex-col items-center justify-center text-center">
        <Component />
        {label}
      </Button>
    );
  }
  return (
    <Button className="font-code">
      <Link
        to={url}
        className="flex flex-col items-center justify-center rounded-full font-code text-[#121212] transition-transform hover:scale-110 hover:text-[#414141]"
      >
        {Icon && <Icon />}
        {children}
      </Link>
    </Button>
  );
}
