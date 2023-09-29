import "./css/DateBox.css";

const DateBox = (props) => {
  const selectedStyle = {
    backgroundColor: "#0fbe62",
    color: "white",
    padding: "3px",
  };
  const unSelectedStyle = {
    paddingTop: "3px",
  };
  return (
    <span className="DateBox">
      <span className="regularTxt ftXSm grayText textCenter mt1">
        {props.dayName}
      </span>
      <span
        className="dateNum boldTxt ftSm textCenter"
        style={props.selected ? selectedStyle : unSelectedStyle}
      >
        {props.dayNum}
      </span>
    </span>
  );
};
export default DateBox;
