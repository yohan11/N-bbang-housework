import Modal from "react-modal";
import CategoryButton from "../Buttons/CategoryButton";
import React from "react";
import "./css/MainModal.css";

const MainModal = (props) => {
  return (
    <Modal
      className="modal"
      isOpen={props.activeModal}
      onRequestClose={props.onRequestCloseFunc}
      style={{
        overlay: {
          position: "fixed",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          position: "absolute",
          top: props.modalTop,
          left: 0,
          right: 0,
          bottom: 0,
          border: "none",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px 20px 0 0",
          outline: "none",
          padding: 0,
        },
      }}
    >
      <div className="modal_contents">
        <img
          src={props.modalImage}
          className={props.isPreviewImg ? "preview_img" : "modal_img"}
        />
        <div className="modal_texts">
          <div className="ftM boldTxt textCenter mt4">{props.titleText}</div>
          <div className="ftXSm thinTxt textCenter mt2">
            {props.contentText}
          </div>
          <div className="modal_buttons mt4">
            {props.twoBtn === true ? (
              <>
                <CategoryButton
                  borderRadius="10px"
                  categoryName={props.firstBtnText}
                  isSelected={false}
                  onClick={props.firstBtnOnClick}
                  width="40%"
                ></CategoryButton>
                <CategoryButton
                  borderRadius="10px"
                  categoryName={props.secondBtnText}
                  isSelected={false}
                  onClick={() => {
                    props.secondBtnOnClick();
                  }}
                  width="40%"
                ></CategoryButton>
              </>
            ) : (
              <CategoryButton
                borderRadius="10px"
                categoryName={props.BtnText}
                isSelected={false}
                onClick={props.BtnOnClick}
                width="80%"
              ></CategoryButton>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default MainModal;
