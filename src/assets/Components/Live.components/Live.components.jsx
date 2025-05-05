import React, { useEffect, useState } from "react";
import ProgressBar from "./progressy";
import { DockData } from "./liveDockData";

export default function Live() {
  const [progress, setProgress] = useState(10);
  const [selectDock, setSelectDock] = useState(null);

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Get selected dock data
  const selectedDockData = DockData.find((dock) => dock.id === selectDock);

  const [select, setSelect] = useState(null);
  const handleSelect = () => {
    setSelect(!select);
  };
  return (
    <>
      
      {/* Video View Section */}
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl">
          <h1>Live Camera View</h1>
        </div>
        <div>
          <button
            onClick={handleSelect}
            className={`px-4 py-2 rounded-md text-white transition-colors duration-500 ease-in-out ${
              select ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {select ? "Live View On" : "Live View Off"}
          </button>
        </div>
      </div>

      <div
        className={`w-full h-[600px] relative transition-all duration-700 ease-in-out overflow-hidden ${
          select
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className={`flex flex-col items-center justify-center h-full `}>
          {selectedDockData ? (
            <video
              key={selectedDockData.id}
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src={selectedDockData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ):(
            <div className="text-6xl text-white font-medium h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 w-full flex items-center justify-center">Select a Dock</div>
          ) }
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {/* Dock Buttons */}
        <div className="rounded border border-gray-300 p-2 shadow-lg h-51">
          <div className="text-2xl font-medium">
            <p className="flex">
              <img
                src="images/icons/shipping.svg"
                alt=""
                className="pr-5 h-8"
              />
              Dock Cards (Live Status)
            </p>
            <hr className="border border-gray-300 mt-3" />
          </div>
          <div className="flex">
            <div className="gap-2 flex flex-wrap max-h-32 overflow-y-auto no-scrollbar py-5 px-1">
              {DockData.map((items) => (
                <button
                  key={items.id}
                  onClick={() => setSelectDock(items.id)}
                  className={`px-4 py-2 rounded-md font-medium text-sm bg-green-400 text-white transition-colors duration-500 ease-in-out ${
                    selectDock === items.id ? "light-blue" : "dark-blue"}`}
                >
                  {items.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Queue Length */}
        <div className="rounded border border-gray-300 p-2 shadow-lg h-51">
          <div className="text-2xl font-medium">
            <p className="flex">
              <img
                src="images/icons/warehouse-.svg"
                alt=""
                className="pr-5 h-8"
              />
              Live Queue Length
            </p>
            <hr className="border border-gray-300 mt-3" />
          </div>
          <div className="text-center font-light text-6xl items-center justify-center flex h-35">
            5
          </div>
        </div>

        {/* Truck Plate */}
        <div className="rounded border border-gray-300 p-2 shadow-lg h-51">
          <div className="text-2xl font-medium">
            <p className="flex">
              <img src="images/icons/truck.svg" alt="" className="pr-5 h-8" />
              Current Truck No. Plate
            </p>
            <hr className="border border-gray-300 mt-3" />
          </div>
          <div className="text-center font-light text-5xl items-center justify-center flex h-35">
            ABC / 123
          </div>
        </div>

        {/* Time + Progress */}
        <div className="rounded grid grid-rows-2 gap-3">
          <div className="rounded border border-gray-300 p-2 shadow-lg">
            <div className="text-lg font-medium">
              <p className="flex">
                <img src="images/icons/clock.svg" alt="" className="pr-5 h-8" />
                Start Time & Elapsed
              </p>
              <hr className="border border-gray-300 mt-1" />
            </div>
            <div className="flex justify-between items-center py-1 text-lg">
              <div>{new Date().toLocaleTimeString()}</div>
              <div>{progress}s</div>
            </div>
          </div>

          <div className="rounded border border-gray-300 p-2 shadow-lg">
            <div className="text-lg font-medium">
              <p className="flex">
                <img
                  src="images/icons/progress.svg"
                  alt=""
                  className="pr-5 h-8"
                />
                Loading Progress
              </p>
              <hr className="border border-gray-300 mt-1" />
            </div>
            <div className="mt-2">
              <ProgressBar progress={progress} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
