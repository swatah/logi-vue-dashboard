    import React, { useState } from "react";
    import ReactApexChart from "react-apexcharts";

    const PalletEfficiencyChart = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

    const [chartData, setChartData] = useState({
        series: [
        {
            name: 'Truck 1',
            data: [44, 55, 41, 67, 22, 43],
        },
        {
            name: 'Truck 2',
            data: [13, 23, 20, 8, 13, 27],
        },
        {
            name: 'Truck 3',
            data: [11, 17, 15, 15, 21, 14],
        },
        {
            name: 'Truck 4',
            data: [21, 7, 25, 13, 22, 8],
        },
        {
            name: 'Truck 5',
            data: [15, 19, 12, 20, 18, 10],
        },
        ],
        options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: { show: true },
            zoom: { enabled: false },
        },
        colors: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE", "#DBEAFE"], // Blue shades
        plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: '50%',
            borderRadius: 6,
            borderRadiusApplication: 'end',
            },
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            categories: [
            '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan'
            ],
            title: {
            text: 'Date'
            }
        },
        yaxis: {
            title: {
            text: 'Pallets Handled'
            }
        },
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            shared: true,
            intersect: false,
        }
        }
    });

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        // Optional: update data based on date
        // Here you can add API fetch or simulate new data
    };

    return (
        <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Pallet Efficiency</h2>
            <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border p-2 rounded-md"
            />
        </div>

        <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
        />
        </div>
    );
    };

    export default PalletEfficiencyChart;
