// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const TruckTimelineGrantView = () => {
//   const options = {
//     chart: {
//       height: 350,
//       type: 'bar',
//       toolbar: { show: false },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: true,
//         barHeight: '80%',
//         distributed: true,
//       },
//     },
//     xaxis: {
//       categories: ['Truck 1', 'Truck 2', 'Truck 3', 'Truck 4', 'Truck 5'], // Truck IDs
//       title: {
//         text: 'Time (Entry → Exit)',
//       },
//     },
//     yaxis: {
//       title: {
//         text: 'Truck ID',
//       },
//     },
//     series: [
//       {
//         name: 'Entry Time',
//         data: [5, 3, 1, 2, 4], // Entry times for each truck
//       },
//       {
//         name: 'Exit Time',
//         data: [10, 9, 7, 8, 9], // Exit times for each truck
//       },
//     ],
//   };

//   return (
//     <div className="w-full p-6">
//       <ReactApexChart options={options} series={options.series} type="bar" height={350} />
//     </div>
//   );
// };

// export default TruckTimelineGrantView;




// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const BottleneckLineChart = () => {
//   const options = {
//     chart: {
//       height: 350,
//       type: 'line',
//     },
//     xaxis: {
//       categories: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
//     },
//     yaxis: {
//       title: {
//         text: 'Truck Queue Time (minutes)',
//       },
//     },
//     series: [
//       {
//         name: 'Truck Queue Time',
//         data: [0, 2, 5, 10, 15], // Queue time data for each time interval
//       },
//     ],
//     annotations: {
//       yaxis: [
//         {
//           y: 10, // This marks where a significant bottleneck occurred
//           borderColor: '#FF0000',
//           label: {
//             text: 'Bottleneck',
//             style: {
//               color: '#fff',
//               background: '#FF0000',
//             },
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div className="w-full p-6">
//       <ReactApexChart options={options} series={options.series} type="line" height={350} />
//     </div>
//   );
// };

// export default BottleneckLineChart;




import React from "react";
import ReactApexChart from "react-apexcharts";

const BottleneckHeatmap = () => {
  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [
            { from: 0, to: 0, name: "No Bottleneck", color: "#e5e7eb" },
            { from: 1, to: 1, name: "Low Bottleneck", color: "#46bbe3" },
            { from: 2, to: 2, name: "Medium Bottleneck", color: "#2fa3d5" },
            { from: 3, to: 3, name: "High Bottleneck", color: "#1172aa" },
            { from: 4, to: 5, name: "Severe Bottleneck", color: "#0a2e6c" },
          ],
        },
      },
    },
    xaxis: {
      categories: ['Truck 1', 'Truck 2', 'Truck 3', 'Truck 4', 'Truck 5'], // Truck IDs
    },
    yaxis: {
      categories: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'], // Time Intervals
    },
    series: [
      {
        name: 'Bottleneck Severity',
        data: [
          [0, 0, 1, 2, 3], // Bottleneck data at each truck for each time interval
        ],
      },
    ],
  };

  return (
    <div className="w-full p-6">
      <ReactApexChart options={options} series={options.series} type="heatmap" height={350} />
    </div>
  );
};

export default BottleneckHeatmap;
