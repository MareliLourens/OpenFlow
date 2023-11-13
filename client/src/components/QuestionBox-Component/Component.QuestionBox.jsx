import React, { useEffect, useState } from "react";
import style from "./Style.QuestionBox.module.scss";
import axios from "axios";

const QuestionBoxComponent = (props) => {
  let user = props.user;

  const [question, setQuestion] = useState({
    title: "",
    tags: [],
    description: "",
    author: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        [name]: event.target.files[0],
      }));
    } else {
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        [name]: value,
      }));
    }
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (user) {
      question.author = user.name;
    } else {
      question.author = "Anonymous";
    }

    const formData = new FormData();
    formData.append("title", question.title);
    formData.append("tags", JSON.stringify(question.tags));
    formData.append("description", question.description);
    formData.append("author", question.author);
    formData.append("image", question.image);

    if (!question.title || !question.tags || !question.description || !question.image) {
      console.log("Please fill out all fields.");
      return;
    } else {
      axios.post(`http://localhost:5001/api/addQuestion`, formData)
        .then((res) => {
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
          <div className={style.DropBox}>
            <center>
              <label htmlFor="image" className={style.ImageLabel}>
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleInputChange}
                className={style.ImageInput}
                name="image"
              />
            </center>
          </div>

          <button type="submit" className={style.SubmitButton}>
            Upload Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionBoxComponent;