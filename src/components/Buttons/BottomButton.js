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
    borderRadius: "4px",

    fontSize: "16px",
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
        <img src={props.imgSrc} />
        {props.text}
      </button>
    </div>
  );
};

export default BottomButton;
