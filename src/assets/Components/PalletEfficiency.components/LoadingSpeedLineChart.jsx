import React from "react";
import ReactApexChart from "react-apexcharts";

const LoadingSpeedLineChart = () => {
  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: { enabled: false },
    },
    stroke: {
      width: 3,
    },
    xaxis: {
      categories: ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00"], // Sample time intervals
    },
    yaxis: {
      title: {
        text: "Loading Speed (pallets/hour)",
      },
    },
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "Truck 1",
      data: [15, 25, 22, 27, 20, 30], // Sample loading speed data
    },
    {
      name: "Truck 2",
      data: [10, 20, 18, 23, 28, 25],
    },
    {
      name: "Truck 3",
      data: [12, 24, 20, 22, 30, 26],
    },
  ];

  return (
    <div>
      <h2>Loading Speed Over Time</h2>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LoadingSpeedLineChart;
