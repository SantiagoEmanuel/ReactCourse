import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ShowAvatar } from "./ShowAvatar";
import { useUserToggleContext } from "../../hook/useUserToggleContext";
import { Link } from "react-router-dom";

export function UserOptions({ user = null }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout } = useUserToggleContext();

  if (!user) {
    return (
      <div className="flex gap-4">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    );
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ShowAvatar
          avatar={user.avatar}
          alt={user.first_name + user.last_name}
          className="w-[50px] rounded-full"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={"/user"} className="font-bold">
            Profile
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <span className="font-bold">Logout</span>
        </MenuItem>{" "}
      </Menu>
    </div>
  );
}
