import MainHeader from "../components/Headers/MainHeader";
import NavBar from "../components/NavBar";
import Calander from "../components/Others/Calander";
import "./css/WorkList.css";
import TodoWorkBox from "../components/Boxes/TodoWorkBox";
import NoticeBox from "../components/Boxes/NoticeBox";
import React, { useEffect, useState } from "react";
import MainModal from "../components/Others/MainModal";
import { api } from "../config";

const WorkList = () => {
  const [todoWorkList, setTodoWorkList] = useState([]);

  const [activeConfirmModal, setActiveConfirmModal] = useState(false);
  const [noticeHidden, setNoticehidden] = useState(false);

  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  useEffect(() => {
    fetch(`${api.TODO_GET_API + "1"}?date=${"2023-11-16"}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken} ${refreshToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setTodoWorkList(json["resObj"]["todoList"]);
      });
  }, []);

  return (
    <div className="WorkList">
      <MainHeader pageName="할 일 목록" />
      <Calander />
      <div className="mt2">
        {todoWorkList.map((item, idx) => (
          <TodoWorkBox todoWorkName={item["title"]} />
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
        modalImage="/img/dummy_todo.png"
        titleText={`${"준영"}님이 ${"설거지"}를 완료했어요!`}
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
