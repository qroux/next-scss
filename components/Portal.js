import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

export default function Portal({ children, clicked }) {
  const isBrowser = typeof window !== 'undefined';
  const el = (
    <AnimatePresence exitBeforeEnter>{clicked && children}</AnimatePresence>
  );

  return isBrowser
    ? createPortal(el, document.querySelector('#menuModal'))
    : null;
}
