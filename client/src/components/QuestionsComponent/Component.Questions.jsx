import React from "react";
import { Link } from "react-router-dom";
import style from "./Style.Questions.module.scss";
import TagComponent from "../TagComponent/Component.Tag";

const QUESTIONComponent = (props) => {
  let data = props.questionsData;

  let questionTitle = data.title;
  let questionTag = data.tags;

  return (
    <div className={style.main}>
      <div className={style.questionBlock}>
        <div className={style.question}>
          <p>{questionTitle}</p>
          <div className={style.tagsposition}>
            {questionTag.map((tag, index) => (
              <TagComponent className={style.languageTag} key={index} tag={tag} />
            ))}
          </div>
          </div>
        {props.answered === true ? (
          <div className={style.statusIndicatorGreen}></div>
        ) : (
          <div className={style.statusIndicatorRed}></div>
        )}
        <div className={style.showDescription}>
        <Link to={`/singlequestion?id=${data._id}`}>See Description</Link>
        </div>
      </div>
    </div>
  );
};

export default QUESTIONComponent;



