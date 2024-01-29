export const container = {
  hiddden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hiddden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.5 } },
};
