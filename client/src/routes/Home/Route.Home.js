import style from "./Style.Home.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import SmallQuestionComponent from "../../components/SmallQuestion-Component/Component.SmallQuestion";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeRoute = (props) => {
  const user = props.user;
  const admin = props.admin;

  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getQuestions")
      .then((response) => {
        let data = response.data;
        console.log(data);
        setQuestions(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredQuestions = questions.filter((q) =>
    q.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent admin={admin} user={user} />
        <h1 className={style.heading}> Welcome To OpenFlow!</h1>
        <p className={style.text}>
          Empowering Curiosity. Connect, Ask, and Share Knowledge with Our
          Community of Inquisitive Minds. Explore Today!
        </p>
        <div className={style.searchBar}>
          <input
            placeholder="Start Typing..."
            className={style.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={style.topQuestions}>
          <h1>Top Questions</h1>
          <div className={style.questionCarousel}>
            {filteredQuestions.map((q, index) => (
              <SmallQuestionComponent key={index} title={q.title} tags={q.tags} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
