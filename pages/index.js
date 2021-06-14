import Link from 'next/link';
import styles from '../styles/Homepage.module.scss';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import { PlanetSvg } from '../components/PlanetSvg';

const cards = [
  {
    title: 'Présentation',
    path: '/presentation',
    description: 'Du droit à la programmation',
  },
  {
    title: 'Languages',
    path: '/languages',
    description: 'Prestations et Langages',
  },
  // {title: "Portfolio", path: "/portfolio", description: "Du droit à la programmation"},
];

const renderCards = cards.map((card) => {
  return (
    <Link key={card.title} href={card.path}>
      <div className={styles.card}>
        <h3 className={styles.card__heading}>{card.title}</h3>
        <p className={styles.card__text}>{card.description}</p>
      </div>
    </Link>
  );
});

export default function index() {
  return (
    <div className={styles.homePage}>
      <section className={styles.textLayout} id='accueil'>
        <div className={styles.homeContainer}>
          <div className={styles.textBox}>
            <h1 className={styles.text__regular}>Quentin Roux</h1>
            <h1 className={styles.text__crossed}>Juriste</h1>
            <h1 className={styles.text__negativ}>Développeur Fullstack</h1>
          </div>

          <div className={styles.logoBox}>
            <PlanetSvg />
            {/* <img
              src='/uranus.svg'
              alt='planet logo'
              className={styles.reactLogo}
            /> */}
            {/* <div className={styles.reactShadow}></div> */}
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
