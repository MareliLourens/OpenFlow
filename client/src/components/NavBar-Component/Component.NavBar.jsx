import React from "react";
import style from "./Style.NavBar.module.scss";
import logo from "../../assets/images/logo.gif";
import loginIcon from "../../assets/icons/login.svg";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  const user = true;

  return (
    <div className={style.main}>
      <img className={style.logoImg} src={logo} />
      <div className={style.links}>
        <Link to="/"><div className={style.link}>Home</div></Link>
        <Link to="/questions"><div className={style.link}>Questions</div></Link>
        <Link to="/answers"><div className={style.link}>Answers</div></Link>
        <Link to="/support"><div className={style.link}>Support</div></Link>
        {user === true ? (
          <Link to="/profile">
            <div className={style.link}>Profile</div>
          </Link>
        ) : (
          <Link to="/login">
            <div className={style.link}>
              <img className={style.loginIcon} src={loginIcon} />
              Login
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBarComponent;
