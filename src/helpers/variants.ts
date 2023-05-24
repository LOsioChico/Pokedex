export const backgroundVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const pokemonBackgroundVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const pokemonVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.3,
    transition: {
      duration: 0.6,
    },
  },
}

export const pokemonStatsVariants = {
  initial: {
    width: 0,
  },
  animate: {
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

export const defaultVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
}
