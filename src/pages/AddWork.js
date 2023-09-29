import React, { useState } from "react";
import "./css/AddWork.css";
import MainHeader from "../components/Headers/MainHeader";
import CategoryButton from "../components/Buttons/CategoryButton";
import NavBar from "../components/NavBar";

const AddWork = () => {
  const categoryList = ["집안일", "집 밖의 일", "돌봄", "기타", "기타2"];

  const [selectedCategory, setSelectedCategory] = useState("");

  const date = new Date();
  const dayName = ["일", "월", "화", "수", "목", "금", "토"];
  const todayStr = `${date.getMonth() + 1}월 ${date.getDate()}일 ${
    dayName[date.getDay()]
  }요일`;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="AddWork">
      <MainHeader pageName="할 일 추가" />
      <div className="AddContents mt3">
        <div>
          <div className="boldTxt ftM">이름</div>
          <input type="text" placeholder="분리수거" />
        </div>
        <div>
          <div className="boldTxt ftM ">카테고리</div>
          <div className="category_boxes mt2">
            {categoryList.map((item, idx) => (
              <CategoryButton
                key={idx}
                categoryName={item}
                isSelected={selectedCategory === item}
                onClick={() => handleCategoryClick(item)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="boldTxt ftM mt3">날짜 및 시간</div>
          <input type="date" data-placeholder={todayStr} />
          <div className="displayFlex">
            <div className="regularTxt">매일 반복해요</div>
            <input type="checkbox" />
          </div>
          <div className="displayFlex">
            <div className="regularTxt">매주 반복해요</div>
            <input type="checkbox" />
          </div>
        </div>
        <div>
          <div className="boldTxt ftM">마감 시간</div>
          <input type="text" />
        </div>
        <div>
          <div className="boldTxt ftM">설명</div>
          <input type="text" />
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default AddWork;
