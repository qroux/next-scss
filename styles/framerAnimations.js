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
  menuTransition: (reverse = false) => {
    return {
      initial: {
        rotate: 0,
      },
      animate: {
        rotate: reverse ? 45 : -45,
      },
    };
  },
  menuFade: {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 0,
    },
  },
  menuModal: {
    hidden: {
      scaleX: 0,
      borderBottomLeftRadius: '100%',
      borderTopLeftRadius: '100%',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
    visible: {
      scaleX: 1,
      borderBottomLeftRadius: '0%',
      borderTopLeftRadius: '0%',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  },
  chevronTransition: {
    initial: {
      opacity: 0,
      top: 0,
    },
    animate: {
      opacity: 0.1,
      top: '-15rem',
      transition: { delay: 7 },
    },
    hover: {
      translateY: '1.5rem',
      scaleX: 0.8,
      transition: { duration: 0.5 },
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
    hidden: {},
    visible: {
      translateY: '-5rem',
      translateX: '1rem',
      scaleY: 0,
      skew: '-30deg',
      transition: { duration: 2, delay: 2, ease: 'easeInOut' },
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
      transition: { duration: 2, delay: 2, ease: 'easeInOut' },
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
