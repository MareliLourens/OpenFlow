import React from "react";
import style from "./Style.QuestionBox.module.scss";

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

  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.BoxesBar}>
            <label className={style.BoxesLabel}>Question</label>
            <input
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
              className={style.BoxesInput}
            ></input>
          </div>
        </div>
        <div className={style.right}>
        <div className={style.DropBox} ondrop="drop(event)" ondragover="allowDrop(event)"><center>Drag and Drop<br></br>Images here</center></div>
        {/* <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69"></img> */}
        <button className={style.SubmitButton}>
        Upload Question
        </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBoxComponent;
