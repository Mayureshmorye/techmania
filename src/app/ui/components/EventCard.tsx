import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { roraima } from "../fonts";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

type Event = {
  id: number;
  logoUrl: string;
  title: string;
  subtitle: string;
  knowMoreHref: string;
  registrationLink: string;
};

export const EventCard = ({ event, i }: { event: Event; i: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0%" });
  return (
    <motion.li
      key={event.id}
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95, rotate: 2 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
          : { opacity: 0, y: 40, scale: 0.95, rotate: 2 }
      }
      transition={{
        duration: 0.6,
        delay: i * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      className="flex flex-col items-center gap-4 text-center mr-4 mx-[24px] p-6 bg-gray-950"
    >
      <Image
        src={event.logoUrl}
        alt={event.title + " logo"}
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className={clsx(roraima.className, "text-3xl mt-4")}>
        {event.title}
      </h1>
      <p className="text-gray-400 pb-4">{event.subtitle}</p>
      <Link
        className="border border-white active:bg-gray-900 transition-all w-full py-3"
        href={event.knowMoreHref}
      >
        Read more ...
      </Link>
      <Link
        className="flex items-center justify-center w-full gap-2 bg-white text-black py-3 active:bg-gray-200 transition-all"
        href={event.registrationLink}
      >
        Register
        <IconArrowRight stroke={1.5} className="-rotate-45" />
      </Link>
    </motion.li>
  );
};
