import styles from '../styles/Homepage.module.scss';
import { motion } from 'framer-motion';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import { PlanetSvg } from '../components/PlanetSvg';
import MainText from '../components/MainText';
import HiddenText from '../components/HiddenText';

// const cards = [
//   {
//     title: 'Présentation',
//     path: '/presentation',
//     description: 'Du droit à la programmation',
//   },
//   {
//     title: 'Languages',
//     path: '/languages',
//     description: 'Prestations et Langages',
//   },
//   // {title: "Portfolio", path: "/portfolio", description: "Du droit à la programmation"},
// ];

// const renderCards = cards.map((card) => {
//   return (
//     <Link key={card.title} href={card.path}>
//       <div className={styles.card}>
//         <h3 className={styles.card__heading}>{card.title}</h3>
//         <p className={styles.card__text}>{card.description}</p>
//       </div>
//     </Link>
//   );
// });

export default function index() {
  return (
    <div className={styles.homePage}>
      <section className={styles.textLayout} id='accueil'>
        <div className={styles.homeContainer}>
          {/* <div className={styles.textBox}>
            <h1 className={styles.text__regular}>Quentin Roux</h1>
            <h1 className={styles.text__crossed}>Juriste</h1>
            <h1 className={styles.text__negativ}>Développeur Fullstack</h1>
          </div> */}

          <motion.div
            className={styles.textBox}
            initial={{ height: 'calc(100vh - 10rem)' }}
            animate={{
              height: '70vh',
              transition: {
                delay: 5,
                duration: 2,
                ease: 'easeInOut',
              },
            }}>
            <h1 className={styles.text__regular}>Quentin Roux</h1>
            <div className={styles.text__animated}>
              <MainText />
              <HiddenText />
              {/* <h1 className={styles.text__animated__main}>Juriste</h1> */}
              {/* <h1 className={[styles.text__animated__hidden].join(' ')}>
                Développeur
              </h1> */}
            </div>
          </motion.div>

          <div className={styles.logoBox}>
            <PlanetSvg />
          </div>
        </div>
      </section>

      <section id='presentation'>
        <Presentation />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
    </div>
  );
}
