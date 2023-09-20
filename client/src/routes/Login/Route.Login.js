import React from "react";
import style from "./Style.Login.module.scss";

const LoginRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.loginBlock}>
        <div className={style.topSection}>
          <div className={style.signOpt}>
            Sign Up
          </div>
          <div className={[style.signOpt, style.signOpt2].join(' ')}>
            Sign In
          </div>
        </div>
        <div className={style.form}>
          <p>Your Email</p>
          <input placeholder="Enter your Email" className={style.input}></input>
          <p>Your Password</p>
          <input placeholder="Enter your Password" className={style.input}></input>
          <button className={style.button}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LoginRoute;
