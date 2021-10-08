import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.scss';
import MenuButton from './MenuButton';
import MenuModal from './MenuModal';
import Portal from './Portal';

const links = [
  // { path: '/sandbox', label: '3d' },
  { path: '/#presentation', label: 'Présentation' },
  { path: '/#skills', label: 'Compétences' },
  { path: '/#contacts', label: 'Contacts' },
];

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
      const context = this;
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const debouncedScroll = useCallback(debounce(handleScroll, 40), []);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  const renderLinks = () => {
    return links.map((link, id) => {
      return (
        <Link href={link.path} passHref key={id}>
          <a className={styles.navbar__item}>{link.label}</a>
        </Link>
      );
    });
  };

  return (
    <motion.div
      className={[styles.navbar, scrollY > 150 ? styles.active : ''].join(' ')}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__right}>
          <Link href='/#' passHref>
            <img src='/cube.svg' alt='logo' className={styles.navbar__logo} />
          </Link>
        </div>
        <div className={styles.navbar__left}>{renderLinks()}</div>
        <MenuButton state={clicked} setState={setClicked} />

        <Portal clicked={clicked}>
          <MenuModal clicked={clicked} setClicked={setClicked} />
        </Portal>
      </div>
    </motion.div>
  );
}
