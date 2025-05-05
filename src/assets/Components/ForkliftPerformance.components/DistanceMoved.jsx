import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const DistanceMoved = () => {
  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today); // Default to today's date
  const [distanceData, setDistanceData] = useState([]);
  const [isLive, setIsLive] = useState(true);

  // Simulated data for specific dates
  const distanceDataForDates = {
    "2025-04-01": Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
    "2025-04-02": Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
    "2025-04-03": Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
    "2025-04-04": Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
  };

  // Handle date change from picker
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    const today = new Date().toISOString().split("T")[0]; // Get today's date in yyyy-mm-dd format

    // Check if selected date is today's date
    if (date === today) {
      setIsLive(true);
      startLiveData(); // Start live data updates
    } else {
      setIsLive(false);
      fetchDataForDate(date); // Fetch historical data for selected date
    }
  };

  // Simulate live data for current date
  const startLiveData = () => {
    const interval = setInterval(() => {
      setDistanceData((prevData) => {
        const newData = [...prevData, Math.floor(Math.random() * 100)];
        if (newData.length > 24) newData.shift(); // Limit to 24 hours
        return newData;
      });
    }, 1000); // Update every second for live data

    return () => clearInterval(interval); // Cleanup interval on unmount or date change
  };

  // Fetch historical data for a specific date
  const fetchDataForDate = (date) => {
    const data = distanceDataForDates[date] || Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
    setDistanceData(data);
  };

  // Chart options
  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: Array.from({ length: 24 }, (_, i) => `Hour ${i + 1}`),
    },
    yaxis: {
      title: { text: "Distance Moved (in meters)" },
    },
    stroke: { curve: "smooth" },
    markers: { size: 4 },
  };

  useEffect(() => {
    if (isLive) {
      startLiveData(); // Start live updates if today is selected
    } else {
      fetchDataForDate(selectedDate); // Fetch historical data for the selected date
    }
  }, [isLive, selectedDate]);

  return (
    <div>
      {/* Date Picker */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-semibold text-xl">Distance Moved</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      {/* Display chart */}
      <ReactApexChart options={options} series={[{ data: distanceData }]} type="area" height={350} />

      {/* Indicate live status */}
      {/* {isLive && <div className="mt-4 text-green-500 font-semibold">Live Data: Updating every second</div>} */}
    </div>
  );
};

export default DistanceMoved;
