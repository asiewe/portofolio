"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { exit } from "process";

const pageTransitionVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
  },
};

const PageTransition = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        variants={pageTransitionVariants}
        exit="hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
