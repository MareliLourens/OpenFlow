import React from "react";
import style from "./Style.Questions.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import QuestionBoxComponent from "../../components/QuestionBox-Component/Component.QuestionBox";

const QuestionsRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> What do you need help with?</h1>
        <QuestionBoxComponent />
      </div>
    </div>
  );
};

export default QuestionsRoute;
