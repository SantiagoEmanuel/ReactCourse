import { Link } from "react-router-dom";
import { useUserContext } from "../../hook/useUserContext";
import { UserOptions } from "./UserOptions";
import { closeAside } from "../../functions/closeAside";

export function NavUserOptions() {
  const user = useUserContext();

  const ShowOptions = () => {
    if (user) {
      return <UserOptions user={user} />;
    } else {
      return (
        <>
          <Link
            to={"/login"}
            className="transition-transform hover:scale-110"
            onClick={closeAside}
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="transition-transform hover:scale-110"
            onClick={closeAside}
          >
            Register
          </Link>
        </>
      );
    }
  };

  return <ShowOptions />;
}
