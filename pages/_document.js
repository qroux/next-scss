import Document, { Html, Head, Main, NextScript } from 'next/document';
import { motion, AnimatePresence } from 'framer-motion';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={'fr'}>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <motion.div
            id='menuModal'
            style={{ position: 'fixed', top: '12rem', left: 0 }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
