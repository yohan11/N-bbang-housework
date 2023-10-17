import "./css/TodoWorkBox.css";
import Avatar from "../Others/Avatar";
import { useState } from "react";
import MainModal from "../Others/MainModal";

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

      <MainModal
        activeModal={activeMainModal}
        onRequestCloseFunc={() => setActiveMainModal(false)}
        modalTop="30%"
        titleText={props.todoWorkName + " 미션 클리어!"}
        contentText={
          <div>
            사진을 찍어 단국대팟 하우스 멤버들에게
            <br />
            미션 클리어 인증을 해보세요!
          </div>
        }
        twoBtn={true}
        firstBtnText="취소"
        firstBtnOnClick={() => setActiveMainModal(false)}
        secondBtnText="사진 인증하기"
        secondBtnOnClick={() => {
          setWorkStatus("proceeding");
          setActiveMainModal(false);
        }}
        activeCamera={true}
      />
      <MainModal
        activeModal={activeSubModal}
        onRequestCloseFunc={() => setActiveSubModal(false)}
        modalTop="25%"
        titleText="멤버들의 인증을 기다려주세요!"
        contentText={
          <div>
            단국대팟 하우스 멤버들 중 한명 이상이 사진을
            <br />
            보고 수행 완료 버튼을 눌러야 미션이 완료돼요.
          </div>
        }
        twoBtn={false}
        BtnText="이전 페이지로 돌아가기"
        BtnOnClick={() => setActiveSubModal(false)}
        activeCamera={false}
      />
    </>
  );
};

export default TodoWorkBox;
