import React, { useState } from "react";
import "./css/AddWork.css";
import MainHeader from "../components/Headers/MainHeader";
import CategoryButton from "../components/Buttons/CategoryButton";
import NavBar from "../components/NavBar";
import BottomButton from "../components/Buttons/BottomButton";

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
          <div className="boldTxt ftM mt4">카테고리</div>
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
          <div className="boldTxt ftM mt4">날짜 및 시간</div>
          <input type="date" data-placeholder={todayStr} />
          <div className="displayFlex mt2">
            <div className="regularTxt">매일 반복해요</div>
            <span className="check">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1"></label>
            </span>
          </div>
          <div className="displayFlex mt1">
            <div className="regularTxt">매주 반복해요</div>
            <span className="check">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1"></label>
            </span>
          </div>
        </div>
        <div className="mt4">
          <div className="time_title displayFlex">
            <div className="boldTxt ftM ">마감 시간</div>
            <span className="wrapper">
              <input type="checkbox" id="switch" />
              <label htmlFor="switch" className="switch_label">
                <span className="onf_btn"></span>
              </label>
            </span>
          </div>
          <input type="time" className="regularTxt ftXSm" />
        </div>
        <div>
          <div className="boldTxt ftM mt4">설명</div>
          <textarea
            className="work_description"
            placeholder="자세하게 쓸 수록 수행률이 높아진다는 사실! &#13;&#10;ex) 1층 아파트 분리수거장에 매주 목요일마다 버릴것!"
          />
        </div>
        <BottomButton
          text="할 일 추가하기"
          backgroundColor="#1FCB53"
          textColor="white"
          borderRadius="15px"
          fontWeight="700"
        />
      </div>
      <NavBar />
    </div>
  );
};

export default AddWork;