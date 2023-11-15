import "../../pages/css/GiftBox.css";
import "../../pages/css/Common.css";
import React from "react";

const Gift = ({props}) => {
  return (
    <div className="gift">
      <img src={props.imgUrl} alt=""/><br/>
      <p className="title">{props.name}</p>
      <p className="description">
        <ion-icon name="paw"></ion-icon>
        {props.price}
      </p>
    </div>
  );
};

export default Gift;
