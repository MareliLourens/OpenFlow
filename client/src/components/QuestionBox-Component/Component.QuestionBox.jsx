import React, { useState } from "react";
import style from "./Style.QuestionBox.module.scss";
import axios from "axios";

const QuestionBoxComponent = () => {
  const [question, setQuestion] = useState({
    title: "",
    tags: "",
    description: "",
    author: "default"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleAddQuestion = async (e) => {
    e.preventDefault();

    if (!question.title || !question.tags || !question.description) {
      console.log("Please fill out all fields.");
      return;
    }

    // Log the data being sent to the API for debugging
    console.log("Data being sent to the API:", question);

    try {
      // First, upload the image
      const formData = new FormData();
      formData.append("image", droppedImage);
      const imageResponse = await axios.post(
        "http://localhost:5000/api/uploadImage",
        formData
      );

      // Then, add the question with the image URL
      const questionData = {
        ...question,
        image_url: imageResponse.data.imageUrl,
      };

      const questionResponse = await axios.post(
        "http://localhost:5000/api/addQuestion",
        questionData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log("API Response:", questionResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [droppedImage, setDroppedImage] = useState(null);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length > 0) {
      setDroppedImage(droppedFiles[0]);
      setIsTextVisible(false);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Question</label>
            <input
              name="title"
              value={question.title}
              onChange={handleInputChange}
              className={style.BoxesInput}
            ></input>
          </div>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Tags</label>
            <input
              className={style.BoxesInput}
            ></input>
          </div>
          <div className={style.BoxesBar2}>
            <label className={style.BoxesLabel}>Description</label>
            <input
              name="description"
              value={question.description}
              onChange={handleInputChange}
              className={style.BoxesInput}
            ></input>
          </div>
        </div>
        <div className={style.right}>
          <div
            className={style.DropBox}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {isTextVisible && (
              <center>
                Drag and Drop<br></br>Images here
              </center>
            )}
            {droppedImage && (
              <img
                src={URL.createObjectURL(droppedImage)}
                alt="Dropped Image"
                className={style.DroppedImage}
              />
            )}
          </div>
          <button type="submit" className={style.SubmitButton}>
            Upload Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBoxComponent;
