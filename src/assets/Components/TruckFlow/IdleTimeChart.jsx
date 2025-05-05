import React from "react";
import ReactApexChart from "react-apexcharts";

const IdleTimeSummary = () => {
  const totalIdleMins = 63; // 1h 3m 0s

  // Equally divide total time
  const idealLoading = totalIdleMins / 2;
  const idealUnloading = totalIdleMins / 2;

  // Actual times in minutes
  const actualLoading = 35;
  const actualUnloading = 28;

  // Calculations
  const extraLoading = Math.max(0, actualLoading - idealLoading);
  const savedLoading = Math.max(0, idealLoading - actualLoading);

  const extraUnloading = Math.max(0, actualUnloading - idealUnloading);
  const savedUnloading = Math.max(0, idealUnloading - actualUnloading);

  // Pie chart values — only show time spent and extra
  const series = [
    actualLoading,
    extraLoading,
    actualUnloading,
    extraUnloading,
  ];

  const labels = [
    "Loading Time",
    "Extra Loading Time",
    "Unloading Time",
    "Extra Unloading Time",
  ];

  const colors = ["#0a2e6c", "#ef4444", "#46bbe3", "#f97316"];

  const options = {
    series,
    chart: {
      type: "pie",
      width: 300,
    },
    labels,
    colors,
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const mins = series[opts.seriesIndex];
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${h}h ${m}m`;
      },
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        colors: ["#fff"],
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
        },
      },
    ],
  };

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m 0s`;
  };

  return (
    <div className="p-6 w-full rounded">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Idle Time (Loading / Unloading)
        </h2>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6">
        {/* Chart */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={350}
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Top Summary */}
          <div>
            <h4 className="text-sm text-gray-500">Total Idle Time</h4>
            <p className="text-xl font-bold text-[#0a2e6c]">
              {formatTime(totalIdleMins)}
            </p>
            <p className="text-sm text-gray-500">
              Ideal Time Split: {formatTime(idealLoading)} each
            </p>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 gap-6">
            {/* Loading */}
            <div>
              <h3 className="text-lg font-bold underline">Loading</h3>
              <p className="text-sm text-gray-500 mt-2">Taken Time</p>
              <p className="text-lg font-bold text-[#0a2e6c]">
                {formatTime(actualLoading)}
              </p>
              <p className="text-sm text-gray-500 mt-2">Extra Time</p>
              <p className="text-md font-semibold text-red-500">
                {extraLoading > 0 ? formatTime(extraLoading) : "No Delay"}
              </p>
              <p className="text-sm text-gray-500 mt-2">Saved Time</p>
              <p className="text-md font-semibold text-green-600">
                {savedLoading > 0 ? formatTime(savedLoading) : "—"}
              </p>
            </div>

            {/* Unloading */}
            <div>
              <h3 className="text-lg font-bold underline">Unloading</h3>
              <p className="text-sm text-gray-500 mt-2">Taken Time</p>
              <p className="text-lg font-bold text-[#46bbe3]">
                {formatTime(actualUnloading)}
              </p>
              <p className="text-sm text-gray-500 mt-2">Extra Time</p>
              <p className="text-md font-semibold text-orange-500">
                {extraUnloading > 0 ? formatTime(extraUnloading) : "No Delay"}
              </p>
              <p className="text-sm text-gray-500 mt-2">Saved Time</p>
              <p className="text-md font-semibold text-green-600">
                {savedUnloading > 0 ? formatTime(savedUnloading) : "—"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdleTimeSummary;
