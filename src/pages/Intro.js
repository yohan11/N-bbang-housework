import ".//css/Intro.css";
import BottomButton from "../components/Buttons/BottomButton";

const Intro = () => {
  const kakao_login = () => {
    console.log("kakao login!");
  };

  const naver_login = () => {
    console.log("naver login!");
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
        />
        <BottomButton
          text="네이버로 로그인"
          backgroundColor="#03c73c"
          textColor="white"
          imgSrc="/img/naver_logo.png"
          onClick={naver_login}
        />
      </div>
    </>
  );
};

export default Intro;
