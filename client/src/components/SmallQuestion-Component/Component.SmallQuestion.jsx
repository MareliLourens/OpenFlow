import React from "react";
import style from "./Style.SmallQuestion.module.scss";
import TagComponent from "../TagComponent/Component.Tag";

const SmallQuestionComponent = ({ question }) => {
  return (
    <div className={style.main}>
      <p>{question.title}</p>
      <div className={style.tags}>
        <TagComponent />
      </div>
    </div>
  );
};

export default SmallQuestionComponent;
