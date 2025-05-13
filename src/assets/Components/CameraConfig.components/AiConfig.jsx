import {
    ArrowDownFromLine,
    ArrowUpFromLine,
  CarFront,
  CircleAlert,
  LogIn,
  LogOut,
  PackageSearch,
  Thermometer,
  Truck,
  User,
} from "lucide-react";
import React, { useState } from "react";

export default function AiConfig() {
  const sensitivity = ["Low", "Medium", "High", "Very High"];
  const [modules, setModules] = useState({
    person: false,
    lpr: false,
    forklift: false,
    intrusion: false,
    pallet: false,
  });
  const [events, setEvents] = useState({
    load: false,
    unLoad: false,
    entry: false,
    exit: false,
    tamper: false,
  });

  const [threshold, setThreshold] = useState(70);

  const handleToggle = (key) => {
    setModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="font-semibold mb-2">Enabled Modules</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 py-5">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={modules.person}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("person")}
              />
              <span className="flex items-center gap-x-2">
                <User />
                <span className="text-base">Person</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={modules.lpr}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("lpr")}
              />
              <span className="flex items-center gap-x-2">
                <CarFront />
                <span className="text-base">Lpr</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={modules.forklift}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("forklift")}
              />
              <span className="flex items-center gap-x-2">
                <Truck />
                <span className="text-base">Forklift</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={modules.intrusion}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("intrusion")}
              />
              <span className="flex items-center gap-x-2">
                <CircleAlert />
                <span className="text-base">Intrusion</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={modules.pallet}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("pallet")}
              />
              <span className="flex items-center gap-x-2">
                <PackageSearch />
                <span className="text-base">Pallet</span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-2">
          Detection Confidence Threshold: {threshold}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
        />
      </div>
      <div className="space-y-5">
        <label htmlFor="streamType">Stream Type</label>
        <select className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2.5 mt-2 px-2">
          <option>Select Stream Type</option>
          {sensitivity.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="space-y-5">
        <label htmlFor="roi">Detection Zones / ROI</label>
        <textarea
          id="roi"
          rows="5"
          name="roi"
          placeholder="Optional coordinates or mask overlays"
          className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
        />
      </div>
      <div>
        <h2 className="font-semibold mb-2">Trigger Events</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 py-5">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={events.load}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("load")}
              />
              <span className="flex items-center gap-x-2">
              <ArrowUpFromLine />
                <span className="text-base">Load</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={events.unLoad}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("unLoad")}
              />
              <span className="flex items-center gap-x-2">
              <ArrowDownFromLine />
                <span className="text-base">Unload</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={events.entry}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("entry")}
              />
              <span className="flex items-center gap-x-2">
              <LogIn />
                <span className="text-base">Entry</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={events.exit}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("exit")}
              />
              <span className="flex items-center gap-x-2">
              <LogOut />
                <span className="text-base">Exit</span>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={events.tamper}
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleToggle("tamper")}
              />
              <span className="flex items-center gap-x-2">
              <Thermometer />
                <span className="text-base">Tamper</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
