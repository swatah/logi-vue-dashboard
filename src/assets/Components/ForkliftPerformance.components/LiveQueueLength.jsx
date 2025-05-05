import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LiveQueueLength = () => {
  const [queueLengthData, setQueueLengthData] = useState([]);
  const [hours, setHours] = useState(
    Array.from({ length: 24 }, (_, i) => `${i + 1}-${i + 2}`)
  ); // Represents hourly slots from 1-2, 2-3, ..., 23-24
  const [selectedDate, setSelectedDate] = useState("");
  const [dateData, setDateData] = useState([]);

  // Handle date change and simulate data for the selected day
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Simulate data for the selected date
    simulateDataForDate(e.target.value);
  };

  // Generate random queue length data for the selected date
  const simulateDataForDate = (date) => {
    // For simplicity, we're using random data. In a real-world scenario, you'd fetch data based on the selected date.
    const simulatedData = Array.from({ length: 24 }, () => Math.floor(Math.random() * 15));
    setDateData(simulatedData);
    setQueueLengthData(simulatedData); // Update the chart data
  };

  useEffect(() => {
    // Simulate initial data for the current date when the component loads
    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    setSelectedDate(currentDate);
    simulateDataForDate(currentDate);
  }, []);

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: hours, // Hourly categories (1-2, 2-3, ..., 23-24)
    },
    yaxis: {
      title: { text: "Queue Length" },
    },
    stroke: { curve: "smooth" },
    markers: { size: 4 },
  };

  return (
    <div>
      {/* Date Picker */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-semibold text-xl">Live Queue Length</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      {/* Chart */}
      <ReactApexChart
        options={options}
        series={[{ data: queueLengthData }]}
        type="area"
        height={350}
      />
    </div>
  );
};

export default LiveQueueLength;
