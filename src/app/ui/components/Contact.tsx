import { roraima } from "../fonts";
import clsx from "clsx";

export const Contact = () => {
  const contact = [
    { name: "Arya Satam", no: "9321965503" },
    { name: "Mayuresh Morye", no: "9004796716" },
    { name: "Kartik Kute", no: "8329395481" },
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
              <h4 className={clsx(roraima.className, "text-2xl mb-2")}>
                {contact.name}
              </h4>
              <p
                onClick={() => copyNumber(contact.no)}
                className="underline underline-offset-4 cursor-copy"
              >
                {contact.no}
              </p>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
