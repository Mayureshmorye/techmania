"use client";
import Image from "next/image";
import { roraima } from "@/app/ui/fonts";
import { IconArrowRight, IconHome2, IconSatelliteOff } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BugBustersDetails } from "./BugBustersDetails";
import { JSX } from "react";
import { TechAThonDetails } from "./TechAThonDetails";
import { ScanVentureDetails } from "./ScanVentureDetails";
import { BrainStormBlitzDetails } from "./BrainStormBlitzDetails";
import { StockStrikeDetails } from "./StockStrikeDetails";
import { NextGenTalentDetails } from "./NextGenTalentDetails";
import { WordWarsDetails } from "./WordWarsDetails";
import { FramePeFameDetails } from "./FramePeFameDetails";
import { BattleForgeDetails } from "./BattleForgeDetails";

type MainDetails = {
  name: string;
  logoUrl: string;
  detailsComponent: () => JSX.Element;
  details: {
    day: 1 | 2 | "1 & 2";
    time: string;
    venue: string;
  };
  participation: "solo" | "duo" | "squad (4 members)";
  participationFee: number;
  registrationLink: string
};

type EventKey =
  | "bug-busters"
  | "tech-a-thon"
  | "scan-venture"
  | "battle-forge"
  | "brainstorm-blitz"
  | "the-stock-strike"
  | "next-gen-talent"
  | "word-wars"
  | "frame-pe-fame";

const EventDetails: Record<EventKey, MainDetails> = {
  "bug-busters": {
    name: "Bug Busters",
    logoUrl: "/images/eventLogos/bug-busters-logo.png",
    detailsComponent: BugBustersDetails,
    details: {
      day: 1,
      time: "11:30 AM - 01:30 PM",
      venue: "P-105",
    },
    participation: "solo",
    participationFee: 40,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSccnoA-keFlOuj-FRbJ--mdvqoie75AO7BM12Hi7NUZY7j3EA/viewform?usp=header"
  },
  "tech-a-thon": {
    name: "Tech-A-Thon",
    logoUrl: "/images/eventLogos/tech-a-thon-logo.png",
    detailsComponent: TechAThonDetails,
    details: {
      day: 2,
      time: "11:30 AM - 01:30 PM",
      venue: "P-102",
    },
    participation: "solo",
    participationFee: 40,
    registrationLink: "https://forms.gle/51eEkdrj3jCKdQCd9",
  },
  "scan-venture": {
    name: "ScanVenture",
    logoUrl: "/images/eventLogos/scan-venture-logo.png",
    detailsComponent: ScanVentureDetails,
    details: {
      day: 2,
      time: "09:00 AM - 02:00 PM",
      venue: "SFC FOYER",
    },
    participation: "squad (4 members)",
    participationFee: 200,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfNfLFWMZggkmfADfWJxvG2ZJU9n_7TqGeN46C-MkOmfAaWFA/viewform?usp=header",
  },
  "battle-forge": {
    name: "Battle Forge",
    logoUrl: "/images/eventLogos/battleforge-logo.png",
    detailsComponent: BattleForgeDetails,
    details: {
      day: 1,
      time: "11:30 AM - 03:30 PM",
      venue: "P-102 & P-103",
    },
    participation: "squad (4 members)",
    participationFee: 200,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfY2jKUv9uKCfVJvfDiQGkgTlvcTKzhTFnRtadBLGojmcMxPA/viewform?usp=header",
  },
  "brainstorm-blitz": {
    name: "Brainstorm Blitz",
    logoUrl: "/images/eventLogos/brainstorm-blitz-logo.png",
    detailsComponent: BrainStormBlitzDetails,
    details: {
      day: 2,
      time: "09:00 AM - 11:30 AM",
      venue: "P-406",
    },
    participation: "duo",
    participationFee: 50,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdC7OIXm8NpJ0pYm2T3UyRZ7dBVKh35zQlSqYlqTS6zPicNHQ/viewform?usp=header",
  },
  "the-stock-strike": {
    name: "Stock Strike",
    detailsComponent: StockStrikeDetails,
    logoUrl: "/images/eventLogos/stock-strike-logo.png",
    details: {
      day: 1,
      time: "09:30 AM - 11:00 AM",
      venue: "P-202",
    },
    participation: "solo",
    participationFee: 50,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfKd7dGEwLMVCbyMEYNvtyztflktkbOvZfs3LaL6h447tg99g/viewform?usp=header",
  },
  "next-gen-talent": {
    name: "NextGen Talent",
    logoUrl: "/images/eventLogos/next-gen-talent-logo.png",
    detailsComponent: NextGenTalentDetails,
    details: {
      day: 1,
      time: "10:00 AM - 01:00 PM",
      venue: "P-406",
    },
    participation: "solo",
    participationFee: 50,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfFfgqH-51wS1DJD1t663_DDg6KD7npUWmf-4EyENMdQj2pqQ/viewform?usp=header",
  },
  "word-wars": {
    name: "Word Wars",
    logoUrl: "/images/eventLogos/word-wars-logo.png",
    detailsComponent: WordWarsDetails,
    details: {
      day: 1,
      time: "01:30 PM - 04:00 PM",
      venue: "P-406",
    },
    participation: "solo",
    participationFee: 30,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScPTFJDmQBxEuQZWI7lQHxK_lJ1-ovhwQXsDIu8prNuOL6pkA/viewform?usp=header",
  },
  "frame-pe-fame": {
    name: "Frame pe Fame",
    logoUrl: "/images/eventLogos/frame-pe-fame-logo.png",
    detailsComponent: FramePeFameDetails,
    details: {
      day: "1 & 2",
      time: "09:30 AM - 04:00 PM & 09:00 AM - 12:00 PM",
      venue: "P-201",
    },
    participation: "solo",
    participationFee: 50,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeKTjFuNuGAwSoK3PdZUn4b4QPvJaXpiJCr90YPCZFRYf3sCA/viewform?usp=header",
  },
};

