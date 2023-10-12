import React, { useRef } from "react";
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

  // cameraActive props가 true일 경우 해당 버튼을 클릭하면 카메라가 활성화됩니다.
  const inputRef = useRef(null);

  const buttonCameraActive = () => {
    if (inputRef.current) {
      inputRef.current.click(); // 버튼 클릭 시 input 요소를 클릭합니다.
    }
  };

  return (
    <>
      {props.activeCamera ? (
        <>
          <button
            className="CategoryBox regularTxt ftSm"
            style={
              props.isSelected ? selectedButtonColor : unselectedButtonColor
            }
            onClick={buttonCameraActive}
          >
            {props.categoryName}
            <input
              ref={inputRef}
              className="CategoryBox regularTxt ftSm hidden"
              type="file"
              id="camera"
              name="camera"
              capture="camera"
              accept="image/*"
            />
          </button>
        </>
      ) : (
        <button
          className="CategoryBox regularTxt ftSm"
          onClick={props.onClick}
          style={props.isSelected ? selectedButtonColor : unselectedButtonColor}
        >
          {props.categoryName}
        </button>
      )}
    </>
  );
};

export default CategoryButton;
