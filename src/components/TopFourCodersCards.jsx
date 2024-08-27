import React from "react";
import CoderCards from "./CoderCards";

const TopFourCodersCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container-xl lg:container m-auto max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Top 4 Coders
        </h1>
        <CoderCards />
      </div>
    </div>
  );
};

export default TopFourCodersCards;
