import React from "react";
import LiveQueueLength from "./LiveQueueLength";
import ActiveVsIdleTimePie from "./ActiveVsIdleTimePie";
import DistanceMoved from "./DistanceMoved";
import TripsPerHour from "./TripsPerHour";
import ActiveVsIdleTimeDonut from "./ActiveVsIdleTimeDonut";
// import LiveQue from "./LiveQue"
export default function ForkliftPerformance() {
  return (
    <>
      <div className="font-bold text-xl">
        <h1>Forklift Performance</h1>
      </div>
      <hr className="border border-gray-200" />
      <div className="w-full">
        <div className="flex space-x-4 gap-5">
          <div className="flex-1">
            <LiveQueueLength/>
          </div>
          <div className="flex-1">
            <ActiveVsIdleTimePie/>
          </div>
        </div>

        <div className="flex space-x-4 mt-4 gap-5">
          <div className="flex-1">
            <DistanceMoved/>
          </div>
          <div className="flex-1">
            <TripsPerHour/>
          </div>
          {/* <div className="flex-1">
            <ActiveVsIdleTimeDonut/>
          </div> */}
        </div>
      </div>
    </>
  );
}
