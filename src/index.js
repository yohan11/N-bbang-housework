import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AddWork from "./pages/AddWork";
import WorkList from "./pages/WorkList";
import GiftShop from "./pages/GiftShop";
import MyPage from "./pages/MyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route exact path="KAKAO/login" element={<App/>}/>
      <Route path="signup" element={<SignUp/>}></Route>
      <Route path="home" element={<Home/>}></Route>
      <Route path="add-work" element={<AddWork/>}></Route>
      <Route path="work-list" element={<WorkList/>}></Route>
      <Route path="gift-shop" element={<GiftShop/>}></Route>
      <Route path="mypage" element={<MyPage/>}></Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
