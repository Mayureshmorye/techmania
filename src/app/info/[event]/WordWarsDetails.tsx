import { IconPencil } from "@tabler/icons-react";

export const WordWarsDetails = () => {
  return (
    <div className="relative">
      <h4 className="text-lg mb-4">Debate Structure (7-8 mins)</h4>
      <ul className="px-4 flex flex-col gap-2 pb-4 text-gray-200 mb-2">
        <li>- Opening Statements: 1 minute each</li>
        <li>- Rebuttals: 1 minute each</li>
        <li>- Open Discussion (Back & Forth): 2 minute</li>
        <li>- Closing Statements: 30 seconds eac</li>
      </ul>
      <h4 className="text-lg mb-4">Rules & Regulations</h4>
      <ul className="px-4 flex flex-col gap-2 pb-4 text-gray-200">
        <li>- Topic will be shared One day before the event.</li>
        <li>- Mode of Language: English and Hindi</li>
        <li>- Speak respectfully and maintain decorum.</li>
        <li>
          - Use of foul or personal language will lead to disqualification.
        </li>
        <li>- Arguments with organizers/judges will not be tolerated.</li>
      </ul>
      <div className="p-4 mb-2 bg-black rounded-lg">
        <h4 className="text-lg mb-4 flex gap-2 items-center bg-gray-100 text-black rounded-lg justify-center">
          <IconPencil size={20} stroke={1.5}/> Note
        </h4>
        <p className="text-gray-200 text-sm">
          The performance will be ranked based on this parameters (Speaking
          Style & Clarity, Confidence & Presence, Content & Argument Logic,
          etc.)
        </p>
      </div>
    </div>
  );
};
