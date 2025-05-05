import React from "react";
import ReactApexChart from "react-apexcharts";

const PalletsPerTruckGauge = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 350,
    },
    series: [70], // Progress (e.g., 70% complete)
    labels: ["Pallet Efficiency"], // Title of the chart
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: "22px",
            fontWeight: "bold",
            color: "#333",
          },
          value: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#333",
          },
        },
      },
    },
    colors: ["#46bbe3"], // Color of the gauge
  };

  return (
    <div className="flex">
      {/* Left Column - Gauge Chart */}
      <div style={{ width: "50%" }}>
        <ReactApexChart options={options} series={options.series} type="radialBar" height={350} />
      </div>

      {/* Right Column - Stats */}
      <div style={{ width: "50%", paddingLeft: "20px" }}>
        <div>
          <h3>Completed</h3>
          <p>70 Pallets</p>
        </div>
        <div>
          <h3>Target</h3>
          <p>100 Pallets</p>
        </div>
      </div>
    </div>
  );
};

export default PalletsPerTruckGauge;
