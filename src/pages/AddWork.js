import React, { useEffect, useState } from "react";
import "./css/AddWork.css";
import MainHeader from "../components/Headers/MainHeader";
import CategoryButton from "../components/Buttons/CategoryButton";
import BottomButton from "../components/Buttons/BottomButton";
import { api } from "../config";

const AddWork = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [userList, setUserList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const selectedGroupId = sessionStorage.getItem("groupId");

  const date = new Date();
  const dayName = ["일", "월", "화", "수", "목", "금", "토"];
  const todayStr = `${date.getMonth() + 1}월 ${date.getDate()}일 ${
    dayName[date.getDay()]
  }요일`;

  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleUserClick = (idx) => {
    const newSelectedUsers = selectedUsers.includes(idx)
      ? selectedUsers.filter((userIdx) => userIdx !== idx)
      : [...selectedUsers, idx];

    setSelectedUsers(newSelectedUsers);
  };

  useEffect(() => {
    fetch(api.HOUSEWORK_CATEGORY_GET_API)
      .then((res) => {
        if (!res.ok) {
          throw new Error("API 요청 실패");
        }
        return res.json();
      })
      .then((json) => {
        let categorys = [];
        json.resObj.map((item) => categorys.push(item["name"]));
        setCategoryList(categorys);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);

  useEffect(() => {
    fetch(api.HOUSEWORK_MANAGER_GET_API + selectedGroupId, {
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
        if (json && json["resObj"]) {
          // null 또는 undefined가 아닌지 확인
          var users = [];
          json["resObj"].map((item) => users.push(item["username"]));
          setUserList(users);
        }
      });
  }, []);

  const addWork = () => {
    fetch(api.ADD_WORK_POST_API + selectedGroupId, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken} ${refreshToken}`,
      },
      body: {
        groupMemberIdList: [0],
        houseworkCategoryId: 0,
        title: "string",
        detail: "string",
        type: "HOUSEWORK_PERIOD_DAY",
        dayDate: "2023-11-08",
        weekDate: "7",
        monthDate: "0000000000000000000000001",
        endTime: {
          hour: 0,
          minute: 0,
          second: 0,
          nano: 0,
        },
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
      });
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
                borderRadius="13px"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="boldTxt ftM mt4">담당자</div>
          <div className="category_boxes mt2">
            {userList &&
              userList.map((item, idx) => (
                <CategoryButton
                  key={idx}
                  categoryName={item}
                  isSelected={selectedUsers.includes(idx)}
                  onClick={() => handleUserClick(idx)}
                  borderRadius="30px"
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
          onClick={addWork}
        />
      </div>
    </div>
  );
};

export default AddWork;
