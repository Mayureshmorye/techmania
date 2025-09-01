import clsx from "clsx";
import React from "react";
import { roraima } from "../fonts";
import { motion } from "framer-motion";
import Image from "next/image";
function CollegeInfo() {
  return (
    <article id="about_bhavans" className="relative pt-20">
      <div className="relative z-20 text-center">
        <Image
          src="/images/bhavans-logo.jpg"
          alt="bhavans logo"
          width={150}
          height={150}
          className="rounded-full mx-auto brightness-90"
        />
        <div className="mb-6 px-4">
          <motion.h1
            className={clsx(
              roraima.className,
              "text-xl text-gray-100 my-2 px-4"
            )}
          >
            BHARTIYA VIDYA BHAVAN&apos;S
          </motion.h1>
          <p className="mb-6">
            M. M. College Of Arts, N. M. Institute Of Science, H. R. J. College
            Of Commerce
          </p>
          <motion.h1
            className={clsx(
              roraima.className,
              "text-5xl text-gray-100 mb-6 px-4"
            )}
          >
            Bhavan&apos;s College
          </motion.h1>
          <p className="mt-4 text-sm">(Autonomous 2020-30)</p>
          <p className="text-sm">
            Established in 1946 | Re-accredited &quot;A&quot; Grade by NAAC | Munshi
            Nagar, Andheri (W), Mumbai - 400058
          </p>
        </div>
        <hr className="mx-4 mb-6" />
        <p className="text-gray-200 text-center leading-relaxed px-6 mb-4">
          Bhavan&apos;s College, established in 1946 under the Bharatiya Vidya
          Bhavan trust, is an autonomous institution affiliated with the
          University of Mumbai. Spread across a 45-acre green campus in Andheri
          West, it is re-accredited with an “A” grade by NAAC and offers
          students a peaceful yet vibrant learning environment enriched with
          modern facilities, sports grounds, and cultural spaces.
        </p>
        <p className="text-gray-200 text-center leading-relaxed px-6 mb-4">
          The college provides a wide range of undergraduate, postgraduate, and
          doctoral programs in Science, Arts, Commerce, IT, and Management.
          Known for its strong academic foundation and active campus life,
          Bhavan&apos;s emphasizes holistic development through cultural
          activities, sports, and community engagement alongside academics.
        </p>
      </div>
    </article>
  );
}

export default CollegeInfo;
