import react, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
    <div className={styles.navbar}>
      <div className={styles.navbar__right}>
        <Link href='/'>
          <img
            src='/cube.svg'
            alt='blockchain logo'
            className={styles.navbar__logo}
          />
        </Link>
      </div>
      <div className={styles.navbar__left}>{renderLinks()}</div>
      <MenuButton state={clicked} setState={setClicked} />

      <Portal clicked={clicked}>
        <MenuModal clicked={clicked} />
      </Portal>
    </div>
  );
}
