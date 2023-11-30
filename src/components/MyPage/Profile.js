import React, {useEffect, useState} from 'react';
import {api} from "../../config";
import {getAuthorizationHeader} from "../../common";

const Profile = ({name, email, imageUrl}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    imageUrl: '/img/user_icon.jpeg', // 기본 이미지
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(api.USER_INFO_API, {
          headers: getAuthorizationHeader(),
        });
        const data = await response.json();

        setUser({
          name: data.resObj.name,
          email: data.resObj.email,
          imageUrl: data.resObj.profileImageUrl || user.imageUrl,
        });
      } catch (error) {
        console.log(error);
      }
    };
    // 호출
    fetchUserData();
  }, []);
  return (
    <div className="profile">
      <img src={user.imageUrl} alt=""/>
      <div className="profile-description">
        <p className="name">{user.name}</p>
        <p className="email">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
