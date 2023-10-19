import React, { useEffect, useState } from "react";
import style from "./Style.QuestionBox.module.scss";
import axios from "axios";

const QuestionBoxComponent = () => {
  // function allowDrop(ev) {
  //   ev.preventDefault();
  // }

  // function drag(ev) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  // }

  // function drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }

  const [question, setQuestion] = useState({
    title: "",
    tags: [],
    description: "",
    author: "default"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
    console.log(question);
  };
  

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!question.title || !question.tags || !question.description) {
      console.log("Please fill out all fields.");
      return;
    } else {
      axios.post(`http://localhost:5000/api/addQuestion`, question).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleAddQuestion} className={style.content}>
        <div className={style.left}>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Question</label>
            <input
              name="title"
              value={question.question}
              onChange={handleInputChange}
              className={style.BoxesInput}
            />
          </div>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Tags</label>
            <input
              name="tags"
              value={question.tags}
              onChange={handleInputChange}
              className={style.BoxesInput}
            />
          </div>
          <div className={style.BoxesBar2}>
            <label className={style.BoxesLabel}>Description</label>
            <input
              name="description"
              value={question.description}
              onChange={handleInputChange}
              className={style.BoxesInput}
            />
          </div>
        </div>
        <div className={style.right}>
          <div
            className={style.DropBox}
            ondrop="drop(event)"
            ondragover="allowDrop(event)"
          >
            <center>
              Drag and Drop<br></br>Images here
            </center>
          </div>
          {/* <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69"></img> */}
          <button type="submit" className={style.SubmitButton}>
            Upload Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionBoxComponent;
