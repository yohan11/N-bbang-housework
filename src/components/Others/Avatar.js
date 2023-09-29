import "./css/Avatar.css";

const Avatar = (props) => {
  const avatarLocation = {
    right: `${props.location * 12}px`,
  };
  return (
    <div className="Avatar" style={avatarLocation}>
      <img src={props.userImage} />
    </div>
  );
};

export default Avatar;
