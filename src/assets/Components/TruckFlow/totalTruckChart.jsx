import React from "react";
import ReactApexChart from "react-apexcharts";

const TotalTruckChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Total Trucks",
        data: [24, 30, 28, 32, 29, 26, 28], // Example truck count per day
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: "60%",
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#000"],
        },
      },
      xaxis: {
        categories: [
          "Apr 15",
          "Apr 16",
          "Apr 17",
          "Apr 18",
          "Apr 19",
          "Apr 20",
          "Apr 21",
        ],
        title: {
          text: "Total Number of Trucks",
        },
      },
      yaxis: {
        title: {
          text: "Date",
        },
      },
      title: {
        text: "Total Trucks Summary by Day",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
      colors: ["#46bbe3"], // Green shade
    },
  });

  return (
    <div className="p-4 w-full">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TotalTruckChart;
