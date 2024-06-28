"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pageTransitionAnimation = {
  animate: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  initial: {
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
      <div key={pathname}>
        <motion.div
          key={pathname}
          variants={pageTransitionAnimation}
          initial="initial"
          animate="animate"
          className="h-screen w-screen fixed top:0 pointer-events-none"
        />
      </div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
