import React from "react";
import ReactApexChart from "react-apexcharts";

const HandledManuallyPieChart = () => {
  const options = {
    chart: {
      type: "pie",
      height: 350,
    },
    labels: ["Handled Manually", "Not Handled Manually"],
    colors: ["#0a2e6c", "#46bbe3"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Math.round(val)}%`,
    },
  };

  const series = [65, 35]; // Example: 65% handled manually, 35% not handled

  return (
    <div>
      <h2>Handled Manually</h2>
      <ReactApexChart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default HandledManuallyPieChart;
