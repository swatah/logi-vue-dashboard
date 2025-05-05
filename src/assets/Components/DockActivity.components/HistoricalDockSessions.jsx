import React from 'react';
import ReactApexChart from 'react-apexcharts';

const HistoricalDockSessions = ({ dates }) => {
  const options = {
    chart: {
      type: 'area',
      stacked: false,
      height: 400,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
      foreColor: '#1e3a8a', // dark blue text (Tailwind blue-900)
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
    },
    // title: {
    //   text: 'Historical Dock Sessions',
    //   align: 'left',
    //   style: {
    //     fontSize: '20px',
    //     color: 'black', // dark blue
    //   },
    // },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1   ,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
        gradientToColors: ['#0a2e6c'], // light blue
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(1);
        },
      },
      title: {
        text: 'Sessions',
        style: {
          color: '#1e3a8a',
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#1e3a8a',
        },
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
    colors: ['#1e3a8a'], // dark blue line
  };

  const series = [
    {
      name: 'Dock Sessions',
      data: dates,
    },
  ];

  return (
    <div className=" rounded-xl py-4">
      <h2 className="text-2xl font-semibold mb-4">Historical Dock Sessions</h2>
      <ReactApexChart options={options} series={series} type="area" height={400} />
    </div>
  );
};

export default HistoricalDockSessions;
