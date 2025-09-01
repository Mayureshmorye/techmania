import clsx from "clsx";
import React, { useRef } from "react";
import { roraima } from "../fonts";
import { motion, useInView } from "framer-motion";

function FestInfo() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { margin: "-20%" });
  const subtitleRef = useRef(null);
  const subtitleIsInView = useInView(subtitleRef, {
    margin: "-20%",
    once: true,
  });
  return (
    <article id="about_techmania" className="relative pt-20">
      <div className="relative z-20">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 0 }}
          animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={clsx(
            roraima.className,
            "text-5xl text-gray-100 mb-6 text-center"
          )}
        >
          <motion.span
            ref={subtitleRef}
            initial={{ opacity: 0, y: 0 }}
            animate={subtitleIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl text-gray-200"
          >
            What is
          </motion.span>{" "}
          <br />
          TECHMANIA ?
        </motion.h1>
                <p className="text-gray-200 text-center leading-relaxed px-6 mb-4">
          Get ready for an unforgettable experience at TECHMANIA 3.0, the
          much-anticipated annual fest organized by the IT Department of
          Bhavan&apos;s College! Building on last year&apos;s overwhelming
          success, this celebration of creativity, innovation, and collaboration
          features diverse technical and non-technical events designed to engage
          and inspire.
        </p>
                <p className="text-gray-200 text-center leading-relaxed px-6 mb-8">
          Whether you&apos;re a tech enthusiast eager to showcase skills, a
          learner seeking new insights, or someone looking for fun with friends,
          TECHMANIA offers something for everyone. Join us for this dynamic
          event where learning meets fun, memories are made, and you can
          connect, compete, and celebrate in a vibrant campus atmosphere. We
          can&apos;t wait to see you there!
        </p>
      </div>
    </article>
  );
}

export default FestInfo;
