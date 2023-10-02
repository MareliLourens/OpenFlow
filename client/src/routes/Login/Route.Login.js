import React, { useState } from "react";
import style from "./Style.Login.module.scss";

const LoginRoute = () => {

  const [signOption, setSignOption] = useState('signIn');

  const changeSignUp = (option) => {
    setSignOption(option);
    console.log(option);
  }




  return (
    <div className={style.main}>
      <div className={style.loginBlock}>
        <div className={style.topSection}>
          <div onClick={() => changeSignUp('signUp')} className={style.signOpt}>
            Sign Up
          </div>
          <div onClick={() => changeSignUp('signIn')} className={[style.signOpt, style.signOpt2].join(' ')}>
            Sign In
          </div>
        </div>
        {signOption === 'signIn' ? (<form className={style.form1}>
          <p>Your Email</p>
          <input placeholder="Enter your Email" className={style.input}></input>
          <p className={style.align}>Your Password</p>
          <input placeholder="Enter your Password" className={style.input}></input>
          <button className={style.button}>Submit</button>
        </form>)
        :
        (<form className={[style.form1, style.form2].join(' ')}>
          <p>First Name</p>
          <input placeholder="Enter your Email" className={style.input}></input>
          <p>Surname</p>
          <input placeholder="Enter your Email" className={style.input}></input>
          <p>Your Email</p>
          <input placeholder="Enter your Email" className={style.input}></input>
          <p className={style.align}>Your Password</p>
          <input placeholder="Enter your Password" className={style.input}></input>
          <button className={style.button}>Sign Up!</button>
        </form>)}
      </div>
    </div>
  );
};

export default LoginRoute;
