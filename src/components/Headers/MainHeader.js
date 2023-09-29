import "./css/MainHeader.css";

const MainHeader = (props) => {
  return (
    <div className="MainHeader">
      <span className="house_info boldTxt ftM mt2">{props.pageName}</span>
      <span>
        <img src="/img/notification_icon.png" />
      </span>
    </div>
  );
};

export default MainHeader;
