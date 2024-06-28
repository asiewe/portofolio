"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="h-screen w-screen fixed top-0 left-0 right-0 flex z-50 pointer-events-none"
      >
        <Stairs />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
