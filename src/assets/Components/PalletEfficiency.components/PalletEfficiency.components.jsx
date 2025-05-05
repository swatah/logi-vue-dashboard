import React from "react";
import PalletEfficiencyChart from "./PalletEfficiencyChart";
import PalletsPerTruckGauge from "./PalletsPerTruckGauge";
import LoadingSpeedLineChart from "./LoadingSpeedLineChart";
import HandledManuallyPieChart from "./HandledManuallyPieChart";

export default function PalletEfficiency() {

    const loadingData = {
        labels: ["Truck 1", "Truck 2", "Truck 3", "Truck 4"],
        datasets: [
          {
            label: "Loading Speed",
            data: [30, 50, 45, 60],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
        ],
      };
  return (
    <>
      <div className="font-bold text-xl">
        <h1>Pallet Efficiency</h1>
      </div>
      <hr className="border border-gray-200" />
      <div className="flex flex-col gap-6 p-6">
        {/* First Row */}
        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <PalletEfficiencyChart />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <PalletsPerTruckGauge/>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <LoadingSpeedLineChart/>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <HandledManuallyPieChart/>
          </div>
        </div>
      </div>
    </>
  );
}
