import React from 'react';
import { motion } from 'framer-motion';
import { Animations } from '../styles/framerAnimations';

export default function SkewOut() {
  return (
    <motion.div
      variants={Animations.mainTextTransition}
      initial={'hidden'}
      animate={'visible'}>
      <h1>Juriste</h1>
    </motion.div>
  );
}
