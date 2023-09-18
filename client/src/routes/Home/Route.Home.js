import React from "react";
import EXAMPLEComponent from "../../components/EXAMPLE-Component/Component.EXAMPLE";
import style from "./Style.Home.module.scss";

const HomeRoute = () => {
    return(
        <div className={style.main}>
            <EXAMPLEComponent />
        </div>
        
    )
}

export default HomeRoute;