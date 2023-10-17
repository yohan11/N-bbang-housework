import "./css/Avatar.css";

const Avatar = (props) => {
  const avatar_location = {
    right: `${props.location * 12}px`,
  };
  const avatar_style = {};
  return (
    <div
      className="Avatar"
      style={props.location ? avatar_location : avatar_style}
    >
      <img src={props.userImage} />
    </div>
  );
};

export default Avatar;
