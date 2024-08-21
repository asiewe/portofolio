"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center">
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
        <Image
          src="/imgs/me.jpg"
          priority
          alt="Armel's picture"
          quality={100}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Photo;
