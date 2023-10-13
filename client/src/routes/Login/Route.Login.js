import React, { useState } from "react";
import style from "./Style.Login.module.scss";
import loginLogo from "../../assets/images/Login-Logo.svg";

const LoginRoute = () => {
  const [signOption, setSignOption] = useState("signIn");

  return (
    <div className={style.main}>
      <div className={style.loginBlock}>
        <div className={style.formContainer}>
          {signOption === "signIn" ? (
            <form className={style.form1}>
              <div className={style.centered}>
                <h2>Welcome</h2>
                <h3 className={style.centered} style={{ marginBottom: "10px" }}>Login to continue</h3>
              </div>
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
              <div className={style.dFlex}>
                <div className={style.formCheck}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="d-flex"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="d-flex"
                  >
                    Remember password
                  </label>
                </div>


                
                <a href="#" className={style.link}>
                  Forgot Password
                </a>
              </div>
              <button className={style.button}>Submit</button>
            </form>
          ) : (
            <form className={[style.form1, style.form2].join(" ")}>
          
              
  
            </form>
          )}
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

export default LoginRoute;
