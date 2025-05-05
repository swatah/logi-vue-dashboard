import React from "react";
import ReactApexChart from "react-apexcharts";

const ActiveVsIdleTimeDonut = () => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Active Time", "Idle Time"],
    colors: ["#1f77b4", "#f2f2f2"],
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

  const series = [65, 35]; // Example: 65% active, 35% idle

  return (
    <div>
      <h2 className="font-semibold text-xl">Active vs Idle Time (Donut)</h2>
      <ReactApexChart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default ActiveVsIdleTimeDonut;
