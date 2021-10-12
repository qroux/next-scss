import styles from '../styles/Homepage.module.scss';
import { motion } from 'framer-motion';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import { PlanetSvg } from '../components/PlanetSvg';
import MainText from '../components/MainText';
import HiddenText from '../components/HiddenText';

export default function index() {
  return (
    <div className={styles.homePage}>
      <section className={styles.textLayout} id='accueil'>
        <div
          className='placeholder'
          style={{
            height: '10vh',
          }}
        />
        <motion.div
          className={styles.homeContainer}
          animate={{
            translateY: '-10vh',
            transition: {
              delay: 5,
              duration: 2,
              ease: 'easeInOut',
            },
          }}>
          <div className={styles.textBox}>
            <h1 className={styles.text__regular}>Quentin Roux</h1>
            <div className={styles.text__animated}>
              <MainText />
              <HiddenText />
            </div>
          </div>

          <div className={styles.logoBox}>
            <PlanetSvg />
          </div>
        </motion.div>
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
