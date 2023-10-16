import React, { useEffect, useState } from "react";
import style from "../Answers/Style.Answers.module.scss";
import QUESTIONComponent from "../../components/QuestionsComponent/Component.Questions";
import ANSWERComponent from "../../components/AnswersComponent/Component.Answers";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import axios from "axios";

const AnswersRoute = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getQuestions")
      .then((response) => {
        let data = response.data;
        const limitedData = data.slice(data.length - 4, data.length);
        setQuestions(limitedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getQuestions")
      .then((response) => {
        let data = response.data;
        const limitedData = data.slice(data.length - 4, data.length);
        setAnswers(limitedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <div className={style.questionContainer}>
          <div className={style.unansweredSection}>
            <h2 className={style.sectionHeading}>Unanswered Questions</h2>
            {questions.map((questions, index) => {
              return <QUESTIONComponent key={index} questionsData={questions} />;
            })}
          </div>
          <div className={style.answeredSection}>
            <h2 className={style.sectionHeading}>Answered Questions</h2>
            {answers.map((answers, index) => {
              return <ANSWERComponent key={index} answersData={answers} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswersRoute;
