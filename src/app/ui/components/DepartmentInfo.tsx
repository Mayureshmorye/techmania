import clsx from "clsx";
import React, { useRef } from "react";
import { roraima } from "../fonts";
import { motion, useInView } from "framer-motion";

function DepartmentInfo() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { margin: "-20%" });
  const subtitleRef = useRef(null);
  const subtitleIsInView = useInView(subtitleRef, {
    margin: "-20%",
  });

  return (
    <article id="about_bsc_it" className="relative pt-20">
      <div className="relative z-20">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={clsx(
            roraima.className,
            "text-5xl text-gray-100 mb-6 px-4 text-center"
          )}
        >
          <motion.span
            ref={subtitleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={subtitleIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl text-gray-100"
          >
            About
          </motion.span>
          <br />
          BSC I.T.
        </motion.h1>
        <p className="text-gray-200 text-center leading-relaxed px-6 mb-4">
          The Department of Information Technology, established in 2001, has
          been offering graduation in Information Technology since its inception
          at the University of Mumbai. In this era of the digital world, the IT
          department provides an excellent atmosphere for students to learn and
          acquire necessary skills as per industry requirements, enriched with
          experienced faculty members and well-equipped laboratories.
        </p>
        <p className="text-gray-200 text-center leading-relaxed px-6 mb-4">
          The department has established strong links with industry and academic
          experts, organizing various webinars and guest lectures alongside
          high-quality teaching. Each year, enthusiastic students undertake
          several real-time projects as the department strives for continuous
          improvement and sets a good example in the effective use of
          technology, offering students a platform for overall development that
          ensures the right mix of academics with fun and frolic.
        </p>
      </div>
    </article>
  );
}

export default DepartmentInfo;
