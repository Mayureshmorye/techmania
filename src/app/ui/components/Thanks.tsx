import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { roraima } from "../fonts";
import clsx from "clsx";
import { Flower4 } from "./Flowers";

export const Thanks = () => {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { margin: "-0%" });
  const subtitleRef = useRef(null);
  const subtitleIsInView = useInView(subtitleRef, {
    margin: "-0%",
  });

  return (
    <div className="relative z-20 py-20 pb-[220px] text-gray-100 bg-gray-950">
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(roraima.className, "text-5xl mb-6 text-center")}
      >
        TECHMANIA 3.0
      </motion.h1>
      <motion.p
        ref={subtitleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={subtitleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-4 mb-4 text-center"
      >
        We&apos;re excited to welcome you to Techmania 3.0. Get ready for innovation,
        energy, and unforgettable experiences!
      </motion.p>
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-10">
        <Flower4 />
      </div>
    </div>
  );
};
