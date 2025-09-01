export const BugBustersDetails = () => {
  return (
    <div className="relative">
      <h4 className="text-lg mb-4">Round Structure</h4>
      <div className="px-4 flex flex-col gap-2 pb-4">
        <h5 className="text-lg mb-2">Total 3 rounds (Python, C++, Java).</h5>
        <p className="text-gray-200">
          Round 1: Syntax errors (Easy-Moderate).
          <br />
          Round 2: Syntax + Logic errors (Moderate).
          <br />
          Round 3: Syntax + Logic errors (Hard).
        </p>
      </div>
      <h4 className="text-lg my-4">Rules & Regulations</h4>
      <ul className="px-4 flex flex-col gap-2 text-gray-200 pb-4">
        <li>- Individual participation (College ID required).</li>
        <li>- Environment: Notepad (buggy code provided).</li>
        <li>- Debug within time limit & notify volunteers.</li>
        <li>- No cheating, misbehavior or program execution.</li>
        <li>- No internet, mobile or external help allowed.</li>
        <li>- Top 50% advance each round (based on errors fixed + time).</li>
        <li>- Final 3 winners will be decided.</li>
      </ul>
    </div>
  );
};
