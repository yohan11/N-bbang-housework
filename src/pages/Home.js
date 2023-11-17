import MainHeader from "../components/Headers/MainHeader";
import "./css/Home.css";
import GroupThumbnailBox from "../components/Boxes/GroupThumbnailBox";
import TodoWorkBox from "../components/Boxes/TodoWorkBox";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Calander from "../components/Others/Calander";
import React, { useEffect, useState } from "react";
import MainModal from "../components/Others/MainModal";
import { api } from "../config";

const Home = () => {
  const houseNameList = ["단국대팟", "본가"];
  const todoWorkList = ["설거지", "분리수거", "빨래", "빨래 건조"];
  const [activeGroupAddModal, setActiveGroupAddModal] = useState(false);

  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  const [joinCode, setJoinCode] = useState("");
  const groupId = "1";
  const handleInputChange = (event) => {
    setJoinCode(event.target.value);
  };

  useEffect(() => {
    fetch(api.GROUP_INFO_GET_API, {
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
        console.log(json);
      });
  }, []);

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
        console.log(json);
      });
  }, []);

  const joinGroup = (joinCode) => {
    fetch(`${api.GROUP_JOIN_API}?joinCode=${joinCode}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken} ${refreshToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json["resObj"] === null) {
          alert("그룹 코드가 올바르지 않습니다.");
        } else {
          alert(`${"그룹명"}에 오신것을 환영합니다!`);
          setActiveGroupAddModal(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Home">
      <MainHeader pageName="Home" />
      <div className="MainContent mt3">
        <div className="group_boxes displayFlex">
          <GroupThumbnailBox
            groupName={"단국대팟"}
            groupImage={
              "https://github.com/yohan11/N-bbang-housework/assets/40304565/54999589-50e0-4fc5-8097-f109e171d024"
            }
            progressStatus={52}
          />
          <GroupThumbnailBox
            groupName={"엄마아빠집"}
            groupImage={
              "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
            }
            progressStatus={70}
          />
          <div
            className="groupAddBox"
            onClick={() => setActiveGroupAddModal(true)}
          >
            +
          </div>
          <MainModal
            activeModal={activeGroupAddModal}
            onRequestCloseFunc={() => setActiveGroupAddModal(false)}
            modalTop="65%"
            isPreviewImg={false}
            titleText={`그룹의 코드를 입력해주세요`}
            contentText={
              <input
                type="text"
                className="inputGroupCode"
                onChange={handleInputChange}
              ></input>
            }
            twoBtn={true}
            firstBtnText="취소"
            firstBtnOnClick={() => setActiveGroupAddModal(false)}
            secondBtnText="완료"
            secondBtnOnClick={() => {
              joinGroup(joinCode);
            }}
          />
        </div>
        <Calander />
        <div className="todo_list mt3">
          <div className="todo_list_title">
            <span className="ftM boldTxt">오늘의 할일</span>
            <Link to="/work-list" style={{ textDecoration: "none" }}>
              <span className="ftXsm regularTxt grayText">전체보기</span>
            </Link>
          </div>
          <div className="mt2">
            {todoWorkList.map((item, idx) => (
              <TodoWorkBox todoWorkName={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="nav">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
