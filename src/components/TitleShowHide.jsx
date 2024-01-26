import React from "react";
import { useState } from "react";

const TitleShowHide = () => {
  const [showTitle, setShowTitle] = useState(true);
  return (
    <div>
      <h1 className="m-2 p-2 font-bold text-2xl">
        Description: Implement a button to show/hide the text content
      </h1>
      <div className="flex ml-6 mt-10">
        <button
          className=" border border-black bg-green-200 m-2 px-2 w-16 rounded-lg"
          onClick={() => {
            setShowTitle(!showTitle);
          }}
        >
          {showTitle ? "hide" : "show"}
        </button>
        {showTitle && <h1 className="m-2 px-2">Welcome to React Challenges</h1>}
      </div>
    </div>
  );
};

export default TitleShowHide;
