import React, from "react";
import TotalTruckChart from "./totalTruckChart";
import TurnbackChart from "./turnbackChart";
import DwellSummaryCard from "./DwellSummaryCard";
import IdleTimeChart from "./IdleTimeChart";
import TruckFlowHistoryTable from "./TruckFlowHistoryTable";

export default function TotalTruck() {

  return (
    <>
      <div className="font-bold text-xl">
          <h1>Truck Flow Summary</h1>
      </div>
      <hr className="border border-gray-200" />
      <div className="grid grid-cols-4 gap-4 w-full">
        {/* Column 1 */}
        <div className="w-full col-span-2 shadow-lg">
          <div className="">
            <TotalTruckChart />
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full col-span-2 shadow-lg">
          <div className="">
            <TurnbackChart />
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full col-span-2 shadow-lg">
          <div className="">
            {/* <AvgDwellChart/> */}
            <DwellSummaryCard />
          </div>
        </div>
        {/* Column 4 */}
        <div className="w-full col-span-2 shadow-lg">
          <div className="">
            {/* <AvgDwellChart/> */}
            <IdleTimeChart />
          </div>
        </div>
      </div>

      {/* <BarChartData/> */}
      <div className="w-full">
        <div className="">
          <TruckFlowHistoryTable />
        </div>
      </div>
    </>
  );
}
