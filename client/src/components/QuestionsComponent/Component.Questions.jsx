import React from "react";
import style from "./Style.Questions.module.scss";

const QUESTIONComponent = () => {
  return (
    <div className={style.main}>
      <div className={style.questionBlock}>
        <div className={style.question}>
          <p>How can I find elements that are geometrically close together?</p>
          <div className={style.languageTag}>MongoDB</div>
        </div>
        <div className={style.statusIndicatorRed}></div>
        <div className={style.showDescription}>See Description</div>
      </div>
    </div>
  );
};

export default QUESTIONComponent;

