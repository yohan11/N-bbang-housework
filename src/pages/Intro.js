import ".//css/Intro.css";
import BottomButton from "../components/Buttons/BottomButton";
import { useEffect, useState } from "react";

const Intro = () => {
  const [kakaoLoginUrl, setKakaoLoginUrl] = useState();
  const [naverLoginUrl, setNaverLoginUrl] = useState();
  const [isKakaoButtonActive, setIsKakaoButtonActive] = useState(true);
  const [isNaverButtonActive, setIsNaverButtonActive] = useState(true);

  // 페이지 로드 시 카카오, 네이버 로그인 URL을 받아옵니다
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

  return (
    <>
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
    </>
  );
};

export default Intro;
