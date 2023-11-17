import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Style.Questions.module.scss";
import TagComponent from "../TagComponent/Component.Tag";
import axios from "axios";

const QUESTIONComponent = (props) => {
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    const fetchLikesAndDislikes = async () => {
      try {
        const token = sessionStorage.getItem("JWT"); 
        if (!token) return;

        const response = await axios.post(
          "http://localhost:5000/api/getLikesAndDislikes",
          {
            answerId: props.questionsData._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.userId); // Assuming the response contains the userId
        setLiked(response.data.likes.includes(response.data.userId));
        setDisliked(response.data.dislikes.includes(response.data.userId));
      } catch (error) {
        console.error("Error fetching likes and dislikes:", error);
      }
    };

    fetchLikesAndDislikes();
  }, [props.questionsData._id]);

  const handleLike = async () => {
    try {
      const token = sessionStorage.getItem("JWT");
      if (!token) return;

      await axios.post(
        "http://localhost:5000/api/like",
        {
          answerId: props.questionsData._id,
          userId: user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLiked(true);
      setDisliked(false);
    } catch (error) {
      console.error("Error liking answer:", error);
    }
  };

  const handleDislike = async () => {
    try {
      const token = sessionStorage.getItem("JWT");
      if (!token) return;

      await axios.post(
        "http://localhost:5000/api/disLike",
        {
          answerId: props.questionsData._id,
          userId: user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLiked(false);
      setDisliked(true);
    } catch (error) {
      console.error("Error disliking answer:", error);
    }
  };

  const data = props.questionsData;
  const questionTitle = data.title;
  const questionTag = data.tags;

  return (
    <div className={style.main}>
      <div className={style.questionBlock}>
        <div className={style.question}>
          <p>{questionTitle}</p>
          <div className={style.tagsposition}>
            {questionTag.map((tag, index) => (
              <TagComponent
                className={style.languageTag}
                key={index}
                tag={tag}
              />
            ))}
          </div>
        </div>
        {props.answered === true ? (
          <div className={style.statusIndicatorGreen}></div>
        ) : (
          <div className={style.statusIndicatorRed}></div>
        )}
        <div className={style.showDescription}>
          <Link to={`/singlequestion?id=${data._id}`}>See Description</Link>
        </div>
        <div className={style.buttonsContainer}>
          <button
            onClick={handleLike}
            className={liked ? style.likedButton : style.likeButton}
          >
            👍
          </button>
          <button
            onClick={handleDislike}
            className={
              disliked ? style.dislikedButton : style.dislikeButton
            }
          >
            👎
          </button>
        </div>
      </div>
    </div>
  );
};

export default QUESTIONComponent;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import style from "./Style.Questions.module.scss";
// import TagComponent from "../TagComponent/Component.Tag";
// import axios from "axios";

// const QUESTIONComponent = (props) => {
//   const [liked, setLiked] = useState(false);
//   const [disliked, setDisliked] = useState(false);

//   const handleLike = async () => {
//     try {
//       const response = await axios.put("http://localhost:5001/api/toggleLikeAnswer", {
//         answerId: props.questionsData._id,
//       });

//       setLiked(response.data.upRating.includes(user._id));
//       setDisliked(response.data.downRating.includes(user._id));
//     } catch (error) {
//       console.error("Error toggling like:", error);
//     }
//   };

//   const handleDislike = async () => {
//     try {
//       const response = await axios.put("http://localhost:5001/api/toggleDislikeAnswer", {
//         answerId: props.questionsData._id,
//       });

//       setLiked(response.data.upRating.includes(user._id));
//       setDisliked(response.data.downRating.includes(user._id));
//     } catch (error) {
//       console.error("Error toggling dislike:", error);
//     }
//   };

//   const user = props.user;
//   const data = props.questionsData;
//   const questionTitle = data.title;
//   const questionTag = data.tags;

//   return (
//     <div className={style.main}>
//       <div className={style.questionBlock}>
//         <div className={style.question}>
//           <p>{questionTitle}</p>
//           <div className={style.tagsposition}>
//             {questionTag.map((tag, index) => (
//               <TagComponent className={style.languageTag} key={index} tag={tag} />
//             ))}
//           </div>
//         </div>
//         {props.answered === true ? (
//           <div className={style.statusIndicatorGreen}></div>
//         ) : (
//           <div className={style.statusIndicatorRed}></div>
//         )}
//         <div className={style.showDescription}>
//           <Link to={`/singlequestion?id=${data._id}`}>See Description</Link>
//         </div>
//         <div className={style.buttonsContainer}>
//           <button onClick={handleLike} className={liked ? style.likedButton : style.likeButton}>
//             👍
//           </button>
//           <button onClick={handleDislike} className={disliked ? style.dislikedButton : style.dislikeButton}>
//             👎
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QUESTIONComponent;


//BELOW IS OLD

// import React from "react";
// import { Link } from "react-router-dom";
// import style from "./Style.Questions.module.scss";
// import TagComponent from "../TagComponent/Component.Tag";

// const QUESTIONComponent = (props) => {
//   let data = props.questionsData;

//   let questionTitle = data.title;
//   let questionTag = data.tags;

//   return (
//     <div className={style.main}>
//       <div className={style.questionBlock}>
//         <div className={style.question}>
//           <p>{questionTitle}</p>
//           <div className={style.tagsposition}>
//             {questionTag.map((tag, index) => (
//               <TagComponent className={style.languageTag} key={index} tag={tag} />
//             ))}
//           </div>
//           </div>
//         {props.answered === true ? (
//           <div className={style.statusIndicatorGreen}></div>
//         ) : (
//           <div className={style.statusIndicatorRed}></div>
//         )}
//         <div className={style.showDescription}>
//         <Link to={`/singlequestion?id=${data._id}`}>See Description</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QUESTIONComponent;



