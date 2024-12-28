export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export const imageVariants = {
  hidden: { opacity: 0, x: -100 }, // Start from left (off-screen)
  visible: {
    opacity: 1,
    x: 0, // Center position
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  exit: {
    opacity: 0,
    x: -100, // Move off-screen to the right
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export const box = {
  backgroundColor: "#0a66c2",
  borderRadius: 50
};
