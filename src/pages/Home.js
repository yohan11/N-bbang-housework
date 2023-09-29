import MainHeader from "../components/Headers/MainHeader";
import DateBox from "../components/Boxes/DateBox";
import "./css/Home.css";
import GroupThumbnailBox from "../components/Boxes/GroupThumbnailBox";
import { useEffect, useState } from "react";
import TodoWorkBox from "../components/Boxes/TodoWorkBox";
import NavBar from "../components/NavBar";

const Home = () => {
  const houseNameList = ["단국대팟", "본가"];
  const date = new Date();
  const todayDate = date.getDate();
  const dayName = ["일", "월", "화", "수", "목", "금", "토"];

  const [thisWeek, setThisWeek] = useState([]);

  // 이번주 날짜들을 가져와서 저장합니다.
  useEffect(() => {
    var date_list = [];

    for (var i = 0; i < 7; i++) {
      var resultDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + (i - date.getDay()),
      );

      var dd = resultDay.getDate();

      dd = String(dd).length === 1 ? "0" + dd : dd;

      date_list[i] = dd;
    }

    setThisWeek(date_list);
  }, []);

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
        <div className="time_table mt3">
          <span className="ftM boldTxt ">{date.getMonth() + 1}월</span>
          <div className="date_boxes mt1">
            {dayName.map((item, idx) => (
              <DateBox
                selected={thisWeek[idx] === todayDate ? true : false}
                dayNum={thisWeek[idx]}
                dayName={item}
              />
            ))}
          </div>
        </div>
        <div className="todo_list mt3">
          <div className="todo_list_title">
            <span className="ftM boldTxt">오늘의 할일</span>
            <span className="ftXsm regularTxt grayText">전체보기</span>
          </div>
          <div className="mt2">
            <TodoWorkBox />
            <TodoWorkBox />
            <TodoWorkBox />
            <TodoWorkBox />
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
