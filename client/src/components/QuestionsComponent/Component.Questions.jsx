import React from "react";
import style from "./Style.Questions.module.scss";

const QUESTIONComponent = (props) => {

  let data = props.questionsData

  let questionTitle = data.title
  let questionTag = data.tags

  console.log(props)

  return (
    <div className={style.main}>
      <div className={style.questionBlock}>
        <div className={style.question}>
          <p>{questionTitle}</p>
          <div className={style.languageTag}>{questionTag}</div>
        </div>
        {props.answered === true ? (<div className={style.statusIndicatorGreen}></div>) : (<div className={style.statusIndicatorRed}></div>)}
        <div className={style.showDescription}>See Description</div>
      </div>
    </div>
  );
};

export default QUESTIONComponent;

