import React from "react";
import style from "./Style.Questions.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";

const QuestionsRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> Questions </h1>
      </div>
    </div>
  );
};

export default QuestionsRoute;
