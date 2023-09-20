import React from "react";
import style from "./Style.Home.module.scss";
import HomeHeaderComponent from "../../components/HomeHeader-Component/Component.HomeHeader";
import blinker from "../../assets/images/blink.gif";

const HomeRoute = () => {
  return (
    <div className={style.main}>
      <div className={style.leftCol}>
        <HomeHeaderComponent />
        <img className={style.blinker} src={blinker} />
      </div>
      <div className={style.rightCol}>
        <div className={style.content}>
          <p>
            Empowering Curiosity. Connect, Ask, and Share Knowledge with Our
            Community of Inquisitive Minds. Explore Today!
          </p>
          <div className={style.buttonSection}>
            <div className={style.button}>Ask a question</div>
            <div className={[style.button, style.button2].join(' ')}>Find an answer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
