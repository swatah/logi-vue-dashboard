import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TripsPerHour = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [state, setState] = useState({
    series: [
      {
        name: 'Forklift Trips',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 30)) // Random data for trips per hour
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: Array.from({ length: 24 }, (_, i) => `${i + 0}-${i + 1}`), // 1-2, 2-3, ..., 23-24
      },
      yaxis: {
        title: {
          text: 'Number of Trips'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " trips";
          }
        }
      },
    },
  });

  // Handle the date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // You can implement logic here to fetch or generate trips for that particular date
    // For now, it uses random data for simplicity.
    setState({
      ...state,
      series: [
        {
          name: 'Forklift Trips',
          data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 30)) // Random data for trips per hour
        }
      ]
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="">
            <p className="font-semibold text-xl">Forklift Trips per Hour on Select a Date</p>
        </div>
        <div>
          <input
            id="date-picker"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default TripsPerHour;
