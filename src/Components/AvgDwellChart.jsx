// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const AvgDwellChart = () => {
//   const chartOptions = {
//     series: [76, 67, 45], // Example values for avg dwell, expected dwell, delayed
//     chart: {
//       height: 390,
//       type: "radialBar",
//     },
//     plotOptions: {
//       radialBar: {
//         offsetY: 0,
//         startAngle: 0,
//         endAngle: 270,
//         hollow: {
//           margin: 5,
//           size: "30%",
//           background: "transparent",
//         },
//         dataLabels: {
//           name: {
//             show: false,
//           },
//           value: {
//             show: false,
//           },
//         },
//         barLabels: {
//           enabled: true,
//           useSeriesColors: true,
//           offsetX: -8,
//           fontSize: "14px",
//           formatter: function (seriesName, opts) {
//             return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}%`;
//           },
//         },
//       },
//     },
//     colors: ["#3b82f6", "#10b981", "#ef4444"], // blue, green, red
//     labels: ["Avg Dwell", "Expended Dwell", "Delayed Time"],
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <div className="p-4 w-full">
//       <h2 className="text-lg font-semibold mb-4">Dwell Time Summary</h2>
//       <ReactApexChart
//         options={chartOptions}
//         series={chartOptions.series}
//         type="radialBar"
//         height={390}
//       />
//     </div>
//   );
// };

// export default AvgDwellChart;
