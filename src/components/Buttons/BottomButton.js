import "../css/BottomButton.css";

const BottomButton = (props) => {
  const bottomButtonStyle = {
    position: "relative",
    top: "89vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "90%",
    padding: "20px 10px",
    margin: "auto",

    border: "none",
    borderRadius: "4px",

    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  return (
    <>
      <button className="btn" style={bottomButtonStyle} onClick={props.onClick}>
        <img src={props.imgSrc} />
        {props.text}
      </button>
    </>
  );
};

export default BottomButton;
