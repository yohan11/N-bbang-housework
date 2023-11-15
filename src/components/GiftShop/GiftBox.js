import "../../pages/css/GiftBox.css";
import "../../pages/css/Common.css";
import React from "react";
import Gift from "./Gift";

const GiftBox = () => {
  const giftExample = [
    {imgUrl: "https://www.spcmagazine.com/wp-content/uploads/2023/10/1000_16.jpg", name: "티니핑 말랑 크로스백", price: 12000},
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_bQmkjPSJHS-AvjzyOmk--_WLYRtCnmgL9ruJ9TUZAhr_z0oz-hY8JYb5r25bgUDs2o&usqp=CAU",
      name: "캐치티니핑 피규어",
      price: 7000
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TG3xr_PHr6_RDkL5kbc-KYVm2xznIAL8nwKtAOh27I4u2e1cU5yz-0aqnsjWogHJW9A&usqp=CAU",
      name: "하츄핑 봉제인형",
      price: 24000
    },
  ]
  return (
    <div className="gift-box">
      <Gift props={giftExample.at(0)}/>
      <Gift props={giftExample.at(1)}/>
    </div>
  );
};

export default GiftBox;
