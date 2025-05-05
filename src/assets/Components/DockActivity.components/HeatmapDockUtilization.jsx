import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const HeatmapDockUtilization = () => {
  const [year, setYear] = useState(2024);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const monthDays = {
    Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
    Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31
  };

  const generateHeatmapData = () => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      monthDays.Feb = 29; // Leap year
    }

    return months.map((month) => {
      const days = [];
      for (let d = 1; d <= 31; d++) {
        days.push({
          x: d.toString(),
          y: d <= monthDays[month] ? Math.floor(Math.random() * 5) : null
        });
      }
      return {
        name: month,
        data: days
      };
    });
  };

  const [series, setSeries] = useState(generateHeatmapData());

  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
    setSeries(generateHeatmapData());
  };

  const options = {
    chart: {
      height: 550,
      type: "heatmap",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0, // Adjust intensity for a smoother transition
        colorScale: {
          ranges: [
            { from: 0, to: 0, name: "No Activity", color: "#e5e7eb" },
            { from: 1, to: 1, name: "Low", color: "#64b5f6" },  // Light blue
            { from: 2, to: 2, name: "Medium", color: "#1e88e5" }, // Medium blue
            { from: 3, to: 3, name: "High", color: "#1565c0" },   // Darker blue
            { from: 4, to: 5, name: "Very High", color: "#0d47a1" } // Dark blue
          ]
        }
      }
    },
    dataLabels: { enabled: false },
    xaxis: {
      type: "category",
      title: {
        text: "Day of Month",
        style: { color: "#374151" }
      },
      labels: {
        rotate: -45,
        style: { fontSize: "12px" }
      }
    },
    yaxis: {
      type: "category",
      categories: months,
      title: {
        text: "Month",
        style: { color: "#374151" }
      },
      labels: {
        style: { fontSize: "14px", fontWeight: 500 }
      }
    },
    grid: { padding: { right: 30 } },
    tooltip: {
      y: {
        formatter: (val) => (val !== null ? `${val} dock sessions` : "No data")
      }
    },
    legend: { show: false }
  };

  return (
    <div className="w-full p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Dock Utilization Heatmap</h2>
          <p className="text-sm text-gray-500">Year: {year} </p>
        </div>
        <select
          value={year}
          onChange={handleYearChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[2021, 2022, 2023, 2024, 2025].map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      {/* Color Legend */}
      <div className="mb-0">
        <div className="flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4" style={{ backgroundColor: "#e5e7eb" }}></div>
            <span className="ml-1 text-xs">- No Activity</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4" style={{ backgroundColor: "#64b5f6" }}></div>
            <span className="ml-1 text-xs">- Low</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4" style={{ backgroundColor: "#1e88e5" }}></div>
            <span className="ml-1 text-xs">- Medium</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4" style={{ backgroundColor: "#1565c0" }}></div>
            <span className="ml-1 text-xs">- High</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4" style={{ backgroundColor: "#0d47a1" }}></div>
            <span className="ml-1 text-xs">- Very High</span>
          </div>
        </div>
      </div>

      <div style={{ minWidth: "1200px" }}>
        <ReactApexChart options={options} series={series} type="heatmap" height={350} />
      </div>
    </div>
  );
};

export default HeatmapDockUtilization;
