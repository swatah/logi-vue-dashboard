import React from "react";
import ReactApexChart from "react-apexcharts";

const TurnbackChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Turnback Trucks",
        data: [12, 15, 9, 18, 25, 10, 13],
      },
      {
        name: "Overstays",
        data: [5, 3, 8, 4, 6, 2, 7],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
          barHeight: "80%",
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -10,
        style: {
          fontSize: "10px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
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
          text: "Number of Trucks",
        },
      },
      yaxis: {
        title: {
          text: "Date",
        },
      },
      title: {
        text: "Trucks Turnback vs Overstays",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
      colors: ["#0a2e6c", "#46bbe3"], // Example: orange for Turnbacks, green for Overstays
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

export default TurnbackChart;
