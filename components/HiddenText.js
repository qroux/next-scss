import React from 'react';
import { motion } from 'framer-motion';
import { Animations } from '../styles/framerAnimations';

export default function HiddenText() {
  return (
    <motion.div
      variants={Animations.hiddenTextTransition}
      initial={'hidden'}
      animate={'visible'}>
      <motion.h1
        key={'test'}
        variants={Animations.hiddenTextBG}
        initial={'initial'}
        animate={'visible'}
        style={{
          color: 'transparent',
          backgroundImage: "url('/blue.jpg')",
          WebkitBackgroundClip: 'text',
          backgroundPosition: '50% 20%',
          WebkitTextStroke: '1px rgba(0, 0, 0, 0.301)',
          filter: 'contrast(0.7)',
        }}>
        Développeur
      </motion.h1>
    </motion.div>
  );
}
