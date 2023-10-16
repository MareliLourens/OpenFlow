import React from "react";
import style from "./Style.Answers.module.scss";

const ANSWERComponent = () => {
  return (
    <div className={style.main}>
      <div className={style.questionBlock}>
        <div className={style.question}>
          <p>How to find elements that are geometrically close together</p>
          <div className={style.languageTag}>MongoDB</div>
        </div>
        <div className={style.statusIndicatorGreen}></div>
        <div className={style.showDescription}>See Description</div>
      </div>
    </div>
  );
};

export default ANSWERComponent;
