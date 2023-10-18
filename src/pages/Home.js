import MainHeader from "../components/Headers/MainHeader";
import "./css/Home.css";
import GroupThumbnailBox from "../components/Boxes/GroupThumbnailBox";
import TodoWorkBox from "../components/Boxes/TodoWorkBox";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Calander from "../components/Others/Calander";
import React from "react";

const Home = () => {
  const houseNameList = ["단국대팟", "본가"];
  const todoWorkList = ["설거지", "분리수거", "빨래", "빨래 건조"];

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
