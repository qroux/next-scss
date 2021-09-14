import styles from "../styles/components/Skills.module.scss";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Animations } from "../styles/framerAnimations";

const sections = [
  {
    title: "FrontEnd",
    content:
      "Réalisation et intégration d'interfaces graphiques respectant les dernières contraintes : ",
    span: "Responsive Design, Accessibilité, Performances, SEO, server side rendering, Material Ui.",
    images: ["/react.svg", "/next.svg", "/redux.svg", "/material-ui.svg"],
  },
  {
    title: "BackEnd",
    content:
      "Conception d'applications web. Choix du langage selon les besoins et le temps de developpement disponible. ",
    span: "NodeJs/Typescript ou Ruby on Rails. Base de données PostreSQL ou MongoDB.",
    images: ["/typescript.svg", "postgresql.svg", "mongodb.svg", "rails.svg"],
  },
  {
    title: "Mobile",
    content: "Conception d'applications mobiles crossplateform. ",
    span: "React native et Expo.",
    images: ["/react.svg", "expo.svg"],
  },
  {
    title: "DevOps",
    content:
      "Mise en place de process de développement et de mise en production permettant une automatisation de certains actes répétitifs et chronophages. ",
    span: "Gains de fiablité, productivité et sérénité du développement.",
    images: ["/docker.svg", "/kubernets.svg"],
  },
];

const renderSections = sections.map((section) => {
  return (
    <InView threshold={0.35} key={section.title} triggerOnce={true}>
      {({ inView, ref }) => {
        return (
          <motion.section
            className={styles.section__container}
            ref={ref}
            variants={Animations.sectionTransition}
            initial={"hidden"}
            animate={inView ? "visible" : ""}
          >
            <h3 className={styles.section__header}>{section.title}</h3>

            <div className={styles.section__content}>
              <div className={styles.section__contentMain}>
                <p>
                  {section.content}
                  <span className={styles.section__contentMainBold}>
                    {section.span}
                  </span>
                </p>
              </div>
              <div className={styles.section__contentImages}>
                {section.images.map((image) => {
                  return (
                    <img
                      src={image}
                      alt={image}
                      className={styles.section__contentImages__item}
                      key={image}
                    />
                  );
                })}
              </div>
            </div>
          </motion.section>
        );
      }}
    </InView>
  );
});

export default function Skills() {
  return (
    <div className={styles.skills__layout}>
      <div className={styles.skills__container}>
        <div className={styles.skills__header}>
          <h2 className={styles.skills__heading}>Compétences et Langages</h2>
        </div>

        {renderSections}
      </div>
    </div>
  );
}
