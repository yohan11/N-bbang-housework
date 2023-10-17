import "./css/TodoWorkBox.css";
import Avatar from "../Others/Avatar";
import React, { useRef, useState } from "react";
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

  const [activeStartConfirmModal, setActiveStartConfirmModal] = useState(false);
  const [activeWaitingConfirmModal, setActiveWaitingConfirmModal] =
    useState(false);
  const [activeCheckPhotoModal, setActiveCheckPhotoModal] = useState(false);
  const [workStatus, setWorkStatus] = useState("pre");

  const inputRef = useRef(null);

  // 사진 인증 버튼 클릭 시 input이 동작하도록 합니다.
  const buttonCameraActive = () => {
    if (inputRef.current) {
      inputRef.current.click();
      console.log("HI");
    }
  };

  const [imgFile, setImgFile] = useState(null);

  // 미션 인증 사진을 업로드 할 시 미리보기 기능을 지원합니다.
  const handleInputChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImgFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    setActiveCheckPhotoModal(true);
  };
  return (
    <>
      <div
        className="TodoWorkBox"
        onClick={() => {
          workStatus === "pre"
            ? setActiveStartConfirmModal(true)
            : setActiveWaitingConfirmModal(true);
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
        activeModal={activeStartConfirmModal}
        onRequestCloseFunc={() => setActiveStartConfirmModal(false)}
        modalTop="30%"
        isPreviewImg={false}
        modalImage="/img/mission_photo.png"
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
        firstBtnOnClick={() => setActiveStartConfirmModal(false)}
        secondBtnText="사진 인증하기"
        secondBtnOnClick={() => {
          buttonCameraActive();
          if (imgFile) {
            setActiveCheckPhotoModal(true);
          }
        }}
      />
      <input
        ref={inputRef}
        className="CategoryBox regularTxt ftSm hidden"
        type="file"
        id="camera"
        name="camera"
        capture="camera"
        accept="image/*"
        onChange={handleInputChange}
      />
      <MainModal
        activeModal={activeWaitingConfirmModal}
        onRequestCloseFunc={() => setActiveWaitingConfirmModal(false)}
        modalTop="25%"
        isPreviewImg={false}
        modalImage="/img/mission_check.gif"
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
        BtnOnClick={() => setActiveWaitingConfirmModal(false)}
      />
      <MainModal
        activeModal={activeCheckPhotoModal}
        onRequestCloseFunc={() => setActiveCheckPhotoModal(false)}
        modalTop="30%"
        modalImage={imgFile}
        isPreviewImg={true}
        titleText="인증 사진을 확인해주세요"
        contentText="정말 이 사진으로 미션 인증을 진행할까요?"
        twoBtn={true}
        firstBtnText="다른 사진 찍기"
        firstBtnOnClick={() => buttonCameraActive()}
        secondBtnText="확인"
        secondBtnOnClick={() => {
          setWorkStatus("proceeding");
          setActiveStartConfirmModal(false);
          setActiveCheckPhotoModal(false);
        }}
      />
    </>
  );
};

export default TodoWorkBox;
