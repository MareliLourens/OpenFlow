import React from "react";
import style from "./Style.Profile.module.scss";
import TagComponent from "../TagComponent/Component.Tag";
import Star from "../../assets/icons/star.svg";
import StarFill from "../../assets/icons/star-fill.svg";
import ProfileTest from "../../assets/images/profileTest.png";

const ProfileComponent = () => {
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>Your Profile</h2>
      </div>
      <div className={style.content}>
        <div className={style.profileImageSection}>
          <div className={style.profileImage}>
            <img src={ProfileTest} />
          </div>
        </div>
        <div className={style.infoSecion}>
          <div className={style.nameSection}>
            <h1 className={style.title}>CodeArtNerd</h1>
            <p className={style.text}>Upcoming Software Developer</p>
          </div>
          <p>
            Location: <span>Pretoria</span>
          </p>
          <br />
          <p>
            Bio:
            <br />
            🤓 Student at Open Window University, coding enthusiast, and history
            of art aficionado. Learning, coding, and creating art through
            technology.
          </p>
          <div className={style.lineBreak}></div>
          <br />
          <p>Skills:</p>
          <div className={style.tagBox}>
            <TagComponent tag={"JavaScript"} />
            <TagComponent tag={"Teact"} />
            <TagComponent />
            <TagComponent tag={"HTML"} />
          </div>
          <p>Web Development Projects:</p>
          <div className={style.starsContainer}>
            <img src={StarFill} />
            <img src={StarFill} />
            <img src={StarFill} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <div className={style.editBtn}>Edit</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
