import React from "react";
import style from "./Style.Home.module.scss";
import HomeHeaderComponent from "../../components/HomeHeader-Component/Component.HomeHeader";
import blinker from "../../assets/images/blink.gif";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";

const HomeRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> Welcome To OpenFlow!</h1>
        <p className={style.text}>
          Empowering Curiosity. Connect, Ask, and Share Knowledge with Our
          Community of Inquisitive Minds. Explore Today!
        </p>
        <div className={style.searchBar}>
          <input
            placeholder="Start Typing..."
            className={style.searchInput}
          ></input>
        </div>
        <div className={style.topQuestions}>
          <h1>Top Questions</h1>
          <div className={style.questionCarousel}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
