import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Style.Profile.module.scss";
import TagComponent from "../TagComponent/Component.Tag";
import Star from "../../assets/icons/star.svg";
import StarFill from "../../assets/icons/star-fill.svg";
import ProfileTest from "../../assets/images/profileTest.png";

const ProfileComponent = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("JWT");
    if (token) {
      axios
        .post("http://localhost:5000/api/verifytoken", { token })
        .then((response) => {
          if (response.data.verified) {
            setUserData(response.data.user);
          } else {
          }
        })
        .catch((error) => {
        });
    }
  }, []);

  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>Your Profile</h2>
      </div>
      <div className={style.content}>
        <div className={style.profileImageSection}>
          <div className={style.profileImage}>
            <img src={userData.profileimage || ProfileTest} alt="Profile" />
          </div>
        </div>
        <div className={style.infoSecion}>
          <div className={style.nameSection}>
            <h1 className={style.title}>{userData.name}</h1>
            <p className={style.text}>{userData.surname}</p>
          </div>
          <p>
            Location: <span>{userData.location}</span>
          </p>
          <br />
          <p>
            Bio:
            <br />
            {userData.bio}
          </p>
          <div className={style.lineBreak}></div>
          <br />
          <p>Skills:</p>
          <div className={style.tagBox}>
            {userData.skills &&
              userData.skills.map((skill, index) => (
                <TagComponent key={index} tag={skill} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;

