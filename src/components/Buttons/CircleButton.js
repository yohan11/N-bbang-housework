import "./css/CircleButton.css";
import { Link } from "react-router-dom";

const CircleButton = (props) => {
  return (
    <div className="CircleButton">
      <Link to={`/add-work/${props.selectedGroupId}`}>
        <ion-icon name="add-circle"></ion-icon>
      </Link>
    </div>
  );
};

export default CircleButton;
