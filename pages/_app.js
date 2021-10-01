import Head from 'next/head';
import '../styles/global.scss';
import styles from '../styles/Layout.module.scss';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quentin Roux | Portfolio</title>
        <link rel='icon' href='/favicon2.ico' />
        <meta
          name='description'
          content='Quentin Roux - Développeur Fullstack Javascript/React/Vue et RubyOnRails - Paris/Marseille'
        />
      </Head>

      <div className={styles.layout}>
        {/* <Navbar />  */}
        <div className={styles.fullpage}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

// computer = "<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// programming = Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// let contrib = "<a href=https://iconscout.com/icons/ethereum" target="_blank">Ethereum Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>"
