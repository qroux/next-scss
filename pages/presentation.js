import styles from "../styles/Presentation.module.scss";
import EthSvg from "../public/ethereum-2.svg";
import Coding from "../public/coding.svg";
import WebDev from "../public/web-dev-2.svg";

export default function Presentation() {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentation__container}>
        {/* <div className={styles.presentation__stick}></div> */}
        <div className={styles.presentation__content}>
          <h1 className={styles.presentation__title}>
            Quentin Roux -{" "}
            <span className={styles.titleCrossed}> Juriste </span>
            <span className={styles.titleBold}>Développeur Fullstack</span>
          </h1>
          <div className={styles.presentation__questions}>
            {renderQuestions}
          </div>
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    title: "Pourquoi",
    logo: EthSvg,
    content:
      "Juriste de formation, je suis finalement tombé dans la  programmation en cherchant à coder des smartcontracts sur  blockchain ethereum.",
  },
  {
    title: "Comment",
    logo: Coding,
    content:
      "Après une période de découverte en autodidacte, j'ai fini par suivre une formation de développeur Fullstack au Wagon Marseille (batch #212).",
  },
  {
    title: "Maintenant",
    logo: WebDev,
    content:
      "Je développe en langage Javascript et Ruby ( Backend/Frontend ).",
  },
];

// const renderQuestions = questions.map((question) => {
//   return (
//     <div className={styles.presentation__question}>
//       <h3 className={styles.presentation__questionTitle}>{question.title}</h3>
//       <p className={styles.presentation__questionText}>{question.content}</p>
//     </div>
//   );
// });

const renderQuestions = questions.map((question) => {
  return (
    <div className={styles.presentation__question}>
      <div className={styles.presentation__questionImgContainer}>
        <img src={question.logo} alt="eth logo svg" className={styles.presentation__questionImg}/>
      </div>
      <div className={styles.presentation__questionTextContainer}>
        <h3 className={styles.presentation__questionTitle}>{question.title}</h3>
        <p className={styles.presentation__questionText}>{question.content}</p>
      </div>
    </div>
  );
});
