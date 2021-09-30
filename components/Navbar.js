import Link from 'next/link';
import styles from '../styles/components/Navbar.module.scss';

const links = [
  { path: '#presentation', label: 'Présentation' },
  { path: '#skills', label: 'Compétences' },
  { path: '#contacts', label: 'Contacts' },
];

export default function Navbar() {
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
    </div>
  );
}
