import style from "./Style.Admin.module.scss";
import trash from "../../assets/icons/trash.svg";
import axios from "axios";
import React, { useState } from "react";

const AdminComponent = (props) => {
  let data = props.questionsData;

  let questionTitle = data.title;
  let questionTag = data.tags;

  // Make sure Questions is initialized as an array
  const [Questions, setQuestions] = useState(Array.isArray(props.questionsData) ? props.questionsData : []);

  const handleDelete = async () => {
    try {
      // Make an Axios DELETE request to your server endpoint
<<<<<<< HEAD
      await axios.delete(`http://localhost:5001/api/deleteQuestion/${data._id}`);
=======
      await axios.delete(`http://localhost:5000/api/deleteQuestion/${data._id}`);
>>>>>>> main
      window.location.reload(false);

      // Update the state by filtering out the deleted question
      setQuestions(Questions.filter(question => question._id !== data._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.questionBlock}>
        <div className={style.question}>
          <p>{questionTitle}</p>
          <div className={style.languageTag}>{questionTag}</div>
        </div>
        {props.answered === true ? (
          <div>
            <img className={style.trash} src={trash} alt="Delete" onClick={handleDelete} />
            <div className={style.statusIndicatorGreen}></div>
          </div>
        ) : (
          <div>
            <img className={style.trash} src={trash} alt="Delete" onClick={handleDelete} />
            <div className={style.statusIndicatorRed}></div>
          </div>
        )}
        <div className={style.showDescription}><a href={`/singlequestion?id=${data._id}`}>See Description</a></div>
      </div>
    </div>
  );
};

export default AdminComponent;
