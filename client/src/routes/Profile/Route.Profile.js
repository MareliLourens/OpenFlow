import React from "react";
import style from "./Style.Profile.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";

const ProfileRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> Profile </h1>
      </div>
    </div>
  );
};

export default ProfileRoute;
