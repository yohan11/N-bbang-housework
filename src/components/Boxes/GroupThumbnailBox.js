import "./css/GroupThumbnailBox.css";
import Avatar from "../Others/Avatar";

const GroupThumbnailBox = (props) => {
  const avatarId = [0, 1, 2, 3, 4];
  const avatarImage = [
    "/img/dummy_user.jpeg",
    "/img/dummy_user.jpeg",
    "/img/dummy_user.jpeg",
    "/img/dummy_user.jpeg",
    "/img/add-member_icon.png",
  ];
  const progress_bar_width = {
    width: `${props.progressStatus}%`,
  };
  const group_image = {
    background: `url(${props.groupImage}) no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <div className="GroupThumbnailBox mr2" style={group_image}>
      <span className="boldTxt whiteTxt ftM">{props.groupName} 하우스</span>
      <span className="regularTxt whiteTxt ftSm mt1">
        3개의 할일이 남아 있어요!
      </span>
      <div className="displayFlex">
        <div className="avatars">
          {avatarId.map((item, idx) => (
            <Avatar location={item} userImage={avatarImage[idx]} />
          ))}
        </div>
        <div className="progress boldTxt whiteTxt ft2Xsm">
          <div className="progress_text">
            <span>Progress</span>
            <span className="textLeft">{props.progressStatus}%</span>
          </div>
          <div className="progress_bar_background">
            <div className="progress_bar" style={progress_bar_width}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupThumbnailBox;
