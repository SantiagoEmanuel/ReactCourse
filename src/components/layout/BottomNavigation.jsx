import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HomeIcon from "@mui/icons-material/Home";
import { Container } from "../containers/Container";
import { Link } from "react-router-dom";

export function BottomNavigation() {
  const NavigationButton = ({ url, Icon, children }) => {
    return (
      <Link
        to={url}
        className="flex flex-col items-center justify-center rounded-full transition-transform hover:scale-110 hover:text-[#414141]"
      >
        <Icon />
        {children}
      </Link>
    );
  };

  return (
    <Container className="fixed bottom-0 hidden w-full items-center justify-evenly gap-4 rounded-t-lg border bg-white pl-1 pr-1 pt-2 text-black max-md:flex">
      <NavigationButton url={"/"} Icon={HomeIcon}>
        Home
      </NavigationButton>
      <NavigationButton url={"/category/futbol"} Icon={SportsSoccerIcon}>
        Futbol
      </NavigationButton>
      <NavigationButton url={"/category/basquet"} Icon={SportsBasketballIcon}>
        Basquet
      </NavigationButton>
      <NavigationButton url={"/category/voley"} Icon={SportsVolleyballIcon}>
        voley
      </NavigationButton>
      <NavigationButton url={"/cart"} Icon={ShoppingCartIcon}>
        Cart
      </NavigationButton>
    </Container>
  );
}
