import React from "react";
import style from "./Style.NavBar.module.scss";
import logo from "../../assets/images/logo.gif";

const NavBarComponent = () => {
  return (
    <div className={style.main}>
      <img className={style.logoImg} src={logo}/>
      <div className={style.links}>
        <div className={style.link}>Home</div>
        <div className={style.link}>Questions</div>
        <div className={style.link}>Answers</div>
        <div className={style.link}>Support</div>
        <div className={style.link}>Profile</div>

      </div>
    </div>
  );
};

export default NavBarComponent;
