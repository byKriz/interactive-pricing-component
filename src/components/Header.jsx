import React from "react";

export const Header = () => {
  return (
    <header className=" flex flex-col justify-center items-center gap-4 max-w-2xl">
      <h1 className="text-3xl font-extrabold text-center text-cta">Simple, traffic-based pricing</h1>
      <div className="text-txt-color flex flex-col justify-center items-center font-semibold gap-1 sm:flex-row ">
        <span>Sing-up for our 30-day trial.</span>
        <span>No credit card required</span>
      </div>
    </header>
  );
};
