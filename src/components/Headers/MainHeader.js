import "./css/MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
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
      <span className="right_icon">
        <img src="/img/notification_icon.png" />
      </span>
    </div>
  );
};

export default MainHeader;
