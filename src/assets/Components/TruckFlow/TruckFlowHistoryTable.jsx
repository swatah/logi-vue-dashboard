import React, { useState } from "react";

export default function TruckFlowHistoryTable() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="rounded-lg shadow mt-8 bg-white">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Truck Flow History (Last Day's Snapshot)
          </h2>
        </div>
        <div className="flex flex-row items-start gap-4">
          <div className="flex">
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
      </div>
      <style>{`
        th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
        {/* Total Trucks Summary */}
        <div className="border border-gray-300 rounded">
          <h3 className="text-lg font-semibold text-center p-3 bg-gray-200">
            Total Trucks
          </h3>
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">2025-04-21</td>
                <td className="p-2 border">28</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Trucks Turnback vs Overstays */}
        <div className="border border-gray-300 rounded col-span-2">
          <h3 className="text-lg font-semibold text-center p-3 bg-gray-200">
            Turnback vs Overstays
          </h3>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Turnback</th>
                <th className="p-2 border">Overstays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">2025-04-21</td>
                <td className="p-2 border">13</td>
                <td className="p-2 border">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dwell Time Summary */}
        <div className="border border-gray-300 rounded col-span-3">
          <h3 className="text-lg font-semibold text-center p-3 bg-gray-200">
            Dwell Time Summary
          </h3>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Avg</th>
                <th className="p-2 border">Exp</th>
                <th className="p-2 border">Completed</th>
                <th className="p-2 border">Delay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">2025-04-21</td>
                <td className="p-2 border">01:15:20</td>
                <td className="p-2 border">01:00:00</td>
                <td className="p-2 border">01:23:20</td>
                <td className="p-2 border">00:23:20</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Idle Time (Loading / Unloading) */}
        <div className="border border-gray-300 rounded col-span-2">
          <h3 className="text-lg font-semibold text-center p-3 bg-gray-200">
            Idle Time
          </h3>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Total Idle</th>
                <th className="p-2 border">Loading</th>
                <th className="p-2 border">Unloading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">2025-04-21</td>
                <td className="p-2 border">01:03:00</td>
                <td className="p-2 border">0h 35m</td>
                <td className="p-2 border">0h 28m</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
