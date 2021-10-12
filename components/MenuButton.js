import React, { useEffect } from 'react';
import styles from '../styles/components/Navbar.module.scss';
import { motion } from 'framer-motion';
import { Animations } from '../styles/framerAnimations';

export default function MenuButton({ state, setState }) {
  useEffect(() => {
    const scrollable = state ? 'hidden' : 'scroll';
    document.body.style.overflow = scrollable;

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [state]);

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
