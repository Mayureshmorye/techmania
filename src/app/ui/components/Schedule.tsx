import { IconAlarm, IconCalendar, IconMapPin } from "@tabler/icons-react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { roraima } from "../fonts";
import { useRef } from "react";

type Event = {
  id: number;
  time: string;
  venue: string;
  name: string;
};

export const Schedule = () => {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { margin: "-20%" });
  const subtitleRef = useRef(null);
  const subtitleIsInView = useInView(subtitleRef, {
    margin: "-20%",
  });

  return (
    <div id="schedule" className="relative z-20 pt-20">
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(roraima.className, "text-5xl text-gray-100 mb-6 px-4")}
      >
        <motion.span
          ref={subtitleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={subtitleIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl text-gray-100"
        >
          MARK YOUR CALENDAR
        </motion.span>
        <br />
        Don&apos;t Miss These Events
      </motion.h1>

      <Day1Schedule />
      <Day2Schedule />
    </div>
  );
};

function Day1Schedule() {
  const schedule: Event[] = [
    {
      id: 1,
      name: "Inauguration",
      time: "09:30 AM -  10:00 AM",
      venue: "P-406",
    },
    {
      id: 2,
      name: "Stock Strike",
      time: "09:30 AM -  11:00 AM",
      venue: "P-202",
    },
    {
      id: 3,
      name: "Frame pe Fame",
      time: "09:30 AM -  04:00 PM",
      venue: "P-201",
    },
    {
      id: 4,
      name: "NextGen Talent",
      time: "10:00 AM -  01:00 PM",
      venue: "P-406",
    },
    {
      id: 5,
      name: "Bug Busters",
      time: "11:30 AM -  01:30 PM",
      venue: "P-105",
    },
    {
      id: 6,
      name: "Battle Forge",
      time: "11:30 AM -  03:30 PM",
      venue: "P-102 & P-103",
    },
    { id: 7, name: "Word Wars", time: "01:30 PM -  04:00 PM", venue: "P-406" },
  ];
  return (
    <article className="px-4">
      <div className="relative outline-[1px] outline-gray-400 grid grid-rows-2 size-16 rounded-2xl">
        <p className="w-full flex justify-center items-center bg-gray-400 rounded-t-[14px]  text-gray-200 text-center">
          SEP
        </p>
        <p className="text-center w-full flex justify-center items-center text-gray-400">
          10
        </p>
      </div>
      <div className="relative text-gray-950 ml-[32px]">
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400" />
        <div>
          <ol className="flex flex-col gap-4 py-8">
            {schedule.map((event) => (
              <li key={event.id} className="flex w-full relative">
                <span className="absolute top-1/2 left-0 -translate-1/2 size-4 outline-[1.5px] outline-gray-100 rounded-full bg-gray-400"></span>
                <div className="p-2 pl-8">
                  <div className="flex items-center gap-2 font-medium text-gray-100">
                    <IconAlarm stroke={1.5} size={18} />
                    <p className="">{event.time}</p>
                  </div>
                  <div className="flex items-center text-gray-300 gap-2">
                    <IconCalendar stroke={1.5} size={18} />
                    <p>{event.name}</p>
                  </div>
                  <div className="flex items-center text-gray-300 gap-2">
                    <IconMapPin stroke={1.5} size={18} />
                    <p>{event.venue}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

function Day2Schedule() {
  const schedule: Event[] = [
    {
      id: 1,
      name: "Frame pe Fame",
      time: "09:00 AM -  12:00 PM",
      venue: "P-201",
    },
    {
      id: 2,
      name: "ScanVenture",
      time: "09:00 AM -  02:00 PM",
      venue: "SFC FOYER",
    },
    {
      id: 3,
      name: "Brainstorm Blitz",
      time: "09:00 AM -  11:30 AM",
      venue: "P-406",
    },
    {
      id: 4,
      name: "Tech-A-Thon",
      time: "11:30 AM -  01:30 PM",
      venue: "P-102",
    },
    {
      id: 5,
      name: "Prize Distribution",
      time: "01:00 PM -  04:00 PM",
      venue: "P-406",
    },
  ];
  return (
    <article className="px-4">
      <div className="relative outline-[1px] outline-gray-400 grid grid-rows-2 size-16 rounded-2xl">
        <p className="w-full flex justify-center items-center bg-gray-400 rounded-t-[14px]  text-gray-200 text-center">
          SEP
        </p>
        <p className="text-center w-full flex justify-center items-center text-gray-400">
          11
        </p>
      </div>
      <div className="relative text-gray-950 ml-[32px]">
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400" />
        <div>
          <ol className="flex flex-col gap-4 py-8">
            {schedule.map((event) => (
              <li key={event.id} className="flex w-full relative">
                <span className="absolute top-1/2 left-0 -translate-1/2 size-4 outline-[1.5px] outline-gray-100 rounded-full bg-gray-400"></span>
                <div className="p-2 pl-8">
                  <div className="flex items-center gap-2 font-medium text-gray-100">
                    <IconAlarm stroke={1.5} size={18} />
                    <p className="">{event.time}</p>
                  </div>
                  <div className="flex items-center text-gray-300 gap-2">
                    <IconCalendar stroke={1.5} size={18} />
                    <p>{event.name}</p>
                  </div>
                  <div className="flex items-center text-gray-300 gap-2">
                    <IconMapPin stroke={1.5} size={18} />
                    <p>{event.venue}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
