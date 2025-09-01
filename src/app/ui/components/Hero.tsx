import clsx from "clsx";
import { roraima } from "../fonts";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const convertMsToTimeUnits = (ms: number) => {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

function Hero() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { margin: "0%", once: true });
  const subtitleRef = useRef(null);
  const subtitleIsInView = useInView(subtitleRef, {
    margin: "0%",
    once: true,
  });
  const textRef = useRef(null);
  const textIsInView = useInView(textRef, { margin: "0%", once: true });
  const ctaButtonRef = useRef(null);
  const ctaIsInView = useInView(ctaButtonRef, { margin: "0%", once: true });

  const [timeLeft, setTimeLeft] = useState(() => {
    const eventDate = new Date(2025, 8, 10, 9, 30); // September 10, 2025, 9:30 AM
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    return convertMsToTimeUnits(Math.max(0, difference));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(2025, 8, 10, 9, 30);
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft(convertMsToTimeUnits(difference));
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/techmania-brochure.pdf";
    link.download = "Techmania_3.0_brochure.pdf";
    link.click();
  };

  return (
    <div
      id="home"
      className="relative z-20 flex flex-col justify-center items-center min-h-screen pt-32"
    >
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          roraima.className,
          "text-5xl mb-4 text-center text-gray-100 font-bold "
        )}
      >
        TECHMANIA <br /> 3.0
      </motion.h1>
      <motion.h4
        ref={subtitleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={subtitleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl mb-4 text-center text-gray-200"
      >
        World where innovation meets imagination
      </motion.h4>
      <motion.p
        ref={textRef}
        initial={{ opacity: 0, y: 40 }}
        animate={textIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-4 text-center mb-8 text-gray-200"
      >
        Join us for two days of cutting-edge technology, inspiring talks, and
        competitions. Connect with industry leaders, showcase your innovations,
        and be part of the future.
      </motion.p>
      <motion.button
        ref={ctaButtonRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-8 py-3 bg-gray-950 border border-gray-200 text-gray-200 relative before:border before:border-gray-200 before:w-full before:h-full before:-z-10 before:absolute before:top-[-8px] before:left-[-8px]"
        onClick={handleDownload}
      >
        Download Brochure
      </motion.button>

      <div
        className={clsx(
          roraima.className,
          "text-3xl text-gray-100 text-center mt-20 mb-4"
        )}
      >
        Time Till Event:
      </div>
      <div className="flex justify-between items-center w-full px-8 text-gray-200 ">
        <div className="text-center">
          <h2 className={clsx(roraima.className, "text-5xl")}>
            {timeLeft.days}
          </h2>
          <p className="text-sm mt-1">Days</p>
        </div>

        <span className="text-5xl pb-6">:</span>

        <div className="text-center">
          <h2 className={clsx(roraima.className, "text-5xl")}>
            {timeLeft.hours}
          </h2>
          <p className="text-sm mt-1">Hours</p>
        </div>

        <span className="text-5xl pb-6">:</span>

        <div className="text-center">
          <h2 className={clsx(roraima.className, "text-5xl")}>
            {timeLeft.minutes}
          </h2>
          <p className="text-sm mt-1">Minutes</p>
        </div>

        <span className="text-5xl pb-6">:</span>

        <div className="text-center">
          <h2 className={clsx(roraima.className, "text-5xl")}>
            {timeLeft.seconds}
          </h2>
          <p className="text-sm mt-1">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
