import "./css/MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  const icon_style = {
    fontSize: "20px",
    color: "rgb(112, 121, 126)",
    marginTop: "4px",
    position: "absolute",
    left: "85%",
  };
  return (
    <div className="MainHeader">
      {props.pageName !== "Home" && (
        <Link to="/home">
          <span
            className="left_icon
      "
          >
            <img src="/img/previous_icon.png" />
          </span>
        </Link>
      )}

      <span className="house_info boldTxt ftM mt2">{props.pageName}</span>

      <ion-icon
        name="notifications"
        className="right_icon"
        style={icon_style}
      ></ion-icon>
    </div>
  );
};

export default MainHeader;
