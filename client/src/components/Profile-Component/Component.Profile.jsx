import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import style from "./Style.Profile.module.scss";
import TagComponent from "../TagComponent/Component.Tag";
import Star from "../../assets/icons/star.svg";
import StarFill from "../../assets/icons/star-fill.svg";
=======
import { useNavigate } from "react-router-dom";
import style from "./Style.Profile.module.scss";
import TagComponent from "../TagComponent/Component.Tag";
>>>>>>> main
import ProfileTest from "../../assets/images/profileTest.png";

const ProfileComponent = () => {
  const [userData, setUserData] = useState({});
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> main

  useEffect(() => {
    const token = sessionStorage.getItem("JWT");
    if (token) {
      axios
<<<<<<< HEAD
      .post("http://localhost:5001/api/verifytoken", { token })
=======
        .post("http://localhost:5000/api/verifytoken", { token })
>>>>>>> main
        .then((response) => {
          if (response.data.verified) {
            setUserData(response.data.user);
          } else {
<<<<<<< HEAD
          }
        })
        .catch((error) => {});
    }
  }, []);

=======
            // Handle unverified user if needed
          }
        })
        .catch((error) => {
          // Handle error if needed
        });
    }
  }, []);

  const handleDeleteAccount = async () => {
    const token = sessionStorage.getItem("JWT");

    try {
      const response = await axios.delete(`http://localhost:5000/api/deleteUser/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("User deleted:", response.data);
      console.log("User ID to delete:", userData._id);
      sessionStorage.removeItem("JWT");
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

>>>>>>> main
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>Your Profile</h2>
      </div>
      <div className={style.content}>
        <div className={style.profileImageSection}>
          <div className={style.profileImage}>
            <img src={"https://thispersondoesnotexist.com/"} alt="Profile" />
          </div>
        </div>
        <div className={style.infoSecion}>
          <div className={style.nameSection}>
            <h1 className={style.title}>{userData.name}</h1>
            <p className={style.text}>{userData.surname}</p>
          </div>
<<<<<<< HEAD
=======
          <div className={style.deleteacc} onClick={handleDeleteAccount}>
            <h1 className={style.deleteacc}>Delete Account</h1>
          </div>
>>>>>>> main
          <p>
            Location: <span>Pretoria</span>
          </p>
          <br />
          <p>
            Bio:{" "}
            {userData.name === "Tristan" ? (
              <span>
                I am a dedicated and passionate developer student, fully
                invested in the world of coding and software development.
                Currently honing my skills at Open Window, I am deeply
                interested in various programming languages and techniques. With
                a strong grasp of HTML, CSS, JS, React.
              </span>
            ) : (
              <span>
                Hey there! My name is {userData.name}, I am a second year at
                OpenWindow studying Interaction Design. I am a very passionate
                functionality developer.
              </span>
            )}
            <br />
            {userData.bio}
          </p>
          <div className={style.lineBreak}></div>
          <br />
          <p>Skills:</p>
          <div className={style.tagBox}>
<<<<<<< HEAD
            {userData.tags &&
              userData.tags.map((tag, index) => (
                <TagComponent key={index} tag={tag} />
              ))}
          </div>
=======
        {userData.tags && userData.tags.length > 0 ? (
          userData.tags.map((tag, index) => (
            <TagComponent key={index} tag={tag} />
          ))
        ) : (
          <p>This user hasn't gained any skills yet.</p>
        )}
      </div>
>>>>>>> main
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.5403069962522!2d28.209465181573176!3d-25.891857442236645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956608911ce097%3A0x519896b4b6eda40a!2sOpen%20Window-%20Centurion!5e0!3m2!1sen!2sza!4v1698950649303!5m2!1sen!2sza"
            width="1100"
            height="270px"
            className={style.iframeBox}
<<<<<<< HEAD
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
=======
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
>>>>>>> main
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
