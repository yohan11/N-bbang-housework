import MainHeader from "../components/Headers/MainHeader";
import NavBar from "../components/NavBar";
import Calander from "../components/Others/Calander";
import "./css/WorkList.css";
import TodoWorkBox from "../components/Boxes/TodoWorkBox";
import NoticeBox from "../components/Boxes/NoticeBox";
import React, { useState } from "react";
import MainModal from "../components/Others/MainModal";

const WorkList = () => {
  const todoWorkList = ["설거지", "분리수거", "빨래", "빨래 건조"];

  const [activeConfirmModal, setActiveConfirmModal] = useState(false);
  const [noticeHidden, setNoticehidden] = useState(false);
  return (
    <div className="WorkList">
      <MainHeader pageName="할 일 목록" />
      <Calander />
      <div className="mt2">
        {todoWorkList.map((item, idx) => (
          <TodoWorkBox todoWorkName={item} />
        ))}
      </div>
      <NoticeBox
        onClick={() => {
          setActiveConfirmModal(true);
          setNoticehidden(true);
        }}
        hidden={noticeHidden}
      />
      <MainModal
        activeModal={activeConfirmModal}
        onRequestCloseFunc={() => setActiveConfirmModal(false)}
        modalTop="30%"
        isPreviewImg={true}
        modalImage="/img/mission_photo.png"
        titleText={`${"준영"}님이 ${"수건개기"}를 완료했어요!`}
        contentText={
          <div>
            잘 수행 했다면 인증 완료,
            <br />
            제대로 되어있지 않다면 취소 버튼을 눌러주세요.
          </div>
        }
        twoBtn={true}
        firstBtnText="취소"
        firstBtnOnClick={() => setActiveConfirmModal(false)}
        secondBtnText="인증완료"
        secondBtnOnClick={() => {
          setActiveConfirmModal(false);
        }}
      />
      <NavBar />
    </div>
  );
};

export default WorkList;
