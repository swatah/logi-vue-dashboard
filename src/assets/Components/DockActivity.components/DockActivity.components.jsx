import React from "react";
import HistoricalDockSessions from "./HistoricalDockSessions";
import HeatmapDockUtilization from "./HeatmapDockUtilization";

export default function DockActivity() {
  const mockDates = [
    { x: "2025-04-01", y: 1000000 },
    { x: "2025-04-02", y: 1500000 },
    { x: "2025-04-03", y: 1300000 },
    { x: "2025-04-04", y: 1700000 },
    { x: "2025-04-05", y: 1200000 },
    { x: "2025-04-06", y: 1800000 },
    { x: "2025-04-07", y: 1600000 },
    { x: "2025-04-08", y: 1400000 },
    { x: "2025-04-09", y: 1750000 },
    { x: "2025-04-10", y: 1900000 },
    { x: "2025-04-11", y: 1550000 },
    { x: "2025-04-12", y: 1650000 },
    { x: "2025-04-13", y: 1700000 },
    { x: "2025-04-14", y: 1850000 },
    { x: "2025-04-15", y: 1500000 },
    { x: "2025-04-16", y: 1950000 },
    { x: "2025-04-17", y: 2000000 },
    { x: "2025-04-18", y: 1750000 },
    { x: "2025-04-19", y: 1800000 },
    { x: "2025-04-20", y: 1900000 },
  ];

  return (
    <>
      <div className="font-bold text-xl">
        <h1>Dock Activity</h1>
      </div>
      <hr className="border border-gray-200" />
      <div className="w-full">
        <HistoricalDockSessions dates={mockDates} />
      </div>
      <div className="">
        <HeatmapDockUtilization/>
      </div>
    </>
  );
}
