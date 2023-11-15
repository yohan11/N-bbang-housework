import MainHeader from "../components/Headers/MainHeader";
import "./css/Common.css";
import "./css/GiftBox.css";
import NavBar from "../components/NavBar";
import React from "react";
import GiftBox from "../components/GiftShop/GiftBox";

const GiftShop = () => {

  return (
    <div className="title-top-bar">
      <MainHeader pageName="기프트샵"/>
      <GiftBox/>
      <GiftBox/>
      <GiftBox/>
      <GiftBox/>
      <NavBar className="nav"/>
    </div>
  );
};

export default GiftShop;
