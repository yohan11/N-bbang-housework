import "./css/CategoryButton.css";

const CategoryButton = (props) => {
  const selectedButtonColor = {
    backgroundColor: "#0FBE62",
    color: "white",
    borderRadius: props.borderRadius,
    width: props.width ? props.width : "auto",
  };
  const unselectedButtonColor = {
    borderRadius: props.borderRadius,
    width: props.width ? props.width : "auto",
  };

  return (
    <button
      className="CategoryBox regularTxt ftSm "
      onClick={props.onClick}
      style={props.isSelected ? selectedButtonColor : unselectedButtonColor}
    >
      {props.categoryName}
    </button>
  );
};

export default CategoryButton;
