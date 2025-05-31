import React, { useEffect, useState } from 'react';
import TruckData from './truckData';

export default function TruckTimeline() {
  const [numberplate, setNumberplate] = useState('');
  const [debouncedPlate, setDebouncedPlate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [day, setDay] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedPlate(numberplate);
    }, 400);
    return () => clearTimeout(timeout);
  }, [numberplate]);

  // Filtering logic
  useEffect(() => {
    let data = TruckData;

    if (debouncedPlate) {
      data = data.filter((d) =>
        d.numberplate.toLowerCase().includes(debouncedPlate.toLowerCase())
      );
    }

    if (selectedDate) {
      data = data.filter((d) => d.date === selectedDate);
    }

    if (day) {
      data = data.filter((d) => d.day === day);
    }

    if (inTime) {
      data = data.filter((d) => d.inTime >= inTime);
    }

    if (outTime) {
      data = data.filter((d) => d.outTime <= outTime);
    }

    setFilteredData(data);
  }, [debouncedPlate, selectedDate, day, inTime, outTime]);

  // Reset filter handler
  const resetFilters = () => {
    setNumberplate('');
    setDebouncedPlate('');
    setSelectedDate('');
    setDay('');
    setInTime('');
    setOutTime('');
    setFilteredData(TruckData);
  };

  return (
    <div>
      <div className="font-bold text-xl">
        <h1>Truck Timeline</h1>
      </div>
      <hr className="border border-gray-200 my-4" />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <input
          type="text"
          placeholder="Search by Numberplate"
          value={numberplate}
          onChange={(e) => setNumberplate(e.target.value)}
          className="p-2 border rounded w-60"
        />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded w-52"
        />

        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="p-2 border rounded w-40"
        >
          <option value="">Select Day</option>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
            (d) => (
              <option key={d} value={d}>
                {d}
              </option>
            )
          )}
        </select>

        <input
          type="time"
          value={inTime}
          onChange={(e) => setInTime(e.target.value)}
          className="p-2 border rounded w-40"
        />

        <input
          type="time"
          value={outTime}
          onChange={(e) => setOutTime(e.target.value)}
          className="p-2 border rounded w-40"
        />

        <button
          onClick={resetFilters}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Truck Numberplate</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Day</th>
              <th className="px-4 py-2 border">In Time</th>
              <th className="px-4 py-2 border">Out Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border">{row.numberplate}</td>
                  <td className="px-4 py-2 border">{row.date}</td>
                  <td className="px-4 py-2 border">{row.day}</td>
                  <td className="px-4 py-2 border">{row.inTime}</td>
                  <td className="px-4 py-2 border">{row.outTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 border text-center" colSpan={5}>
                  No matching results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
