import React from "react";
import style from "./Style.Answers.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";

const AnswersRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> Answers </h1>
      </div>
    </div>
  );
};

export default AnswersRoute;
