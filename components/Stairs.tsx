// variants

import { Variants, motion } from "framer-motion";

const stairAnimation: Variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: ["100%", "0%"] as any,
};

const Stairs = () => {
  const numberOfSteps = 6;
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs
        Each div will have the same animation defined by the stairsAnimation object
        the delay  for each div is calculated dinamically based on it's reversed index
        creating a staggered effect with decreasing delay for each subsequent step.
        */}
      {[...Array(numberOfSteps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: (numberOfSteps - (index + 1)) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
