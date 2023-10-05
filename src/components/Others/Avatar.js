import "./css/Avatar.css";

const Avatar = (props) => {
  const avatarLocation = {
    right: `${props.location * 12}px`,
  };
  const avater_style = {};
  return (
    <div
      className="Avatar"
      style={props.location ? avatarLocation : avater_style}
    >
      <img src={props.userImage} />
    </div>
  );
};

export default Avatar;
