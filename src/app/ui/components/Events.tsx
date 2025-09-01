import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { roraima } from "../fonts";
import { EventCard } from "./EventCard";

type Event = {
  id: number;
  logoUrl: string;
  title: string;
  subtitle: string;
  knowMoreHref: string;
  registrationLink: string;
};

export const Events = () => {
  return (
    <div className="relative z-20">
      <TechnicalEvents />
      <NonTechnicalEvents />
    </div>
  );
};

function TechnicalEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-15%" });

  const events: Event[] = [
    {
      id: 1,
      logoUrl: "/images/eventLogos/bug-busters-logo.png",
      title: "Bug Busters",
      subtitle:
        "Get ready to debug like a pro! Identify and fix errors in our challenging coding problems. Demonstrate your problem-solving skills and attention to detail. Can you debug yourway to victory?",
      knowMoreHref: "/info/bug-busters",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSccnoA-keFlOuj-FRbJ--mdvqoie75AO7BM12Hi7NUZY7j3EA/viewform?usp=header",
    },
    {
      id: 2,
      logoUrl: "/images/eventLogos/tech-a-thon-logo.png",
      title: "Tech-A-Thon",
      subtitle:
        "Design comes alive with code! We provide the frontend design you bring it to life with code. Showcase your web development skills and create a functional website. How quickly can you turn design into reality?",
      knowMoreHref: "/info/tech-a-thon",
      registrationLink: "https://forms.gle/51eEkdrj3jCKdQCd9",
    },
  ];

  return (
    <article className="pt-20" id="tech_events">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          roraima.className,
          "text-5xl text-gray-100 text-center mb-10"
        )}
      >
        Technical Events
      </motion.h1>
      <ul className="flex flex-col items-center gap-10">
        {events.map((event, i) => {
          return <EventCard event={event} key={i} i={i} />;
        })}
      </ul>
    </article>
  );
}

function NonTechnicalEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-15%" });

  const events: Event[] = [
    {
      id: 1,
      logoUrl: "/images/eventLogos/scan-venture-logo.png",
      title: "ScanVenture",
      subtitle:
        "Scanventure is not merely a hunt but a tech journey where each scan reveals secrets and clues. The challenge intensifies with every step, rewarding only the sharpest minds and relentless seekers with glory.",
      knowMoreHref: "/info/scan-venture",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfNfLFWMZggkmfADfWJxvG2ZJU9n_7TqGeN46C-MkOmfAaWFA/viewform?usp=header",
    },
    {
      id: 2,
      logoUrl: "/images/eventLogos/battleforge-logo.png",
      title: "Battle Forge",
      subtitle:
        "Gear up for an action-packed BGMI tournament where skill, strategy, and teamwork decide the champions! Experience thrilling battles and unforgettable moments as top squads fight for ultimate glory.",
      knowMoreHref: "/info/battle-forge",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfY2jKUv9uKCfVJvfDiQGkgTlvcTKzhTFnRtadBLGojmcMxPA/viewform?usp=header",
    },
    {
      id: 3,
      logoUrl: "/images/eventLogos/brainstorm-blitz-logo.png",
      title: "Brainstorm Blitz",
      subtitle:
        "Get ready for a fast-paced mental showdown where quick thinking is the key to victory. Team up with friends, race through fun facts and tricky logic, and don't slow down—or you'll fall behind!",
      knowMoreHref: "/info/brainstorm-blitz",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdC7OIXm8NpJ0pYm2T3UyRZ7dBVKh35zQlSqYlqTS6zPicNHQ/viewform?usp=header",
    },
    {
      id: 4,
      logoUrl: "/images/eventLogos/stock-strike-logo.png",
      title: "The StockStrike",
      subtitle:
        "Experience trading without real money in a fast-paced simulation. Buy, sell, and strategize as market moves change rapidly. Build your portfolio, outsmart competitors, and demonstrate your market dominance without financial risk.",
      knowMoreHref: "/info/the-stock-strike",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfKd7dGEwLMVCbyMEYNvtyztflktkbOvZfs3LaL6h447tg99g/viewform?usp=header",
    },
    {
      id: 5,
      logoUrl: "/images/eventLogos/next-gen-talent-logo.png",
      title: "NextGen Talent",
      subtitle:
        "Got a talent that makes heads turn or brings smiles? Whether you sing, dance, or crack jokes, this is your moment to own the spotlight! Bring your best act, wow the crowd, and you might just take home the crown.",
      knowMoreHref: "/info/next-gen-talent",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfFfgqH-51wS1DJD1t663_DDg6KD7npUWmf-4EyENMdQj2pqQ/viewform?usp=header",
    },
    {
      id: 6,
      logoUrl: "/images/eventLogos/word-wars-logo.png",
      title: "Word Wars",
      subtitle:
        "Gear up for a clash of ideas where wit meets wisdom! Take the stage, defend your views, and challenge opponents with sharp logic. Every word counts, every second matters—so think fast, speak strong, and let your voice lead you to victory!",
      knowMoreHref: "/info/word-wars",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScPTFJDmQBxEuQZWI7lQHxK_lJ1-ovhwQXsDIu8prNuOL6pkA/viewform?usp=header",
    },
    {
      id: 7,
      logoUrl: "/images/eventLogos/frame-pe-fame-logo.png",
      title: "Frame pe Fame",
      subtitle:
        "Unleash your visual storytelling skills in a 2- round competition that tests your photography, reel making, and cinematography talents!",
      knowMoreHref: "/info/frame-pe-fame",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeKTjFuNuGAwSoK3PdZUn4b4QPvJaXpiJCr90YPCZFRYf3sCA/viewform?usp=header",
    },
  ];

  return (
    <article className="py-20" id="non_tech_events">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          roraima.className,
          "text-5xl text-gray-100 text-center mb-10"
        )}
      >
        Non Technical Events
      </motion.h1>
      <ul className="flex flex-col items-center gap-10">
        {events.map((event, i) => (
          <EventCard event={event} key={i} i={i} />
        ))}
      </ul>
    </article>
  );
}
