import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ActiveVsIdleTimePie = () => {
  const [selectedDate, setSelectedDate] = useState(""); // Track the selected date
  const [activeTime, setActiveTime] = useState(70); // Example: 70% active time
  const [idleTime, setIdleTime] = useState(30); // Example: 30% idle time

  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Active Time", "Idle Time"],
    colors: ["#0e76a8", "#e5e7eb"],
    legend: {
      position: "bottom",
      labels: {
        colors: ["#374151", "#374151"],
        useSeriesColors: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Math.round(val)}%`,
    },
  };

  // Simulate new data based on the selected date (you can replace this logic with actual data fetching)
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    simulateDataForDate(date);
  };

  // Simulate data for a selected date
  const simulateDataForDate = (date) => {
    // For example, randomize the active and idle time percentage based on the date.
    const randomActiveTime = Math.floor(Math.random() * 100);
    const randomIdleTime = 100 - randomActiveTime;

    setActiveTime(randomActiveTime);
    setIdleTime(randomIdleTime);
  };

  return (
    <div>
      {/* Date Picker */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-semibold text-xl">Active vs Idle Time</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      {/* Pie Chart */}
      <ReactApexChart
        options={options}
        series={[activeTime, idleTime]} // Dynamic values for active and idle time
        type="pie"
        height={350}
      />
    </div>
  );
};

export default ActiveVsIdleTimePie;
