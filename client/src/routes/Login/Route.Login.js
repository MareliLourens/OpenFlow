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
              <h2>Welcome</h2>
              <h3>Login to continue</h3>
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
 

            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>
              
              <button className={style.button}>Submit</button>
            </form>
          ) : (
            <form className={[style.form1, style.form2].join(" ")}>
              <h2>Welcome</h2>
              <h3>Create an Account</h3>
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
          )}
        </div>
      </div>
      <div className={style.imageContainer}>
        {/* Add your image component here */}
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