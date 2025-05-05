import React from "react";
import ReactApexChart from "react-apexcharts";

// Define color constants for reuse
const COLORS = {
  avg: "#0a2e6c",       // Dark Blue
  expected: "#10b981",  // Green
  completed: "#46bbe3", // Light Blue
  delayed: "#ef4444",   // Red
};

const DwellSummaryCard = () => {
  const avgDwell = 4520;
  const expDwell = 3600;
  const completedTime = 5000;
  const delayed = Math.max(0, completedTime - expDwell);
  const maxTime = 7200;

  const series = [
    Math.round((avgDwell / maxTime) * 100),
    Math.round((expDwell / maxTime) * 100),
    Math.round((completedTime / maxTime) * 100),
    Math.round((delayed / maxTime) * 100),
  ];

  const options = {
    chart: {
      height: 420,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
        },
        dataLabels: {
          name: { show: false },
          value: { show: false },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: "14px",
          formatter: (seriesName, opts) =>
            `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}%`,
        },
      },
    },
    labels: ["Avg Dwell", "Exp Dwell", "Completed", "Delayed"],
    colors: [COLORS.avg, COLORS.expected, COLORS.completed, COLORS.delayed],
    responsive: [
      {
        breakpoint: 480,
        options: { legend: { show: false } },
      },
    ],
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="p-6 w-full">
      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Dwell Time Summary</h3>

      <div className="flex flex-wrap">
        {/* Chart Left */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={420}
          />
        </div>

        {/* Time Values Right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h4 className="text-sm text-gray-500">Average Dwell Time</h4>
              <p className="text-2xl font-semibold" style={{ color: COLORS.avg }}>
                {formatTime(avgDwell)}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Expected Dwell Time</h4>
              <p className="text-2xl font-semibold" style={{ color: COLORS.expected }}>
                {formatTime(expDwell)}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Completed Time</h4>
              <p className="text-2xl font-semibold" style={{ color: COLORS.completed }}>
                {formatTime(completedTime)}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Delayed Time</h4>
              <p className="text-2xl font-semibold" style={{ color: COLORS.delayed }}>
                {formatTime(delayed)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DwellSummaryCard;
