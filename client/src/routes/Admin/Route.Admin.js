import React, { useEffect, useState } from "react";
import style from "../Admin/Style.Admin.module.scss";
import AdminComponent from "../../components/Admin-Component/Component.Admin";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import axios from "axios";

const AdminRoute = (props) => {
  const user = props.user;
  const admin = props.admin;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("http://localhost:5001/api/getQuestions")
=======
      .get("http://localhost:5000/api/getQuestions")
>>>>>>> main
      .then((response) => {
        let data = response.data;
        console.log(data);
        setQuestions(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("JWT");
    if (token) {
      axios
        .post("http://localhost:5000/api/verifytoken", { token })
        .then((response) => {
          if (response.data.verified) {
            setUserData(response.data.user);
          } else {
          }
        })
        .catch((error) => { });
    }
  }, []);

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent admin={admin} user={user} />
        <div className={style.adminContainer}>
            <div className={style.profileImage}>
              <img src={"https://thispersondoesnotexist.com/"} alt="Profile" />
            </div>
            <div className={style.nameSection}>
              <h1 className={style.title}>{userData.name + " " + userData.surname}</h1>
            </div>
            <div className={style.logout}>
              <h1 className={style.logout}>Logout</h1>
            </div>
        </div>
        <div className={style.questionContainer}>
          <div className={style.unansweredSection}>
            <h2 className={style.sectionHeading}>Unanswered Questions</h2>
            {questions.map((questions, index) => {
              return <AdminComponent key={index} questionsData={questions} answered={false} />;
            })}
          </div>
          <div className={style.answeredSection}>
            <h2 className={style.sectionHeading}>Answered Questions</h2>
            {questions.map((questions, index) => {
              return <AdminComponent key={index} questionsData={questions} answered={true} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoute;
