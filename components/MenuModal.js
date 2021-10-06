import React from 'react';
import { motion } from 'framer-motion';
import { Animations } from '../styles/framerAnimations';

export default function MenuModal({ clicked }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 50,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: '#090f20',
        transformOrigin: 'right',
      }}
      variants={Animations.menuModal}
      initial={'hidden'}
      animate={clicked ? 'visible' : ''}
      exit={'hidden'}></motion.div>
  );
}
