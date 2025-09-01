export const StockStrikeDetails = () => {
  return (
    <div className="relative">
      <h4 className="text-lg mb-4">Rules & Regulations</h4>
      <ul className="px-4 flex flex-col gap-2 pb-4 text-gray-200">
        <li>- Virtual trading account with ₹10,00,000 balance.</li>
        <li>- Only official simulation software allowed.</li>
        <li>- Minimum 3 trades (buy/sell) required.</li>
        <li>- Simulated stock market with live/practice data.</li>
        <li>- Instruments: Equities, Indices, or ETFs (as available).</li>
        <li>- Event duration: 1hr 30mins hours.</li>
        <li>- Winner = Highest portfolio value at end.</li>
        <li>- Tie-breaker = More successful trades.</li>
        <li>- Organizers decision is final, no arguments allowed.</li>
      </ul>
    </div>
  );
};
