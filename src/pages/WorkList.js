import MainHeader from "../components/Headers/MainHeader";
import NavBar from "../components/NavBar";
import Calander from "../components/Others/Calander";
import "./css/WorkList.css";
import TodoWorkBox from "../components/Boxes/TodoWorkBox";
import NoticeBox from "../components/Boxes/NoticeBox";

const WorkList = () => {
  const todoWorkList = ["설거지", "분리수거", "빨래", "빨래 건조"];
  return (
    <div className="WorkList">
      <MainHeader pageName="할 일 목록" />
      <Calander />
      <div className="mt2">
        {todoWorkList.map((item, idx) => (
          <TodoWorkBox todoWorkName={item} />
        ))}
      </div>
      <NoticeBox />
      <NavBar />
    </div>
  );
};

export default WorkList;
