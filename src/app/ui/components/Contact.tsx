import { IconAt } from "@tabler/icons-react";
import { roraima } from "../fonts";
import clsx from "clsx";

export const Contact = () => {
  const contact = [
    { designation: "Chief Organizer",name: "Arya Satam", no: "9321965503" },
    { designation: "Chief Organizer",name: "Mayuresh Morye", no: "9004796716" },
    { designation: "Event Head",name: "Kartik Kute", no: "8329395481" },
  ];

  const copyNumber = async (no: string) => {
    try {
      await navigator.clipboard.writeText(no);
      console.log("Text copied to clipboard successfully!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative z-20 pt-20 bg-gray-950" id="contact_us">
      <h1
        className={clsx(
          roraima.className,
          "text-5xl text-gray-100 text-center mb-6"
        )}
      >
        Contact Us
      </h1>
      <ul className="px-4">
        {contact.map((contact, i) => (
          <li key={i}>
            <div className="py-8 text-center text-gray-100">
              <p className="text-gray-300 flex justify-center items-center text-sm"><IconAt stroke={1.5} size={18}/> {contact.designation}</p>
              <h4 className={clsx(roraima.className, "text-3xl mb-4")}>
                {contact.name}
              </h4>
              <p
                onClick={() => copyNumber(contact.no)}
                className="underline underline-offset-4 cursor-copy"
              >
                {contact.no}
              </p>
            </div>
            {i !== 2 && <div className="w-full h-[1px] bg-white"></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};
