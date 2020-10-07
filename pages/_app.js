import Head from "next/head";
import "../styles/global.scss";
import styles from "../styles/Layout.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <div className={styles.navbar}>
          <div className={styles.navbar__item}>1</div>
          <div className={styles.navbar__item}>2</div>
          <div className={styles.navbar__item}>3</div>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
