import React from "react";
import style from "./Style.SmallQuestion.module.scss";
import TagComponent from "../TagComponent/Component.Tag";

const SmallQuestionComponent = () => {
  return (
    <div className={style.main}>
      <p>How can I fidn elements that are geometrical close together?</p>
      <div className={style.tags}>
        <TagComponent />
      </div>
    </div>
  );
};

export default SmallQuestionComponent;
