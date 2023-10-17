import "./css/DateBox.css";

const DateBox = (props) => {
  const selected_style = {
    backgroundColor: "#0fbe62",
    color: "white",
    padding: "3px",
  };
  const unSelected_style = {
    paddingTop: "3px",
  };
  return (
    <span className="DateBox">
      <span className="regularTxt ftXSm grayText textCenter mt1">
        {props.dayName}
      </span>
      <span
        className="dateNum boldTxt ftSm textCenter"
        style={props.selected ? selected_style : unSelected_style}
      >
        {props.dayNum}
      </span>
    </span>
  );
};
export default DateBox;
