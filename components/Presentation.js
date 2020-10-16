
import styles from "../styles/components/Presentation.module.scss";

import EthSvg from "../public/ethereum-2.svg";
// import Coding from "../public/coding.svg";
import LeWagon from '../public/lewagon.png'
import WebDev from "../public/web-dev-2.svg";


const questions = [
    {
      id: "first",
      title: "Pourquoi",
      logo: EthSvg,
      content:
        "Juriste de formation, je suis finalement tombé dans la  programmation en cherchant à coder des smartcontracts sur  blockchain ethereum.",
    },
    {
      id: "second",
      title: "Comment",
      logo: LeWagon,
      content:
        "Après une période de découverte en autodidacte, j'ai fini par suivre une formation de développeur Fullstack au Wagon Marseille (batch #212).",
    },
    {
      id: "third",
      title: "Maintenant",
      logo: WebDev,
      content:
        "Je développe en langage Javascript et Ruby (Backend/Frontend).",
    },
  ];

  const renderText = questions.map(question => {
      return (
          <div className={styles.questionBox}>
            <h3 className={styles.question__heading}>{question.title}</h3>
            <p>{question.content}</p>
          </div>  
      )
  })

export default function Presentation() {
  return (
    <div className={styles.presentation__layout}>
        <div className={styles.presentation__container}>
            <div className={styles.presentation__header}>
                <h2 className={styles.presentation__heading}>Du Droit à la Programmation</h2>
            </div>
            <div className={styles.presentation__content}>            
                <img src="/ethereum-2.svg" alt="ethereum-2 logo" className={styles.presentation__contentImage}/>               
                <div className={styles.presentation__contentText}>
                    {renderText}
                </div>
            </div>
        </div>
    </div>
  );
}
