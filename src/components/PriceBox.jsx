import React, { useState } from "react";

const equivalents = {
  pageviews: ["10K", "50K", "100K", "500K", "1M"],
  pirces: [8, 12, 16, 24, 36],
};

export const PriceBox = () => {
  const [value, setValue] = useState(0);

  return (
    <main className="flex flex-col justify-center items-center mt-2 bg-pricing-component px-4">
      <span>{equivalents.pageviews[value]} PAGEVIEWS</span>
      <input
        type="range"
        min={0}
        max={4}
        step={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" w-full"
      />
      <div className="flex gap-1">
        <p>${equivalents.pirces[value]} </p>
        <span>/month</span>
      </div>
      <div className="flex">
        <p>Monthly Billing</p>
        <input type="text" />
        <p>Yearly Billing</p>
        <span>20%</span>
      </div>
      <div className="w-full h-[1px] bg-txt-color"></div>
      <div>
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email Reports</li>
        </ul>
        <a href="#" className="">
          Star My Trial
        </a>
      </div>
    </main>
  );
};
