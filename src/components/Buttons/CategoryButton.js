import React from "react";
import "./css/CategoryButton.css";

const CategoryButton = (props) => {
  const selected_button_style = {
    backgroundColor: "#0FBE62",
    color: "white",
    borderRadius: props.borderRadius,
    width: props.width ? props.width : "auto",
  };
  const unselected_button_style = {
    borderRadius: props.borderRadius,
    width: props.width ? props.width : "auto",
  };

  return (
    <button
      className="CategoryBox regularTxt ftSm"
      onClick={props.onClick}
      style={props.isSelected ? selected_button_style : unselected_button_style}
    >
      {props.categoryName}
    </button>
  );
};

export default CategoryButton;
