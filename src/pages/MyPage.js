import MainHeader from "../components/Headers/MainHeader";
import "./css/Common.css";
import "./css/MyPage.css";
import NavBar from "../components/NavBar";
import React from "react";

const MyPage = () => {

  return (
    <div className="title-top-bar">
      <MainHeader pageName="마이페이지"/>

      <div className="profile">
        <img src="https://avatars.githubusercontent.com/u/31758135?v=4" alt=""/>
        <div className="profile-description">
          <p className="name">구지원</p>
          <p className="email">itkoo@kakao.com</p>
        </div>
      </div>
      <hr/>
      <div className="mypage-info">
        <div className="info">
          <p className="title">0P</p>
          <p className="description">포인트</p>
        </div>
        <div className="info">
          <p className="title">3번</p>
          <p className="description">등록 건수</p>
        </div>
        <div className="info">
          <p className="title">80%</p>
          <p className="description">달성률</p>
        </div>
      </div>
      <hr className="thick-hr"/>
      <div className="mypage-list">
        <p className="title">추천 활동</p>
        <ul>
          <li>
            <img src="/img/3d-icon/user.png" alt=""/>
            <span>내 정보 수정</span>
          </li>
          <li>
            <img src="/img/3d-icon/message.png" alt=""/>
            <span>그룹 가입</span>
          </li>
          <li>
            <img src="/img/3d-icon/cart.png" alt=""/>
            <span>위시리스트</span>
          </li>
          <li>
            <img src="/img/3d-icon/home.png" alt=""/>
            <span>그룹 탈퇴</span>
          </li>
        </ul>
      </div>

      <NavBar className="nav"/>
    </div>
  );
};

export default MyPage;
