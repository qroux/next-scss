import Link from "next/link"
import styles from "../styles/Presentation.module.scss";

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
      "Je développe en langage Javascript et Ruby ( Backend/Frontend ).",
  },
];

// const renderQuestions = questions.map((question) => {
//   return (
//     <div key={question.title} className={styles.presentation__question}>    
//         <img src="https://images.unsplash.com/photo-1510021115607-c94b84bceb1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2616&q=80" alt="logo"  className={`${styles.presentation__questionLogo} ${styles.presentation__questionLogoFirst}`} />
//       <div className={styles.presentation__questionContent}>
//         <h3 className={styles.presentation__questionTitle}>{question.title}</h3>
//         <p className={styles.presentation__questionText}>{question.content}</p>
//       </div>
//     </div>
//   );
// });



export default function presentation() {
  return (
    <div className={styles.presentationLayout}>
      <div className={styles.presentationContainer}>
        <div className={styles.presentation__headingBox}>
          <h1 className={styles.presentation__heading}><span className={styles.presentation__headingItalic}>"Code is Law"</span></h1>
          <h2 className={styles.presentation__sub}>Du droit à la programmation</h2>
        </div>


        <div className={styles.presentation__questions}>
          {/* {renderQuestions} */}
           <>
           <div className={styles.presentation__question}>    
            <div alt="logo"  className={`${styles.presentation__questionLogo} ${styles.presentation__questionLogoFirst}`} />
            <div className={styles.presentation__questionContent}>
              <h3 className={styles.presentation__questionTitle}>{questions[0].title}</h3>
              <p className={styles.presentation__questionText}>{questions[0].content}</p>
            </div>
          </div>
          </>
          <>
           <div className={styles.presentation__question}>    
            <div  alt="logo"  className={`${styles.presentation__questionLogo} ${styles.presentation__questionLogoSecond}`} />
            <div className={styles.presentation__questionContent}>
              <h3 className={styles.presentation__questionTitle}>{questions[1].title}</h3>
              <p className={styles.presentation__questionText}>{questions[1].content}</p>
            </div>
          </div>
          </> 
          <>
           <div className={styles.presentation__question}>    
            <div  alt="logo"  className={`${styles.presentation__questionLogo} ${styles.presentation__questionLogoThird}`} />
            <div className={styles.presentation__questionContent}>
              <h3 className={styles.presentation__questionTitle}>{questions[2].title}</h3>
              <p className={styles.presentation__questionText}>{questions[2].content}</p>
            </div>
          </div>
          </> 

        </div>
      </div>
    </div> 
  )
}
























// import styles from "../styles/Presentation.module.scss";
// import EthSvg from "../public/ethereum-2.svg";
// import Coding from "../public/coding.svg";
// import WebDev from "../public/web-dev-2.svg";

// export default function Presentation() {
//   return (
//     <h1>Presentation Page</h1>
//     // <div className={styles.presentation}>
//     //   <div className={styles.presentation__container}>
//     //     {/* <div className={styles.presentation__stick}></div> */}
//     //     <div className={styles.presentation__content}>
//     //       <h1 className={styles.presentation__title}>
//     //         Quentin Roux -{" "}
//     //         <span className={styles.titleCrossed}> Juriste </span>
//     //         <span className={styles.titleBold}>Développeur Fullstack</span>
//     //       </h1>
//     //       <div className={styles.presentation__questions}>
//     //         {renderQuestions}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

// const questions = [
//   {
//     title: "Pourquoi",
//     logo: EthSvg,
//     content:
//       "Juriste de formation, je suis finalement tombé dans la  programmation en cherchant à coder des smartcontracts sur  blockchain ethereum.",
//   },
//   {
//     title: "Comment",
//     logo: Coding,
//     content:
//       "Après une période de découverte en autodidacte, j'ai fini par suivre une formation de développeur Fullstack au Wagon Marseille (batch #212).",
//   },
//   {
//     title: "Maintenant",
//     logo: WebDev,
//     content:
//       "Je développe en langage Javascript et Ruby ( Backend/Frontend ).",
//   },
// ];

// // const renderQuestions = questions.map((question) => {
// //   return (
// //     <div className={styles.presentation__question}>
// //       <h3 className={styles.presentation__questionTitle}>{question.title}</h3>
// //       <p className={styles.presentation__questionText}>{question.content}</p>
// //     </div>
// //   );
// // });

// const renderQuestions = questions.map((question) => {
//   return (
//     <div className={styles.presentation__question}>
//       <div className={styles.presentation__questionImgContainer}>
//         <img src={question.logo} alt="eth logo svg" className={styles.presentation__questionImg}/>
//       </div>
//       <div className={styles.presentation__questionTextContainer}>
//         <h3 className={styles.presentation__questionTitle}>{question.title}</h3>
//         <p className={styles.presentation__questionText}>{question.content}</p>
//       </div>
//     </div>
//   );
// });
