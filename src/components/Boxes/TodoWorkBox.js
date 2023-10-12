import "./css/TodoWorkBox.css";
import Avatar from "../Others/Avatar";
import Modal from "react-modal";
import CategoryButton from "../Buttons/CategoryButton";
import { useState } from "react";

const TodoWorkBox = (props) => {
  const check_icon_style_default = {
    color: "#D5D5E1",
    fontSize: "48px",
  };
  const check_icon_style_proceeding = {
    color: "#FFCD27",
    fontSize: "48px",
  };

  const [activeMainModal, setActiveMainModal] = useState(false);
  const [activeSubModal, setActiveSubModal] = useState(false);
  const [workStatus, setWorkStatus] = useState("pre");
  return (
    <>
      <div
        className="TodoWorkBox"
        onClick={() => {
          workStatus === "pre"
            ? setActiveMainModal(true)
            : setActiveSubModal(true);
        }}
      >
        <ion-icon
          name="checkmark-circle"
          style={
            workStatus == "proceeding"
              ? check_icon_style_proceeding
              : check_icon_style_default
          }
        ></ion-icon>
        <div className="todo_text ml2">
          <div className="boldTxt ftSm">{props.todoWorkName}</div>
          <div className="grayText ftXsm mt1">오늘 오후 9시까지</div>
        </div>
        <div className="todo_avatars">
          <Avatar userImage="/img/dummy_user.jpeg" />
        </div>
      </div>
      <Modal
        className="modal"
        isOpen={activeMainModal}
        onRequestClose={() => setActiveMainModal(false)}
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
            top: "370px",
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
        <img src="/img/mission_photo.png" className="modal_img" />
        <div className="ftM boldTxt textCenter mt4">
          {props.todoWorkName} 미션 클리어!
        </div>
        <div className="ftXSm thinTxt textCenter mt2">
          사진을 찍어 단국대팟 하우스 멤버들에게
          <br /> 미션 클리어 인증을 해보세요!
        </div>
        <div className="modal_buttons mt4">
          <CategoryButton
            borderRadius="10px"
            categoryName="취소"
            isSelected={false}
            onClick={() => setActiveMainModal(false)}
            width="40%"
          ></CategoryButton>
          <CategoryButton
            borderRadius="10px"
            categoryName="사진 인증하기"
            isSelected={false}
            onClick={() => {
              setWorkStatus("proceeding");
              setActiveMainModal(false);
            }}
            activeCamera={true}
            width="40%"
          ></CategoryButton>

          <br />
        </div>
      </Modal>
      <Modal
        className="modal"
        isOpen={activeSubModal}
        onRequestClose={() => setActiveSubModal(false)}
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
            top: "320px",
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
        <img src="/img/mission_check.gif" className="modal_sub_img" />
        <div className="ftM boldTxt textCenter mt3">
          멤버들의 인증을 기다려주세요!
        </div>
        <div className="ftXSm thinTxt textCenter mt2">
          단국대팟 하우스 멤버들 중 한명 이상이 사진을
          <br /> 보고 수행 완료 버튼을 눌러야 미션이 완료돼요.
        </div>
        <div className="modal_buttons mt4">
          <CategoryButton
            borderRadius="10px"
            categoryName="이전 페이지로 돌아가기"
            isSelected={false}
            onClick={() => {
              setActiveSubModal(false);
            }}
            width="80%"
          ></CategoryButton>
        </div>
      </Modal>
    </>
  );
};

export default TodoWorkBox;
