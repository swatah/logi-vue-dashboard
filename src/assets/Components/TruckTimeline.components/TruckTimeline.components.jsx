import React from 'react'
import BottleneckHeatmap from '../../../Components/TruckTimelineGrantView'
// import BottleneckLineChart from '../../../Components/TruckTimelineGrantView'
// import TruckTimelineGrantView from '../../../Components/TruckTimelineGrantView'
export default function TruckTimeline() {
  return (
    <>
      <div>TruckTimeline</div>
      <div className="">
        {/* <TruckTimelineGrantView/> */}
        {/* <BottleneckLineChart/> */}
        <BottleneckHeatmap/>
      </div>
    </>
  )
}
