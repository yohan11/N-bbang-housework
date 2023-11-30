import MainHeader from "../components/Headers/MainHeader";
import "./css/Common.css";
import "./css/MyPage.css";
import NavBar from "../components/NavBar";
import React from "react";
import Profile from "../components/MyPage/Profile";
import MyPageInfo from "../components/MyPage/MyPageInfo";
import MyPageList from "../components/MyPage/MyPageList";

const MyPage = () => {

  return (
    <div className="title-top-bar">
      <MainHeader pageName="마이페이지"/>
      <Profile name="구지원" email="itkoo@kakao.com" imageUrl="https://avatars.githubusercontent.com/u/31758135?v=4"/>
      <hr/>
      <MyPageInfo points="0" registrationCount="0" achievementRate="0"/>
      <hr className="thick-hr"/>
      <MyPageList/>
      <NavBar className="nav"/>
    </div>
  );
};

export default MyPage;
