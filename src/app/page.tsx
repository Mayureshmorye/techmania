"use client";
import Image from "next/image";
import Hero from "./ui/components/Hero";
import DepartmentInfo from "./ui/components/DepartmentInfo";
import FestInfo from "./ui/components/FestInfo";
import { Schedule } from "./ui/components/Schedule";
import { Events } from "./ui/components/Events";
import { Contact } from "./ui/components/Contact";
import { Thanks } from "./ui/components/Thanks";
import CollegeInfo from "./ui/components/CollegeInfo";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(255, 140, 60, 0.4),
          transparent 70%
        ),
        radial-gradient(
          circle at bottom right,
          rgba(255, 100, 0, 0.25),
          transparent 70%
        )
      `,
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="fixed inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cpath d='M0 150 Q200 120 400 150 T800 150' fill='none' stroke='%23d4a574' stroke-width='1.5'/%3E%3Cpath d='M0 250 Q200 220 400 250 T800 250' fill='none' stroke='%23e5b59d' stroke-width='1'/%3E%3Cpath d='M0 350 Q200 380 400 350 T800 350' fill='none' stroke='%23d4a574' stroke-width='1.2'/%3E%3Cpath d='M0 450 Q200 420 400 450 T800 450' fill='none' stroke='%23e5b59d' stroke-width='0.8'/%3E%3Cpath d='M0 550 Q200 580 400 550 T800 550' fill='none' stroke='%23d4a574' stroke-width='1'/%3E%3Cpath d='M0 650 Q200 620 400 650 T800 650' fill='none' stroke='%23e5b59d' stroke-width='0.6'/%3E%3C/svg%3E")
          `,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />

        <div
          className="fixed inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cpath d='M0 200 Q150 170 300 200 Q450 230 600 200 Q750 170 800 200' fill='none' stroke='%23c4935e' stroke-width='0.8'/%3E%3Cpath d='M0 300 Q150 330 300 300 Q450 270 600 300 Q750 330 800 300' fill='none' stroke='%23c4935e' stroke-width='0.6'/%3E%3Cpath d='M0 400 Q150 370 300 400 Q450 430 600 400 Q750 370 800 400' fill='none' stroke='%23c4935e' stroke-width='0.8'/%3E%3Cpath d='M0 500 Q150 530 300 500 Q450 470 600 500 Q750 530 800 500' fill='none' stroke='%23c4935e' stroke-width='0.5'/%3E%3Cpath d='M0 600 Q150 570 300 600 Q450 630 600 600 Q750 570 800 600' fill='none' stroke='%23c4935e' stroke-width='0.7'/%3E%3C/svg%3E")
          `,
            backgroundSize: "120% 120%",
            backgroundPosition: "center",
          }}
        /> */}
        <Image
          src={"/images/space-bg.png"}
          alt="space-bg"
          width={390}
          height={500}
          className="w-screen h-screen overflow-hidden object-cover fixed top-0 left-0 brightness-40 object-bottom"
        />
        <Hero />
        <CollegeInfo />
        <DepartmentInfo />
        <FestInfo />
        <Schedule />
        <Events />
        <Contact />
        <Thanks />
      </div>
    </>
  );
}
