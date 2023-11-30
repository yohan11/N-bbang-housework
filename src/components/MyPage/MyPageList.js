import React from 'react';

const MyPageList = () => {
  return (
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
  );
};

export default MyPageList;