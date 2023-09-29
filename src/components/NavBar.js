import "./NavBar.css";
import CircleButton from "./Buttons/CircleButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  var params = window.location.href;

  return (
    <div className="NavBar">
      {params.includes("home") && <CircleButton />}
      <div className="menus">
        <Link to="/home">
          <img
            src={
              params.includes("home")
                ? "/img/home-icon_selected.png"
                : "/img/home_icon.png"
            }
          />
        </Link>
        <Link to="/add-work">
          <img
            src={
              params.includes("add-work")
                ? "/img/check-icon_selected.png"
                : "/img/check_icon.png"
            }
          />
        </Link>
        <img src="/img/present_icon.png" />
        <img src="/img/user_icon.png" />
      </div>
    </div>
  );
};

export default NavBar;
