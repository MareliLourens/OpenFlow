import React from "react";
import style from "../Answers/Style.Answers.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";

const AnswersRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <div className={style.questionContainer}>
          <div className={style.unansweredSection}>
            <h2 className={style.sectionHeading}>Unanswered Questions</h2>
            {[1, 2, 3].map((index) => (
              <div className={style.questionBlock} key={index}>
                <div className={style.question}>
                  <p>How can I find elements that are geometrically close together?</p>
                  <div className={style.languageTag}>MongoDB</div>
                </div>
                <div className={style.statusIndicatorRed}></div>
                <div className={style.showDescription}>See Description</div>
              </div>
            ))}
          </div>
          <div className={style.answeredSection}>
            <h2 className={style.sectionHeading}>Answered Questions</h2>
            {[1, 2, 3].map((index) => (
              <div className={style.questionBlock} key={index}>
                <div className={style.question}>
                  <p>How to optimize a MongoDB database?</p>
                  <div className={style.languageTag}>MongoDB</div>
                </div>
                <div className={style.statusIndicatorGreen}></div>
                <div className={style.showDescription}>See Solution</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswersRoute;
