import ".//css/Intro.css";
import BottomButton from "../components/Buttons/BottomButton";

const Intro = () => {
  const btnClick = () => {
    console.log("login!");
  };

  return (
    <>
      <img className="background_img" src="/img/Intro_img.png" />
      <BottomButton
        text="카카오로 로그인"
        backgroundColor="#FEE20B"
        textColor="black"
        imgSrc="/img/kakao_logo.png"
        onClick={btnClick}
      />
    </>
  );
};

export default Intro;
