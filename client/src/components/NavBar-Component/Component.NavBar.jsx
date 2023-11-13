import style from "./Style.NavBar.module.scss";
import logo from "../../assets/images/logo.gif";
import loginIcon from "../../assets/icons/login.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const NavBarComponent = (props) => {
  const user = props.user;
  const admin = props.admin;
  const urlLocation = window.location.href;
  console.log(urlLocation);

  let email_href =
    "https://mail.google.com/mail/?view=cm&fs=1&to=200109@virtualwindow.co.za" +
    "&su=openFlow+Query&body=Good+day,+OpenFlow!+Please+assist+me+regarding+openFlow.";

    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
  
    // Function to handle logout
    const handleLogout = () => {
      // Clear user data and JWT token
      setUserData({});
      sessionStorage.removeItem("JWT");
  
      // Redirect to the login page
      navigate("/");
    };
  
    useEffect(() => {
      const token = sessionStorage.getItem("JWT");
      if (!token) {
        // If there's no token, redirect to login
        navigate("/");
      } else {
        axios
          .post("http://localhost:5000/api/verifytoken", { token })
          .then((response) => {
            if (response.data.verified) {
              setUserData(response.data.user);
            } else {
              // Handle case where token is not verified
              navigate("/");
            }
          })
          .catch((error) => {
            // Handle error in API request
            navigate("/");
          });
      }
    }, [navigate]);

  return (
    <div className={style.main}>
      <img className={style.logoImg} src={logo} />
      {user && <p className={style.welcome}>Welcome {user.name}!</p>}
      <div className={style.links}>
        <Link to="/home">
          <div className={style.link}>Home</div>
        </Link>
        <Link to="/questions">
          <div className={style.link}>Questions</div>
        </Link>
        <Link to="/answers">
          <div className={style.link}>Answers</div>
        </Link>
        <a href={email_href} target="_blank">
          <div className={style.link}>Contact Us</div>
        </a>
        {user ? (
          <Link to="/profile">
            <div className={style.link}>Profile</div>
          </Link>
        ) : (
          <Link to="/">
            <div className={style.link}>
              <img
                className={style.loginIcon}
                src={loginIcon}
                alt="Login Icon"
              />
              Login
            </div>
          </Link>
        )}
        {urlLocation == "http://localhost:3000/profile" && <Link to="/">
            <div className={style.link} onClick={handleLogout}>
              <img
                className={style.loginIcon}
                src={loginIcon}
                alt="Login Icon"
              />
              Logout
            </div>
          </Link> }
      </div>
    </div>
  );
};

export default NavBarComponent;
