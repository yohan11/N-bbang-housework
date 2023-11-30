import "./NavBar.css";
import CircleButton from "./Buttons/CircleButton";
import { Link } from "react-router-dom";

const NavBar = (props) => {
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
      {!params.includes("add-work") && !params.includes("gift-shop") && (
        <CircleButton selectedGroupId={props.selectedGroupId} />
      )}
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
        <Link to="/work-list">
          <ion-icon
            name="checkmark-circle"
            style={
              params.includes("work-list")
                ? icon_backgroundColor_selected
                : icon_backgroundColor_unselected
            }
          ></ion-icon>
        </Link>
        <Link to="/gift-shop">
          <ion-icon
            name="gift"
            style={
              params.includes("gift")
                ? icon_backgroundColor_selected
                : icon_backgroundColor_unselected
            }
          ></ion-icon>
        </Link>
        <Link to="/mypage">
          <ion-icon
            name="person-circle"
            style={
              params.includes("mypage")
                ? icon_backgroundColor_selected
                : icon_backgroundColor_unselected
            }
          ></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
