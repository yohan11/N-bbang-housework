import "./css/NoticeBox.css";

const NoticeBox = (props) => {
  const notice_icon_style = {
    fontSize: "36px",
    color: "white",
  };
  const notice_hidden = {
    display: "none",
  };
  const notice_show = {};
  return (
    <div
      className="NoticeBox"
      onClick={props.onClick}
      style={props.hidden ? notice_hidden : notice_show}
    >
      <ion-icon name="notifications" style={notice_icon_style}></ion-icon>
      <div className="ml2">
        <div className="ftSm regularTxt whiteTxt">
          준영님이 설거지를 완료했어요!
        </div>
        <div className="notice_subtxt ftXsm thinTxt whiteTxt ">
          제대로 했는지 확인하러 가볼까요?
        </div>
      </div>
    </div>
  );
};
export default NoticeBox;
