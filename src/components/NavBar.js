import "./NavBar.css";
import CircleButton from "./Buttons/CircleButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  var params = window.location.href;

  const icon_backgroundColor_selected = {
    fontSize: "32px",
    color: "black",
  };
  const icon_backgroundColor_unselected = {
    fontSize: "32px",
    color: "#D5D5E1",
  };

  return (
    <div className="NavBar">
      {params.includes("home") && <CircleButton />}
      <div className="menus">
        <Link to="/home">
          <ion-icon
            name="home"
            style={
              params.includes("home")
                ? icon_backgroundColor_selected
                : icon_backgroundColor_unselected
            }
          ></ion-icon>
        </Link>
        <Link to="/add-work">
          <ion-icon
            name="checkmark-circle"
            style={
              params.includes("add-work")
                ? icon_backgroundColor_selected
                : icon_backgroundColor_unselected
            }
          ></ion-icon>
        </Link>
        <ion-icon
          name="gift"
          style={
            params.includes("gift")
              ? icon_backgroundColor_selected
              : icon_backgroundColor_unselected
          }
        ></ion-icon>
        <ion-icon
          name="person-circle"
          style={
            params.includes("user")
              ? icon_backgroundColor_selected
              : icon_backgroundColor_unselected
          }
        ></ion-icon>
      </div>
    </div>
  );
};

export default NavBar;
