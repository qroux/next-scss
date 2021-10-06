import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.scss';
import { motion } from 'framer-motion';
import { Animations } from '../styles/framerAnimations';

// const links = [
//   // { path: '/sandbox', label: '3d' },
//   { path: '/#presentation', label: 'Présentation' },
//   { path: '/#skills', label: 'Compétences' },
//   { path: '/#contacts', label: 'Contacts' },
// ];

export default function MenuButton({ state, setState }) {
  return (
    <div className={styles.navbar__menu} onClick={() => setState(!state)}>
      <motion.div
        className={[styles.navbar__menu__logo__top]}
        variants={Animations.menuTransition()}
        animate={state ? 'animate' : 'initial'}></motion.div>
      <motion.div
        className={styles.navbar__menu__logo__middle}
        variants={Animations.menuFade}
        initial={'initial'}
        animate={state ? 'animate' : 'initial'}></motion.div>
      <motion.div
        className={styles.navbar__menu__logo__bottom}
        variants={Animations.menuTransition(true)}
        animate={state ? 'animate' : 'initial'}></motion.div>
    </div>
  );
}
