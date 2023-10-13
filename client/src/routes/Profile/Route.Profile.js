import React from "react";
import style from "./Style.Profile.module.scss"; 
import loginLogo from "../../assets/images/Login-Logo.svg";

const ProfileRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.loginBlock}>
        <div className={style.topSection}>
        </div>
        <div className={style.formContainer}>
          <form className={[style.form1, style.form2].join(" ")}>


            <h2>Create an account</h2>
            <h3>Fill in the details to get started</h3> <br></br>
            <p>First Name</p>
            <input
              placeholder="Enter your First Name"
              className={style.input}
            ></input>
            <p>Surname</p>
            <input
              placeholder="Enter your Surname"
              className={style.input}
            ></input>
            <p>Your Email</p>
            <input
              placeholder="Enter your Email"
              className={style.input}
            ></input>
            <p className={style.align}>Your Password</p>
            <input
              placeholder="Enter your Password"
              className={style.input}
            ></input>
            <button className={style.button}>Sign Up!</button>
          </form>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img
          src={loginLogo}
          alt="Login Image"
          className={style.image}
        />
      </div>
    </div>
  );
};

export default ProfileRoute;
