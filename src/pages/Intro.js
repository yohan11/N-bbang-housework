import "./css/Intro.css";
import BottomButton from "../components/Buttons/BottomButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Intro = () => {
  const [kakaoLoginUrl, setKakaoLoginUrl] = useState();
  const [naverLoginUrl, setNaverLoginUrl] = useState();
  const [isKakaoButtonActive, setIsKakaoButtonActive] = useState(true);
  const [isNaverButtonActive, setIsNaverButtonActive] = useState(true);

  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [loginPlatform, setLoginPlatform] = useState();
  const [userRole, setUserRole] = useState();

  const navigate = useNavigate();
  const loginPath = useLocation();

  // 페이지 로드 시 카카오, 네이버 로그인 URL을 받아옵니다.
  useEffect(() => {
    fetch("https://jubujob.com/auth/KAKAO/loginPage")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API 요청 실패");
        }
        return res.json();
      })
      .then((json) => {
        setKakaoLoginUrl(json.resObj);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
        setIsKakaoButtonActive(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://jubujob.com/auth/NAVER/loginPage")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API 요청 실패");
        }
        return res.json();
      })
      .then((json) => {
        setNaverLoginUrl(json.resObj);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
        setIsNaverButtonActive(false);
      });
  }, []);

  // 각 버튼 클릭 시 저장되어 있는 로그인 URL로 접속합니다.
  const kakao_login = () => {
    window.location.href = kakaoLoginUrl;
  };

  const naver_login = () => {
    window.location.href = naverLoginUrl;
  };

  // 로그인 시 code와 state값을 추출합니다.
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get("code");
    const stateParam = urlParams.get("state");

    if (codeParam && stateParam) {
      if (loginPath.pathname.includes("KAKAO")) setLoginPlatform("KAKAO");
      else if (loginPath.pathname.includes("NAVER")) setLoginPlatform("NAVER");
      setCode(codeParam);
      setState(stateParam);
    }
  }, []);

  // code와 state값이 올바르게 저장되었을 경우 api를 호출하여 토큰을 받아와 세션 스토리지에 저장합니다.
  useEffect(() => {
    if (code && state) {
      fetch(
        `https://jubujob.com/auth/${loginPlatform}/login?code=${code}&state=${state}`,
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("API 요청 실패");
          }
          return res.json();
        })
        .then((json) => {
          sessionStorage.setItem(
            "accessToken",
            JSON.stringify(json.resObj.accessToken),
          );
          sessionStorage.setItem(
            "refreshToken",
            JSON.stringify(json.resObj.refreshToken),
          );
          setUserRole(json.resObj.role);
        })
        .catch((error) => {
          console.error("API 요청 중 오류 발생:", error);
        });
    }
  }, [code, state]);

  // 받아온 응답 값 내 user의 역할에 따라 다른 페이지로 이동합니다.
  useEffect(() => {
    if (userRole === "UNAUTH") {
      navigate("/signup");
    } else if (userRole === "AUTH") {
      navigate("/main");
    }
  }, [userRole]);

  return (
    <div className="Intro">
      <div className="loginButtons">
        <BottomButton
          text="카카오로 로그인"
          backgroundColor="#FEE20B"
          textColor="black"
          imgSrc="/img/kakao_logo.png"
          onClick={kakao_login}
          buttonActive={isKakaoButtonActive}
        />
        <BottomButton
          text="네이버로 로그인"
          backgroundColor="#03c73c"
          textColor="white"
          imgSrc="/img/naver_logo.png"
          onClick={naver_login}
          buttonActive={isNaverButtonActive}
        />
      </div>
    </div>
  );
};

export default Intro;
