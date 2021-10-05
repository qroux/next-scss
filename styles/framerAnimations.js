export const Animations = {
  pageTransition: {
    hidden: {
      y: -5,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.5 },
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  sectionTransition: {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  },
  cardTransition: {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  },
  mainTextTransition: {
    hidden: {
      // translateY: '-5rem',
      // translateX: '1rem',
      // scaleY: 0,
      // skew: '-30deg',
      // translateY: '5rem',
      // translateX: '2rem',
      // scaleY: 0,
      // skew: '40deg',
      // position: 'absolute',
      // top: 0,
      // left: 0,
    },
    visible: {
      translateY: '-5rem',
      translateX: '1rem',
      scaleY: 0,
      skew: '-30deg',
      transition: { duration: 2, delay: 2 },
    },
  },
  hiddenTextTransition: {
    hidden: {
      translateY: '5rem',
      translateX: '2rem',
      scaleY: 0,
      skew: '40deg',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    visible: {
      translateY: '0rem',
      translateX: '0rem',
      scaleY: 1,
      skew: 0,
      transition: { duration: 2, delay: 2 },
    },
  },
  hiddenTextBG: {
    initial: {
      backgroundPosition: '50% 70%',
    },
    visible: {
      backgroundPosition: '50% 30%',
      transition: { delay: 4.5, duration: 5 },
    },
  },
};