export default function App() {
  const params = useParams();
  const event = params.event;
  console.log(event, params);

  if (event === "bug-busters") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "tech-a-thon") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "scan-venture") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "battle-forge") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "brainstorm-blitz") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "the-stock-strike") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "next-gen-talent") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "word-wars") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  } else if (event === "frame-pe-fame") {
    return (
      <>
        <MainDetails eventDetails={EventDetails[event]} />
      </>
    );
  }

  return (
    <div
      className={clsx(
        "w-screen h-screen flex flex-col justify-center items-center px-4 relative overflow-x-hidden pt-32"
      )}
    >
      <Image
        alt="fancy random circle idk"
        src={"/images/fancy-circle.png"}
        width={200}
        height={200}
        className="absolute top-[10px] right-[20px] opacity-10"
      />
      <Image
        alt="fancy random circle idk"
        src={"/images/fancy-circle.png"}
        width={200}
        height={200}
        className="absolute bottom-[50px] left-[-20px] opacity-30"
      />
      <IconSatelliteOff size={64} stroke={1} />
      <h1 className={clsx(roraima.className, "text-3xl font-medium mt-4 mb-2")}>
        Opps.
      </h1>
      <p>You landed on the wrong ship</p>
      <Link
        className="flex items-center justify-center w-full gap-4 bg-white text-black py-3 active:bg-gray-200 transition-all mt-4 mb-8"
        href={"/"}
      >
        Head Home
        <IconHome2 stroke={1.3} />
      </Link>
    </div>
  );
}

function MainDetails({ eventDetails }: { eventDetails: MainDetails }) {
  return (
    <div className="w-screen min-h-screen overflow-hidden px-4 pt-32 relative">
      <Image
        src={"/images/space-bg.png"}
        alt="space-bg"
        width={390}
        height={500}
        className="w-screen h-screen overflow-hidden object-cover fixed top-0 left-0 brightness-40 object-bottom"
      />

      <div className="flex flex-col items-center gap-6 z-20 relative w-full pb-6">
        <div className="flex justify-start items-center gap-8 mb-6">
          <Image
            src={eventDetails.logoUrl}
            alt={eventDetails.name + " Logo"}
            width={90}
            height={90}
            className="rounded-full"
          />
          <h1 className={clsx(roraima.className, "text-4xl text-center text-white")}>
            {eventDetails.name}
          </h1>
        </div>

        <div className="w-full box-border mb-2 text-gray-100">
          <h4 className="text-lg mb-4 text-white">Schedule & Venue</h4>
          <div className="grid grid-cols-3 gap-4 px-4">
            <span className="flex justify-between">
              <p>Day</p>
              <span>-</span>
            </span>
            <p className="col-span-2">{eventDetails.details.day}</p>
            <span className="flex justify-between">
              <p>Venue</p>
              <span>-</span>
            </span>
            <p className="col-span-2">{eventDetails.details.venue}</p>
            <span className="flex justify-between">
              <p>Time</p>
              <span>-</span>
            </span>
            <p className="col-span-2">{eventDetails.details.time}</p>
          </div>
        </div>

        <div className="w-full box-border mb-2 text-white">
          <h4 className="text-lg mb-4 text-white">Participation Details</h4>
          <div className="grid grid-cols-3 gap-4 px-4">
            <span className="flex justify-between">
              <p>Type</p>
              <span>-</span>
            </span>
            <p className="uppercase col-span-2">{eventDetails.participation}</p>
            <span className="flex justify-between">
              <p>Fee</p>
              <span>-</span>
            </span>
            <p className="col-span-2">₹ {eventDetails.participationFee}</p>
          </div>
        </div>
      </div>

      {eventDetails.detailsComponent()}

      <Link
        className="flex items-center relative justify-center w-full gap-2 bg-white text-black py-3 active:bg-gray-200 transition-all mb-4"
        href={eventDetails.registrationLink}
      >
        Register
        <IconArrowRight stroke={1.5} className="-rotate-45" />
      </Link>
    </div>
  );
}
