import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__right}>
        <Link href="/">
        <img src="/cube.svg" alt="blockchain logo" className={styles.navbar__logo}/></Link>
      </div>
      <div className={styles.navbar__left}>
        <Link href="/presentation">
          <div className={styles.navbar__item}>Présentation</div>
        </Link>
        <Link href="portfolio">
          <div className={styles.navbar__item}>Portfolio</div>
        </Link>
        <Link href="/contacts">
          <div className={styles.navbar__item}>Contacts</div>
        </Link>     
      </div>
 
    </div>
  );
}
