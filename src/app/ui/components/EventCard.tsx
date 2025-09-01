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
      className={clsx(
        "flex flex-col items-center gap-4 text-center mr-4 mx-[24px] p-6",
        // "bg-gradient-to-br from-[#1e293bcb] to-[#312e81d2] bg-opacity-50 border-2 border-t-32 rounded-xl border-[#5c57e63e]" indigo blueish bg
        // "[background:linear-gradient(135deg,#4f4f4fcb,#000000cb)] border-2 border-[#5f5f5fd2] rounded-xl" granite gray black gradient with border
        // "border-2 border-gray-500 rounded-xl inset-shadow-[0px_0px_20px_15px] bg-gray-500/30 inset-shadow-gray-500/30" gray with border inset shadow
        "[background:linear-gradient(135deg,#8b401ac0,#000000cb)] border-2 border-[#8b401a] rounded-xl inset-shadow-[0px_0px_20px_15px] inset-shadow-[#8b401a]/40"
        // "bg-[#00cee1c0] rounded-xl shadow-[0px_0px_10px_10px] shadow-[#00cee16c]" blue bg with blue glowing shadow
      )}
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
      <p className="text-gray-300 pb-4">{event.subtitle}</p>
      <Link
        className="border-2 border-[#8b401a] bg-gray-950/10 text-gray-300 transition-all w-full py-3"
        href={event.knowMoreHref}
      >
        Read more ...
      </Link>
      <Link
        className="bg-[#8b401a] hover:bg-[#a94e22] text-white 
border-2 border-[#a94e22] shadow-lg shadow-[#8b401a]/50 w-full flex items-center justify-center py-3"
        // className="flex items-center justify-center w-full gap-2 bg-white text-black py-3 active:bg-gray-200 transition-all"
        href={event.registrationLink}
      >
        Register
        <IconArrowRight stroke={1.5} className="-rotate-45" />
      </Link>
    </motion.li>
  );
};
