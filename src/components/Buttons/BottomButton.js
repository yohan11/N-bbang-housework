import "./css/BottomButton.css";

const BottomButton = (props) => {
  const bottomButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    padding: "20px 10px",
    margin: "auto",
    marginBottom: "10px",

    border: "none",
    borderRadius: props.borderRadius,

    fontSize: "16px",
    fontWeight: props.fontWeight,
    cursor: "pointer",
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  return (
    <div>
      <button
        className="btn"
        style={bottomButtonStyle}
        onClick={props.onClick}
        disabled={!props.buttonActive}
      >
        {props.imgSrc && <img src={props.imgSrc} />}
        {props.text}
      </button>
    </div>
  );
};

export default BottomButton;
