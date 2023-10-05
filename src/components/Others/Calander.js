import { useEffect, useState } from "react";
import DateBox from "../Boxes/DateBox";

const Calander = () => {
  const date = new Date();
  const todayDate =
    String(date.getDate()).length === 1 ? "0" + date.getDate() : date.getDate();
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
  );
};
export default Calander;
