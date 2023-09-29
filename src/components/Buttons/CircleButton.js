import "./css/CircleButton.css";
import { Link } from "react-router-dom";

const CircleButton = () => {
  return (
    <div className="CircleButton">
      <Link to="/add-work">
        <img src="/img/add-outline_icon.png" />
      </Link>
    </div>
  );
};

export default CircleButton;
