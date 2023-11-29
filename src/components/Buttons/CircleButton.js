import "./css/CircleButton.css";
import {Link} from "react-router-dom";

const CircleButton = () => {
  return (
    <div className="CircleButton">
      <Link to="/add-work">
        <ion-icon name="add-circle"></ion-icon>
      </Link>
    </div>
  );
};

export default CircleButton;
