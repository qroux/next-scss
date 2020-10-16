import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__right}>
        <Link href="/">
          <img src="/cube.svg" alt="blockchain logo" className={styles.navbar__logo}/>
        </Link>
      </div>
      <div className={styles.navbar__left}>
        {/* <Link href="/presentation">
          <div className={styles.navbar__item}>Présentation</div>
        </Link>
        <Link href="/languages">
          <div className={styles.navbar__item}>Languages</div>
        </Link> */}
        <a href="#presentation" className={styles.navbar__item}>
          presentation
        </a>  
        <a href="#skills" className={styles.navbar__item}>
          Compétences
        </a>  
        <a href="#contacts" className={styles.navbar__item}>
          Contacts
        </a>     
      </div>
 
    </div>
  );
}
