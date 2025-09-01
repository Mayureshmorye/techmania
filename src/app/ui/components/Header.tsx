"use client";
import { IconArrowRight, IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";
import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";
import { roraima } from "../fonts";
import Image from "next/image";
type HeaderLink = {
  linkTo: string;
  text: string;
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerLink: HeaderLink[] = [
    { linkTo: "/#home", text: "Home" },
    { linkTo: "/#about_bhavans", text: "About Bhavans" },
    { linkTo: "/#about_bsc_it", text: "About BSC I.T." },
    { linkTo: "/#about_techmania", text: "What is TechMania?" },
    { linkTo: "/#schedule", text: "Schedule" },
    { linkTo: "/#tech_events", text: "Technical Events" },
    { linkTo: "/#non_tech_events", text: "Non Technical Events" },
    { linkTo: "/#contact_us", text: "Contact Us" },
  ];

  return (
    <header className="px-6 pt-[5px] fixed z-50 text-gray-100 bg-gray-950">
      <div className="w-[calc(100vw-48px)]"
      >
        <div className="md:grid md:grid-cols-3 flex items-center justify-between gap-4 p-3 relative">
          <Image src="/images/bhavans-logo.jpg" alt="bhavans logo" width={30} height={30} className="rounded-full"/>
          <Logo />
          <IconMenu
            className="cursor-pointer md:mx-auto"
            onClick={() => setIsOpen(true)}
          />
          <Link
            href={"#tech_events"}
            className="md:block hidden bg-gray-950 ml-auto text-gray-100 px-6 py-2"
          >
            Register
          </Link>
        </div>
      </div>
      <div
        className={clsx(
          "w-screen h-screen fixed bg-gray-950 pt-[19px] transition-all -left-1/1 top-0",
          isOpen && "top-0 left-0 z-50"
        )}
      >
        <div className="w-9/10 absolute left-1/2 -translate-x-1/2 px-3">
          <IconX
            onClick={() => setIsOpen(false)}
            size={28}
            className="ml-auto"
          />
          <ul className="grid gap-2 mt-4">
            {headerLink.map((i) => (
              <li
                key={i.linkTo}
                className={clsx(
                  roraima.className,
                  "text-xl md:text-2xl py-2 flex items-center justify-between pr-1 cursor-pointer"
                )}
              >
                <Link onClick={() => setIsOpen(false)} href={i.linkTo}>
                  {i.text}
                </Link>
                <IconArrowRight className="-rotate-45" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
