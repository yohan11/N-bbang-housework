import "./css/MainHeader.css";
import {Link} from "react-router-dom";

const MainHeader = (props) => {
  return (
    <div className="MainHeader">
      {props.pageName !== "Home" && (
        <Link to="/home">
          <span className="left_icon">
            <img src="/img/previous_icon.png"/>
          </span>
        </Link>
      )}
      <span className="header-title bold-txt">{props.pageName}</span>
      <span className="right_icon">
         <Link to="/home">
           <ion-icon
             name="notifications"
           ></ion-icon>
         </Link>
      </span>
    </div>
  );
};

export default MainHeader;
