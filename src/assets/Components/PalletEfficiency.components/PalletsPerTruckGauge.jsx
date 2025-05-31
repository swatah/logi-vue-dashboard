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
    <>
    <h2 className="text-xl font-semibold">Pallet Efficiency</h2>
    <div className="grid grid-flow-col">
      {/* Left Column - Gauge Chart */}
      <div className="">
        <ReactApexChart options={options} series={options.series} type="radialBar" height={350} />
      </div>

      {/* Right Column - Stats */}
      <div className=" space-y-4 flex flex-col justify-center">
        <div>
          <h3 className="text-lg font-semibold">Completed</h3>
          <p>70 Pallets</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Target</h3>
          <p>100 Pallets</p>
        </div>
      </div>
    </div>

    </>
     );
};

export default PalletsPerTruckGauge;
