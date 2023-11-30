import React from 'react';

const MyPageInfo = ({points, registrationCount, achievementRate}) => {
  return (
    <div className="mypage-info">
      <div className="info">
        <p className="title">{points}P</p>
        <p className="description">포인트</p>
      </div>
      <div className="info">
        <p className="title">{registrationCount}번</p>
        <p className="description">등록 건수</p>
      </div>
      <div className="info">
        <p className="title">{achievementRate}%</p>
        <p className="description">달성률</p>
      </div>
    </div>
  );
};

export default MyPageInfo;
