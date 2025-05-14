import { LaptopMinimalCheck } from "lucide-react";
import React from "react";

export default function EventsAlerts() {
  return (
    <>
      <div className="p-4 space-y-2 grid grid-cols-1 gap-4">
        <div className="space-y-5">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="flex items-center gap-x-2">
              <LaptopMinimalCheck />
              <span className="text-base">Enable Event Logging</span>
            </span>
          </label>
        </div>
        <div className="space-y-5">
          <label htmlFor="controlId">
            Associated Gate or Barrier Control ID
          </label>
          <input
            id="controlId"
            name="controlId"
            placeholder="If automated control exists"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
        <div className="space-y-5">
          <label htmlFor="roi">Time Windows or Shifts</label>
          <textarea
            id="roi"
            rows="5"
            name="roi"
            placeholder="e.g., when dock is typically in use"
            className="w-full outline-none bg-transparent text-base border-gray-400 border rounded-md py-2 mt-2 px-2"
          />
        </div>
      </div>
    </>
  );
}
