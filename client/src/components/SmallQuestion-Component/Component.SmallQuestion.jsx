import style from "./Style.SmallQuestion.module.scss";
import TagComponent from "../TagComponent/Component.Tag";
import React from "react";

const SmallQuestionComponent = ({ question }) => {
  const { title, tags } = question || {};

  return (
    <div className={style.main}>
      <div>
        <p className={style.questiontext}>{title}</p>
        <div className={style.tags}>
          {tags && tags.map((tag, index) => (
            <TagComponent key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallQuestionComponent;


// import style from "./Style.SmallQuestion.module.scss";
// import TagComponent from "../TagComponent/Component.Tag";
// import React from "react";

// const SmallQuestionComponent = ({ title, tags }) => {
//   return (
//     <div className={style.main}>
//       <div>
//         <p className={style.questiontext}>{title}</p>
//         <div className={style.tags}>
//           {tags.map((tag, index) => (
//             <TagComponent key={index} tag={tag} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmallQuestionComponent;