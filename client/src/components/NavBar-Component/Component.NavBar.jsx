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
        <div className={style.link}>Home</div>
        <div className={style.link}>Questions</div>
        <div className={style.link}>Answers</div>
        <div className={style.link}>Support</div>
        <Link to="/profile">
          <div className={style.link}>
            {user === true ? (
              "Profile"
            ) : (
              <>
                <img className={style.loginIcon} src={loginIcon} />
                Login
              </>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBarComponent;
