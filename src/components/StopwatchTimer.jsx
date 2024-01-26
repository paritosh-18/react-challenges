import React, { useState, useEffect } from "react";

const StopwatchTimer = () => {
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    return () => {
      if (window.timer) {
        clearInterval(window.timer);
      }
    };
  }, []);

  const handleStart = () => {
    if (!window.timer) {
      window.timer = setInterval(() => {
        setSecs((prev) => prev + 1);
        // console.log("timer running");
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(window.timer);
    window.timer = null;
  };

  const handleReset = () => {
    clearInterval(window.timer);
    window.timer = null;
    setSecs(0);
  };
  return (
    <div>
      <h1 className="m-2 p-2 font-bold text-2xl">
        Description: Implement a Stopwatch/timmer as shown below with start
        ,stop and reset button.
      </h1>
      <div className="ml-10 mt-10">
        <div className="ml-10">
          <span>{Math.floor(secs / 60)} mins</span>
          <span className="ml-2">{secs % 60} secs</span>
        </div>
        <div>
          <button
            className=" border border-black bg-green-200 m-2 px-2 w-16 rounded-lg"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className=" border border-black bg-yellow-200 m-2 px-2 w-16 rounded-lg"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className=" border border-black bg-red-400 m-2 px-2 w-16 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopwatchTimer;
