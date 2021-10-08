import React from 'react';
import { motion } from 'framer-motion';
import { Animations } from '../styles/framerAnimations';
import styles from '../styles/components/Navbar.module.scss';
import MenuLink from './MenuLink';

const links = [
  // { path: '/sandbox', label: '3d' },
  { path: '/#presentation', label: 'Présentation' },
  { path: '/#skills', label: 'Compétences' },
  { path: '/#contacts', label: 'Contacts' },
];

export default function MenuModal({ clicked, setClicked }) {
  const renderLinks = links.map((link, id) => {
    return (
      <motion.div
        key={id}
        initial={{
          opacity: 0,
          translateX: '3rem',
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: { delay: 0.2 + 0.05 * id },
        }}>
        <MenuLink label={link.label} path={link.path} setClicked={setClicked} />
      </motion.div>
    );
  });
  return (
    <motion.div
      onClick={() => setClicked(false)}
      className={styles.menuModal}
      variants={Animations.menuModal}
      initial={'hidden'}
      animate={clicked ? 'visible' : ''}
      exit={'hidden'}>
      <div className={styles.menuModal__content}>{renderLinks}</div>
    </motion.div>
  );
}
