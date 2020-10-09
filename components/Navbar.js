import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <div className={styles.navbar__item}>Présentation</div>
      </Link>
      <Link href="portfolio">
        <div className={styles.navbar__item}>Portfolio</div>
      </Link>
      <Link href="/contacts">
        <div className={styles.navbar__item}>Contacts</div>
      </Link>      
    </div>
  );
}
